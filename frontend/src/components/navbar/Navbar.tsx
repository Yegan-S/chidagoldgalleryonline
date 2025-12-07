"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";



export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Chida Gold
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {menuLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm hover:text-primary"
                >
                  {link.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
        </div>

         {/* Mobile Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          {/* Mobile Menu */}
          <SheetContent side="left">
            <div className="flex flex-col gap-4 mt-4">
              {menuLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline">Login</Button>
                <Button>Sign Up</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

       
      </div>
    </nav>
  );
}