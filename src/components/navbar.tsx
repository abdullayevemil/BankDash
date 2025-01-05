"use client";

import { usePathname } from "next/navigation";
import NavLink from "./navlink";
import Logo from "../assets/navigation/logo.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useMenu } from "@/context/MenuContext";
import useWindowWidth from "@/hooks/width";

export default function NavBar() {
  const { status } = useSession();

  const width = useWindowWidth();

  const { isMenuOpen, toggleMenu } = useMenu();

  const pathname = usePathname();

  if (status != "authenticated") {
    return null;
  }

  return (
    <nav className="h-screen w-0 sm:w-fit border-solid border-borderPrimary border-r relative">
      <div className="flex justify-between items-center px-10 py-5">
        {!isMenuOpen && (width || 700) >= 640 ? (
          <div className="flex flex-row gap-2 py-3">
            <Image src={Logo} alt="Logo" />

            <span className="text-primary2 text-2xl font-black font-montserrat">
              BankDash.
            </span>
          </div>
        ) : null}
      </div>

      <ul
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 mt-4 sm:mt-0 fixed sm:static bg-white sm:bg-transparent w-full h-full top-0 left-0 z-40 transition-transform duration-300 ease-in-out`}
      >
        <li onClick={() => (width || 700) < 640 ? toggleMenu() : null}>
          <NavLink
            iconIndex={0}
            url="/dashboard"
            displayName="Dashboard"
            isActive={pathname === "/dashboard"}
          />
        </li>

        <li onClick={() => (width || 700) < 640 ? toggleMenu() : null}>
          <NavLink
            iconIndex={1}
            url="/transactions"
            displayName="Transactions"
            isActive={pathname === "/transactions"}
          />
        </li>

        <li onClick={() => (width || 700) < 640 ? toggleMenu() : null}>
          <NavLink
            iconIndex={2}
            url="/accounts"
            displayName="Accounts"
            isActive={pathname === "/accounts"}
          />
        </li>

        <li onClick={() => (width || 700) < 640 ? toggleMenu() : null}>
          <NavLink
            iconIndex={3}
            url="/investments"
            displayName="Investments"
            isActive={pathname === "/investments"}
          />
        </li>

        <li onClick={() => (width || 700) < 640 ? toggleMenu() : null}>
          <NavLink
            iconIndex={4}
            url="/credit-cards"
            displayName="Credit Cards"
            isActive={pathname === "/credit-cards"}
          />
        </li>

        <li onClick={() => (width || 700) < 640 ? toggleMenu() : null}>
          <NavLink
            iconIndex={5}
            url="/loans"
            displayName="Loans"
            isActive={pathname === "/loans"}
          />
        </li>

        <li onClick={() => (width || 700) < 640 ? toggleMenu() : null}>
          <NavLink
            iconIndex={6}
            url="/services"
            displayName="Services"
            isActive={pathname === "/services"}
          />
        </li>

        <li onClick={() => (width || 700) < 640 ? toggleMenu() : null}>
          <NavLink
            iconIndex={7}
            url="/priveleges"
            displayName="My Priveleges"
            isActive={pathname === "/priveleges"}
          />
        </li>

        <li onClick={() => (width || 700) < 640 ? toggleMenu() : null}>
          <NavLink
            iconIndex={8}
            url="/setting"
            displayName="Setting"
            isActive={pathname === "/setting"}
          />
        </li>
      </ul>
    </nav>
  );
}
