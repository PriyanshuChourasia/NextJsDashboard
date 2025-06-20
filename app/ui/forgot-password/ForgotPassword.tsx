import { KeyRound } from "lucide-react";
import ForgotForm from "./components/ForgotForm";



export default function ForgotPassword(){
    return(
        <div className="">
            <div className="flex items-center justify-center">
                <KeyRound size={28} className="mb-8"/>
            </div>
            <div className="mb-10">
                <h1 className="text-3xl font-semibold text-center mb-4">Forgot your password?</h1>
                <span className="text-center text-gray-600 text-base">A code will sent to your email to help reset password</span>
            </div>
            <ForgotForm/>
        </div>
    )
}