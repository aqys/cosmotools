"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { LayoutDashboard, Star } from "lucide-react";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});


export const OrgSidebar = () => {
    const searchParams = useSearchParams();
    const favorites = searchParams.get("favorites");

    return (
        
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 ">
            <Link href="/">
                <div className="flex items-center justify-center pb-1 gap-x-2">
                    <Image 
                        src="/logo2.png"
                        alt="Logo"
                        height={140}
                        width={140}
                    />
                </div>
            </Link>
            <OrganizationSwitcher
                hidePersonal
                appearance={{
                    elements: {
                        rootbox: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                        },
                        organizationSwitcherTrigger: {
                            padding: "6px",
                            width: "90%",
                            borderRadius: "8px",
                            border: "2px solid #474583",
                            justifyContent: "space-between",
                            backgroundColor: "black-100",
                        }
                    }
                }}
            />
            <div className="space-y-1 w-full">
                <Button
                variant={favorites ? "ghost" : "secondary"}
                asChild
                size="lg"
                className="font-normal justify-start px-2 w-full hover:bg-select-astral-40"
                >
                    <Link href="/" className="hover:text-white">
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Team boards
                    </Link>
                </Button>
                <Button
                variant={favorites ? "secondary" : "ghost"}
                asChild
                size="lg"
                className="font-normal justify-start px-2 w-full hover:bg-select-astral-40"
                >
                    <Link href={{
                        pathname: "/",
                        query: { favorites: true},
                    }} className="hover:text-white">
                        <Star className="h-4 w-4 mr-2" />
                        Favorite boards
                    </Link>
                </Button>
            </div>
        </div>
    );
};