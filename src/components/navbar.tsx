"use client";

import { usePathname } from "next/navigation";
import NavLink from "./navlink";
import Logo from "../assets/navigation/logo.png";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const { status } = useSession();

  const pathname = usePathname();

  if(status != 'authenticated')
  {
    return null;
  }

  return (
    <nav className="h-screen border-solid border-borderPrimary border-r">
      <div className="flex flex-row px-10 py-5">
        <div className="flex flex-row gap-2 py-3">
          <Image src={Logo} alt="Logo" />

          <span className="text-primary2 text-2xl font-black font-montserrat">
            BankDash.
          </span>
        </div>
      </div>

      <ul>
        <li>
          <NavLink
            iconIndex={0}
            url="/dashboard"
            displayName="Dashboard"
            isActive={pathname === "/dashboard"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            iconIndex={1}
            url="/transactions"
            displayName="Transactions"
            isActive={pathname === "/transactions"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            iconIndex={2}
            url="/accounts"
            displayName="Accounts"
            isActive={pathname === "/accounts"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            iconIndex={3}
            url="/investments"
            displayName="Investments"
            isActive={pathname === "/investments"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            iconIndex={4}
            url="/credit-cards"
            displayName="Credit Cards"
            isActive={pathname === "/credit-cards"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            iconIndex={5}
            url="/loans"
            displayName="Loans"
            isActive={pathname === "/loans"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            iconIndex={6}
            url="/services"
            displayName="Services"
            isActive={pathname === "/services"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            iconIndex={7}
            url="/priveleges"
            displayName="My Priveleges"
            isActive={pathname === "/priveleges"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            iconIndex={8}
            url="/setting"
            displayName="Setting"
            isActive={pathname === "/setting"}
          ></NavLink>
        </li>
      </ul>
    </nav>
  );
}
