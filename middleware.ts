import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Example: protect dashboard
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const loggedIn = true; // Replace with real auth check
    if (!loggedIn) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.next();
}
