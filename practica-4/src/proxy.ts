import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
const token = request.cookies.get("Authorization")?.value;
  const pathname = request.nextUrl.pathname;

  const isLogin = pathname === "/login";
  const isRegister = pathname === "/register";
  const isPublic = isLogin || isRegister;

  const hasValidToken = token && token !== "undefined";

  if (!hasValidToken && !isPublic) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (hasValidToken && isLogin) {
    return NextResponse.redirect(new URL("/principal", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};