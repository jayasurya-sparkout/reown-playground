import { request } from "http";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {

    const requestHaders = new Headers(req.headers);
    const response = NextResponse.next({
        request: {
            headers: requestHaders
        }
    });

    const pathname = req.nextUrl.pathname;
    const allowedPaths = ['/login'];

    if (!allowedPaths.includes(pathname)) {
        return NextResponse.redirect(new URL('/login', req.url));
    } 
    return response;

}