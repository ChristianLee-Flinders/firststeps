import { Router } from "express";
import { createClient } from "@supabase/supabase-js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// 👇 Register a user (for testing)
router.post("/register", async (req, res) => {
  const { email, password, first_name, last_name, organisation_id, user_type_id, role_id } = req.body;

  try {
    // 1️⃣ Create user in Supabase
    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (authError || !authUser.user) {
      return res.status(400).json({ error: authError?.message });
    }

    // 2️⃣ Create user in Prisma (linking auth_provider_id)
    const user = await prisma.user.create({
      data: {
        email,
        auth_provider_id: authUser.user.id,
        first_name,
        last_name,
        organisation_id,
        user_type_id,
        role_id,
      },
    });

    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 👇 Sign in route (for testing)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });

  res.json({
    access_token: data.session?.access_token,
    refresh_token: data.session?.refresh_token,
    user: data.user,
  });
});

export default router;
