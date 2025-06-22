import { LucideIcon } from "lucide-react";

export interface ISidebarLinkProps{
    id?:number;
    href: string;
    icon: React.ReactNode;
    label: string;
}