import type {NextAuthConfig} from "next-auth";
import { useAppSelector } from "./app/redux";

export const authConfig = {
    pages: {
        signIn: '/login'
    },
    callbacks:{
        authorized({auth,request:{nextUrl}}){
            const isLoggedIn = useAppSelector((state)=> state.global.isAuthenticated);
            const isDashboard = nextUrl.pathname.startsWith('/dashboard');

            if(isDashboard){
                if(isLoggedIn){
                    return true;
                }else{
                    return Response.redirect(new URL('/login',nextUrl));
                }
            }else if(isLoggedIn){
                return Response.redirect(new URL('/dashboard',nextUrl));
            }
            return true;
        }
    },
    providers: []
} satisfies NextAuthConfig;