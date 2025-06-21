import { NextRequest, NextResponse } from "next/server";


export function middleware(req:NextRequest){
    const token = req.cookies.get("access_token");

    const pathName = req.nextUrl.pathname;

    if(pathName == "/"){
        if(token){
            return NextResponse.redirect(new URL("/dashboard",req.url));
        }else{
            return NextResponse.redirect(new URL("/login",req.url));
        }
    }

    if(pathName === "/login" && token){
        return NextResponse.redirect(new URL("/dashbaord",req.url));
    }

    if(pathName.startsWith("/dashboard") && !token){
        return NextResponse.redirect(new URL("/login",req.url));
    }

    return NextResponse.next();
}


export const config = {
    matcher:["/","/dashboard/:path*","/login"]
}