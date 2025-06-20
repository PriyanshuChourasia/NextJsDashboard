import {useMutation} from "@tanstack/react-query";
import { loginUser } from "../services/api";
import { ILoginRequestInterface } from "../interfaces/LoginRequestInterface";
import Cookie from "js-cookie";
import {toast} from "react-hot-toast";
import { useRouter } from "next/navigation";




export default function useLoginMutation(){

    const router = useRouter();

    return useMutation({
        mutationKey:["login-user"],
        mutationFn: (request:ILoginRequestInterface)=>{
            return loginUser(request);
        },
        retry:false,
        onSuccess:(data)=>{
            console.log("success: ",data);
            const token = data.data.data.access_token;

            // If token is valid
            if(token){
                console.log(token);
                Cookie.set("access_token",token,{
                    path:"/",
                    expires:4,
                    // secure:true,
                    sameSite:"Lax"
                });
                const refresh = data.data.data.refresh_token
                Cookie.set("refresh_token",refresh,{
                    path:"/",
                    expires:4,
                    // secure:true,
                    sameSite:"Lax"
                });
                toast.success('Logged In',{
                    position:"top-center",
                    duration:3000,
                    className:"text-base"
                });

                router.push("/dashboard")
            }
            // If logged in but didn't got the token
            else
            {
                toast.success('Logged Successfull! Token not received',{
                    position:"top-center",
                    duration:3000,
                    className:"text-base"
                });
            }
            console.clear();
        },
        onError:(error)=>{
            toast.error(error.message,{
                position:"top-center",
                duration:3000,
                className:"text-xl"
            });
            Cookie.remove("access_token");
            Cookie.remove("refresh_token");
            console.clear();
        }
    })
}