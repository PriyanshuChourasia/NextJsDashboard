"use client";
import { useEffect } from "react";
import { useAppSelector } from "../redux";
import Navbar from "../ui/dashboard/navbar";
import Sidebar from "../ui/dashboard/sidebar";


export default function Layout({children}:{children: React.ReactNode}){
    const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed);
    const isDarkMode = useAppSelector((state)=> state.global.isDarkMode);

    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    },[isDarkMode]);
    
    return(
        <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
            {/* Sidebar */}
            <Sidebar/>
            <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${ isSidebarCollapsed ? "" : "md:pl-64"}`}>
                {/* navbar */}
                <Navbar/>
                <div className="pl-4 pr-6">{children}</div>
            </main>
        </div>
    )
}