"use client";

import { Button } from "@/components/ui/button";
import { Menu, MoveRight, LockIcon, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { DialogLogin } from "@/components/blocks/login";
import { DialogRegister } from "./register";

export const Header = () => {
  const navigationItems = [
    {
      title: "Articles",
      href: "/articles",
      description: "",
    },
    {
      title: "Write",
      href: "/login",
      description: "",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          {navigationItems.map((item) => (
            <Link key={item.title} href={item.href}>
              <span className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-muted hover:text-muted-foreground h-10 px-4 py-2">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex lg:justify-center">
          <a href="/" className="font-semibold text-4xl">
            W<span className="text-pink-600">articles</span>
          </a>
        </div>
        <div className="flex justify-end w-full gap-4">
          <DialogLogin />
          <DialogRegister />
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-lg">{item.title}</span>
                      <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};