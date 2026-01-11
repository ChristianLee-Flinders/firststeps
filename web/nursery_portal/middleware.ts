import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get("a_session" + process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  const isLoggedIn = !!session;

  // Case 1: Logged-in user tries to access /login
  if (isLoggedIn && pathname === "/login") {
    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    );
  }

  // Case 2: Logged-out user tries to access protected pages
  if (!isLoggedIn && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}
