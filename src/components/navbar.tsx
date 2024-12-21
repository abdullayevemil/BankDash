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
