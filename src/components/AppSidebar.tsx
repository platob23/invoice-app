import React from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader, SidebarMenu,
    SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton,
    SidebarMenuSubItem, SidebarSeparator
} from "@/components/ui/sidebar";
import {
    ChevronUp, Code,
    Euro,
    Home, LayoutDashboardIcon, Paperclip,
    PiggyBank,
    Plus,
    Projector,
    ScrollText,
    Search,
    Settings, ShoppingBasket,
    User2,
    Users
} from "lucide-react";
import Link from "next/link";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const items = [
    {
        title: "Dashboard",
        url: "http://localhost:3000/",
        icon: <LayoutDashboardIcon/>,
    },
    {
        title: "Customers",
        url: "http://localhost:3000/customers",
        icon: <Users/>,
    },
    {
        title: "Products",
        url: "http://localhost:3000/products",
        icon: <ShoppingBasket/>,
    },
]

function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={"/"}>
                                <Image src={"/invoice-image.png"} alt={"logo"} width={20} height={20} />
                                <span>Bytex Invoice Portal</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarSeparator/>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Allgemein</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map(item => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>

                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        <SidebarSeparator/>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#">
                                        <Projector />
                                         Invoices
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <Link href="/#">
                                                <Paperclip />
                                                All Invoices
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>

                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <Link href="/#">
                                                <Plus />
                                                Create new Invoice
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <Link href="/#">
                                                <Code />
                                                Show logs
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                        </SidebarMenu>

                    </SidebarGroupContent>
                </SidebarGroup>


            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2/> Tobias Plank <ChevronUp className="ml-auto"/>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Account</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem variant={"destructive"}>Sign out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}

export default AppSidebar;