import React from 'react';
import {SidebarTrigger} from "@/components/ui/sidebar";

function Navbar() {
    return (
        <nav className={"flex h-14 items-center justify-between"}>
            <SidebarTrigger/>

        </nav>
    );
}

export default Navbar;
