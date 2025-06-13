"use client";
import { Briefcase, ChevronDown, ChevronUp, LayoutDashboard, LockIcon, Settings, Users, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SidebarLink } from "./SidebarLink";
import { useAppDispatch, useAppSelector } from "@/redux";
import { setIsSidebarCollapsed } from "@/redux/state";


const Sidebar = () =>{

    const [showProjects,setShowProjects] = useState<boolean>(true);
    const [showPriority,setShowPriority] = useState<boolean>(true);
    const [showModules,setShowModules] = useState<boolean>(true);

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed);

    const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white 
    ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`;


    return(
        <div className={sidebarClassNames}>
            <div className="flex h-[100%] w-full flex-col justify-start">
                {/* TOP LOGO */}
                <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                        Primesys
                    </div>
                    {
                        isSidebarCollapsed ?  null : (
                            <button className="py-3" onClick={() => {dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}}>
                                <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
                            </button>
                        )
                    }
                </div>

                {/* TEAM */}
                <div className="flex items-center gap-5 broder-y-[1.5] border-gray-200 px-8 py-4 dark:border-gray-800">
                    <Image src={'/logo.png'} alt="Logo" width={40} height={40} />
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide dark:text-gray-200">
                            primesys team
                        </h3>
                        <div className="mt-1 flex items-center gap-2">
                            <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
                            <p className="text-xs text-gray-500">Private</p>
                        </div>
                    </div>
                </div>

                {/* Navbar Links */}
                <nav className="z-10 w-full">
                    <SidebarLink icon={LayoutDashboard} label="Dashboard" href="/" />
                    <SidebarLink icon={Users} label="Teams" href="/teams" />
                    <SidebarLink icon={Briefcase} label="Teams" href="/timeline" />
                    <SidebarLink icon={Settings} label="Settings" href="/settings" />
                </nav>

                <button onClick={() => setShowModules((prev)=> !prev)}
                    className="flex w-full items-center justify-between px-8 py-3 text-gray-500">
                        <span className="">
                            Modules
                        </span>
                        {
                            !showModules ? (
                                <ChevronUp className="h-5 w-5" />
                            ):
                            (
                                <ChevronDown className="h-5 w-5" />
                            )
                        }
                </button>
            </div>
        </div>
    )
}


export default Sidebar;