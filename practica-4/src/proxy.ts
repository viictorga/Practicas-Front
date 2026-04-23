import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token");

  const pathname = request.nextUrl.pathname;

  const isLogin = pathname === "/login";
  const isRegister = pathname === "/register";
  const isPublic = isLogin || isRegister;

  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isLogin) {
    return NextResponse.redirect(new URL("/principal", request.url));
  }

  return NextResponse.next();
}