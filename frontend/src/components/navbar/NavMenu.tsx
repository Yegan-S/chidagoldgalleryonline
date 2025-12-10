"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";

export default function NavMenu({
  items,
  categories,
}: {
  items: { label: string; url: string }[];
  categories: { name: string; slug: string }[];
}) {
  const [open, setOpen] = useState(false);

  const safeCategories = categories ?? [];

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        <Link href="/" className="text-xl font-bold">
          Chida Gold
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>

            {items.map((link) => {
              if (link.label === "Products") {
                return (
                  <NavigationMenuItem key="products">
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 bg-white shadow-lg rounded-md">
                      <div className="flex flex-col space-y-2">
                        {safeCategories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/products/${cat.slug}`}
                            className="hover:text-primary"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={link.label}>
                  <Link
                    href={link.url}
                    className="px-4 py-2 text-sm hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              );
            })}

          </NavigationMenuList>
        </NavigationMenu>

        {/* Right buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="left">
            <div className="flex flex-col gap-4 mt-4">

              {items.map((link) => {
                if (link.label === "Products") {
                  return (
                    <div key="products">
                      <p className="text-lg font-semibold">Products</p>
                      <div className="ml-2 flex flex-col gap-2 mt-2">
                        {safeCategories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/products/${cat.slug}`}
                            onClick={() => setOpen(false)}
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.url}
                    className="text-lg"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}

            </div>
          </SheetContent>
        </Sheet>

      </div>
    </nav>
  );
}