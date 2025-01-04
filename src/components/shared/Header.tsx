"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import HamburgerMenu from "./HamburgerMenu";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="w-full dark:bg-neutral-800 border-b py-0.5">
      <div className="wrapper flex-between items-center h-27">
        <Link href="/" className="w-fit flex items-center gap-2">
          <Image
            src="/assets/images/logo.png"
            alt="web3builders Logo"
            width={6000}
            height={4000}
            className="w-40 h-auto"
          />
        </Link>
        <SignedIn>
          <nav className="md:block hidden">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex items-center gap-2">
          <SignedIn>
            <UserButton
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: {
                  avatarBox: {
                    width: "2rem",
                    height: "2rem",
                  },
                },
              }}
            />
            <HamburgerMenu />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full text-white text-xs" size="sm">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
