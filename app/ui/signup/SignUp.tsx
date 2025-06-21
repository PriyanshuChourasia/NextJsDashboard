import Image from "next/image";
import SignUpForm from "./components/SignUpForm";
import { COMPANY_NAME } from "@/app/lib/utils/env";




export default function SignUpPage(){
    return (
        <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 2xl:grid 2xl:grid-cols-2 w-full h-full">
            <div className="h-full w-full pt-28 px-12">
                <div className="pb-12">
                    <h1 className="text-2xl font-bold">{COMPANY_NAME}</h1>
                </div>
                <div className="text-center">
                    <h2 className="text-3xl font-medium">Create your account</h2>
                    <span className="text-gray-600 text-lg">Let's get started with your 30 days free trials</span>
                </div>
                <div className="flex justify-center mt-8">
                    <button type="button" className="border-2 flex items-center py-2 px-8 hover:shadow-sm hover:border-gray-700 transition-all duration-200 ease-in hover:shadow-gray-700 border-gray-500 rounded-lg gap-4">
                        <Image src={'/google.png'} alt="Google Image" width={24} height={16} className="sm:w-5 sm:h-5"/>
                        <span className="text-xl text-gray-700 font-medium hover:text-gray-800">Login with Google</span>
                    </button>
                </div>
                <hr className="mt-12 border-gray-600" />
                <div className="w-full flex justify-center">
                    <SignUpForm/>
                </div>
            </div>
            <div className="h-full sm:hidden w-full relative">
                <Image src={"/signup.jpg"} alt="SignUp Image" fill className="object-cover" />
            </div>
        </div>
    )
}