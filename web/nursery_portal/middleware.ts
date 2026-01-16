import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const authCookieName = "a_session_first-steps";

const PUBLIC_PATHS = ["/login"];

const ROLE_PATHS: { [path: string]: string[] } = {
  "/organisation": ["owner"],
};



export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get(authCookieName);
  const userRole = request.cookies.get('user_role')?.value;

  //Redirect authenticated users away from login page
  if (PUBLIC_PATHS.includes(pathname) && sessionCookie) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // Allow public paths
  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  // Check for authentication cookie
  if (!sessionCookie) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Role-based access control
  for (const [path, allowedRoles] of Object.entries(ROLE_PATHS)) {
    if (pathname.startsWith(path) && !allowedRoles.includes(userRole || "")) {
      const dashboardUrl = new URL("/dashboard", request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};