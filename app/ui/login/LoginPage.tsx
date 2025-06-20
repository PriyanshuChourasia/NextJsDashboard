"use client";
import Image from "next/image";

import LoginForm from "./Form";
import { useEffect } from "react";



const LoginPage = () => {

    useEffect(()=>{
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
        if(systemTheme.matches){
            // document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    },[]);


    return(
        <div className="bg-white sm:flex sm:w-5/6 xl:grid lg:w-5/6 xl:w-4/6 dark:bg-black dark:border-white dark:border-[1px] lg:grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid 2xl:grid-cols-2 w-3/6 shadow-md shadow-gray-400">
            <div className="w-auto md:w-full py-24 px-12">
                <div className="pb-12">
                    {/* <Image src={'/logo.jpeg'} alt="Logo" width={20} height={20} className="bg-transparent"/>     */}
                    <h1 className="text-xs dark:text-white">{process.env.NEXT_PUBLIC_COMPANY_NAME}</h1>
                </div>
                <div className="pb-8">
                    <h1 className="text-3xl dark:text-white font-bold">Namaste</h1>
                    <h2 className="text-4xl dark:text-white font-bold mb-4">Welcome Back</h2>
                    <span className="text-gray-600 dark:text-gray-400">Hey, Welcome back, Log in. Plan smart Execute better</span>
                </div>
                <LoginForm/>
            </div>
            <div className="h-full w-full sm:hidden md:hidden relative">
                <Image src={'/task1.jpg'} alt="Task Image" fill  className="object-cover"/>
            </div>
        </div>
    )
}


export default LoginPage;