import { Sidebar, SidebarContent, SidebarFooter, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { menuItem } from "./menu";
import Link from "next/link";

export default function AppSidebar(){
    return(
        <Sidebar>
            <SidebarHeader>

            </SidebarHeader>
            <SidebarContent>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {
                            menuItem.map(item=>(
                                <SidebarMenuItem key={item.id}>
                                    <SidebarMenuButton>
                                        <Link href={item.href}>
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        }
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarContent>
            <SidebarFooter>

            </SidebarFooter>
        </Sidebar>
    )
}