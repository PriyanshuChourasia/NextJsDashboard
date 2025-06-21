"use client";
import { AlertCircle, AlertOctagon, AlertTriangle, BookOpenCheck, Briefcase, ChevronDown, ChevronUp, Layers3, LayoutDashboard, LockIcon, Settings, ShieldAlert, Users, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SidebarLink } from "./SidebarLink";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/app/redux/state";
import { COMPANY_NAME, COMPANY_TEAM_NAME } from "@/app/lib/utils/env";


const Sidebar = () =>{

    const [showProjects,setShowProjects] = useState<boolean>(true);
    const [showPriority,setShowPriority] = useState<boolean>(true);

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
                        {COMPANY_NAME}
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
                    {/* <Image src={'/logo.png'} alt="Logo" width={40} height={40} /> */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide dark:text-gray-200">
                            {COMPANY_TEAM_NAME}
                        </h3>
                        <div className="mt-1 flex items-center gap-2">
                            <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
                            <p className="text-xs text-gray-500">Private</p>
                        </div>
                    </div>
                </div>

                {/* Navbar Links */}
                <nav className="z-10 w-full">
                    <SidebarLink icon={LayoutDashboard} label="Dashboard" href="/dashboard" />
                    <SidebarLink icon={Users} label="Teams" href="/dashboard/teams" />
                    <SidebarLink icon={BookOpenCheck} label="Task" href="/dashboard/tasks" />
                    {/* <SidebarLink icon={Briefcase} label="Teams" href="/dashboard/timeline" /> */}
                    <SidebarLink icon={Settings} label="Settings" href="/dashboard/settings" />
                </nav>


                {/*  Projects */}
                <button onClick={() => setShowProjects((prev)=> !prev)}
                    className="flex w-full items-center justify-between px-8 py-3 text-gray-700 dark:text-white">
                        <span className="">
                            Projects
                        </span>
                        {
                            !showProjects ? (
                                <ChevronUp className="h-5 w-5" />
                            ):
                            (
                                <ChevronDown className="h-5 w-5" />
                            )
                        }
                </button>

                {/* Priority */}
                <button onClick={()=> setShowPriority((prev)=> !prev)}
                    className="flex w-full items-center justify-between px-8 py-3 text-gray-800 dark:text-white">
                        <span>
                            Priority
                        </span>
                        {
                            !showPriority ? (
                                <ChevronUp className="h-5 w-5" />
                            ):
                            (
                                <ChevronDown className="h-5 w-5" />
                            )
                        }
                </button>
                
                {
                    showPriority && (
                        <>
                            <SidebarLink icon={AlertCircle} label="Urgent" href="/priority/urgent" />
                            <SidebarLink icon={ShieldAlert} label="High" href="/priority/high" />
                            <SidebarLink icon={AlertTriangle} label="Medium" href="/priority/medium" />
                            <SidebarLink icon={AlertOctagon} label="Low" href="/priority/low" />
                            <SidebarLink icon={Layers3} label="Low" href="/priority/backlog" />
                        </>
                    )
                }

            </div>
        </div>
    )
}


export default Sidebar;