import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("COOKIE:", request.cookies.get("otp")?.value);

  // const url = request.nextUrl;
  // const otp = request.cookies.get("otp")?.value;

  // const isProtected = url.pathname.startsWith("/u");
  // const isValid = otp === "1874";

  // if (isProtected && !isValid) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/u/:path*"],
};
