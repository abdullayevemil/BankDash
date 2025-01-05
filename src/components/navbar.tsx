"use client";

import { usePathname } from "next/navigation";
import NavLink from "./navlink";
import Logo from "../assets/navigation/logo.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function NavBar() {
  const { status } = useSession();
  
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (status != "authenticated") {
    return null;
  }

  return (
    <nav className="h-screen w-0 sm:w-fit border-solid border-borderPrimary border-r relative">
      <div className="flex justify-between items-center px-10 py-5">
        <div className="flex flex-row gap-2 py-3">
          <Image src={Logo} alt="Logo" />

          <span className="text-primary2 text-2xl font-black font-montserrat">
            BankDash.
          </span>
        </div>

        <button
          className="sm:hidden flex flex-col justify-center items-center space-y-1 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-1 bg-navigationActiveForeground"></div>
          
          <div className="w-6 h-1 bg-navigationActiveForeground"></div>
          
          <div className="w-6 h-1 bg-navigationActiveForeground"></div>
        </button>
      </div>

      <ul
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 mt-4 sm:mt-0 fixed sm:static bg-white sm:bg-transparent w-full h-full top-0 left-0 z-40 transition-transform duration-300 ease-in-out`}
      >
        <li>
          <NavLink
            iconIndex={0}
            url="/dashboard"
            displayName="Dashboard"
            isActive={pathname === "/dashboard"}
          />
        </li>

        <li>
          <NavLink
            iconIndex={1}
            url="/transactions"
            displayName="Transactions"
            isActive={pathname === "/transactions"}
          />
        </li>

        <li>
          <NavLink
            iconIndex={2}
            url="/accounts"
            displayName="Accounts"
            isActive={pathname === "/accounts"}
          />
        </li>

        <li>
          <NavLink
            iconIndex={3}
            url="/investments"
            displayName="Investments"
            isActive={pathname === "/investments"}
          />
        </li>

        <li>
          <NavLink
            iconIndex={4}
            url="/credit-cards"
            displayName="Credit Cards"
            isActive={pathname === "/credit-cards"}
          />
        </li>

        <li>
          <NavLink
            iconIndex={5}
            url="/loans"
            displayName="Loans"
            isActive={pathname === "/loans"}
          />
        </li>

        <li>
          <NavLink
            iconIndex={6}
            url="/services"
            displayName="Services"
            isActive={pathname === "/services"}
          />
        </li>

        <li>
          <NavLink
            iconIndex={7}
            url="/priveleges"
            displayName="My Priveleges"
            isActive={pathname === "/priveleges"}
          />
        </li>

        <li>
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