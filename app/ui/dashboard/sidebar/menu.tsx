import { Menu, Smartphone, SquareTerminal } from "lucide-react";
import { ISidebarLinkProps } from "./interfaces/ISidebarLink";



export const menuItem: ISidebarLinkProps[] = [
    {
        id:1,
        href:"/dashboard/modules",
        label:"Menu",
        icon: <Menu/>
    },
    {
        id:2,
        href:"/dashboard/modules",
        label:"Devices",
        icon: <Smartphone />
    },
    {
        id:3,
        href:"/dashboard/modules",
        label:"Configurations",
        icon: <SquareTerminal />
    },
]

