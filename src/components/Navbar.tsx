"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/cources">All Courses</HoveredLink>
            <HoveredLink href="/cources/javascript-cource">
              Complete JavaScript Bootcamp
            </HoveredLink>
            <HoveredLink href="/courses">Unity Game Development</HoveredLink>
            <HoveredLink href="/courses">
              Node.js Backend Development
            </HoveredLink>
            <HoveredLink href="/courses">
              Flutter Mobile App Development
            </HoveredLink>
            <HoveredLink href="/courses">
              Android Development with Kotlin
            </HoveredLink>
            <HoveredLink href="/courses">
              iOS Development with Swift
            </HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About Us"
          ></MenuItem>
        </Link>

        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
