import { useMutation } from "@tanstack/react-query";
import { IRegisterRequestInterface } from "../interfaces/RegisterInterface";
import { signUpUser } from "../services/api";
import toast from "react-hot-toast";




export default function UserRegisterMutation(){
    return useMutation({
        mutationKey: ["register-user"],
        mutationFn: (request:IRegisterRequestInterface)=>{
            return signUpUser(request);
        },
        retry:false,
        onSuccess:(data)=>{
            toast.success(data.data.message,{
                position:"top-right",
                duration: 2000
            });
        },
        onError:(error)=>{
            toast.error(error.message,{
                position:"top-right",
                duration:2000,
                className:"text-2xl"
            });
        }
    })
}