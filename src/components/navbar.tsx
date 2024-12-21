"use client";

import { usePathname } from "next/navigation";
import NavLink from "./navlink";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            url="/dashboard"
            displayName="Dashboard"
            isActive={pathname === "/dashboard"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            url="/transactions"
            displayName="Transactions"
            isActive={pathname === "/transactions"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            url="/accounts"
            displayName="Accounts"
            isActive={pathname === "/accounts"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            url="/investments"
            displayName="Investments"
            isActive={pathname === "/investments"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            url="/credit-cards"
            displayName="Credit Cards"
            isActive={pathname === "/credit-cards"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            url="/loans"
            displayName="Loans"
            isActive={pathname === "/loans"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            url="/services"
            displayName="Services"
            isActive={pathname === "/services"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            url="/priveleges"
            displayName="My Priveleges"
            isActive={pathname === "/priveleges"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            url="/setting"
            displayName="Setting"
            isActive={pathname === "/setting"}
          ></NavLink>
        </li>
      </ul>
    </nav>
  );
}
