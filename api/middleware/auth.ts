// middleware/auth.ts
import { Request, Response, NextFunction } from "express";
import { createClient } from "@supabase/supabase-js";
import { PrismaClient, User as PrismaUser, Role as PrismaRole, UserType as PrismaUserType } from "@prisma/client";

const prisma = new PrismaClient();

// env - make sure these are set in your .env (backend only)
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!; // must be service role key (never expose in frontend)

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// ---------- Types added to express Request -------------
declare global {
  namespace Express {
    interface Request {
      auth?: {
        // the raw supabase auth user id
        providerId: string;
        // the prisma user row (if found)
        user?: PrismaUser & {
          Role?: PrismaRole | null;
          UserType?: PrismaUserType | null;
        };
        // convenience
        roleName?: string | null;
        userTypeName?: string | null;
        // flattened permissions array (strings) from role.permissions JSON
        permissions?: string[];
      };
    }
  }
}

// ---------- Helper: parse permissions JSON ----------
function extractPermissions(obj: any): string[] {
  // We expect role.permissions to be either:
  // - an object { codes: ['perm:a', 'perm:b'] }
  // - an array of strings
  // - a map of {permCode: true}
  if (!obj) return [];
  if (Array.isArray(obj)) return obj.filter(Boolean).map(String);
  if (typeof obj === "object") {
    // try common shapes
    if (Array.isArray(obj.codes)) return obj.codes.map(String);
    // if it's a map of booleans
    return Object.keys(obj).filter((k) => !!obj[k]);
  }
  return [];
}

// ---------- Middleware: verify Supabase token and attach DB user ----------
export const authenticateSupabase = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Missing Authorization header" });
    }

    const token = authHeader.split(" ")[1];

    // Ask Supabase to validate the token and return the user
    // supabase-js v2: use auth.getUser(token)
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data?.user) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    const providerId = data.user.id;

    // Find local user by auth_provider_id
    const dbUser = await prisma.user.findUnique({
      where: { auth_provider_id: providerId },
      include: {
        Role: true,
        UserType: true,
      },
    });

    // Attach minimal auth info immediately
    req.auth = {
      providerId,
      user: dbUser ?? undefined,
      roleName: dbUser?.Role?.name ?? null,
      userTypeName: dbUser?.UserType?.name ?? null,
      permissions: dbUser?.Role ? extractPermissions(dbUser.Role.permissions) : [],
    };

    // If you want on-the-fly creation, you'd do it here **BUT**
    // your schema requires organisation_id (non-null). Auto-creation
    // would fail unless you provide org id. So we do NOT auto-create here.
    // If a user needs provisioning, return a helpful error below.
    if (!dbUser) {
      // User authenticated by Supabase but not present in your DB
      return res.status(403).json({
        error: "User authenticated but not provisioned in application database. Contact your admin.",
        providerId,
      });
    }

    next();
  } catch (err) {
    console.error("authenticateSupabase error:", err);
    res.status(500).json({ error: "Authentication failure" });
  }
};

// ---------- Middleware factory: allow only roles by name ----------
export const authorisedRoles = (...allowedRoleNames: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.auth?.user) return res.status(401).json({ error: "Unauthorized" });
    const roleName = req.auth.roleName ?? "";
    if (!allowedRoleNames.includes(roleName)) {
      return res.status(403).json({ error: "Forbidden: Insufficient role" });
    }
    next();
  };
};

// ---------- Middleware factory: require a permission code ----------
export const requirePermission = (permissionCode: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.auth?.user) return res.status(401).json({ error: "Unauthorized" });
    const perms = req.auth.permissions ?? [];
    if (perms.includes(permissionCode)) return next();
    return res.status(403).json({ error: "Forbidden: Missing permission" });
  };
};

// ---------- Middleware factory: require portal access (user type) ----------
export const requirePortalAccess = (portalName: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.auth?.user) return res.status(401).json({ error: "Unauthorized" });
    const userType = req.auth.user?.UserType;
    if (!userType) return res.status(403).json({ error: "Forbidden: No user type assigned" });
    // portal_access is a string[] in your schema
    const portals = userType.portal_access ?? [];
    if (Array.isArray(portals) && portals.includes(portalName)) {
      return next();
    }
    return res.status(403).json({ error: "Forbidden: No portal access" });
  };
};
