"use client";

import Link from "next/link";
import DashboardIcon from "../../public/dashboard.svg";
import AccountsIcon from "../../public/accounts.svg";
import CreditCardsIcon from "../../public/credit-cards.svg";
import InvestmentsIcon from "../../public/investments.svg";
import LoansIcon from "../../public/loans.svg";
import PrivelegesIcon from "../../public/priveleges.svg";
import ServicesIcon from "../../public/services.svg";
import SettingsIcon from "../../public/setting.svg";
import TransactionsIcon from "../../public/transactions.svg";
import React from "react";

const icons = [
  DashboardIcon,
  AccountsIcon,
  CreditCardsIcon,
  InvestmentsIcon,
  LoansIcon,
  PrivelegesIcon,
  ServicesIcon,
  SettingsIcon,
  TransactionsIcon,
];

export default function NavLink({
  url,
  displayName,
  isActive,
  iconIndex,
}: NavLinkProps) {
  return (
    <Link href={url} className="flex flex-row gap-2 items-center gap-9">
      <div
        className={`${
          isActive ? "bg-navigationActiveForeground" : "bg-transparent"
        } w-1.5 h-[60] rounded-e-lg`}
      ></div>

      {React.createElement(icons[iconIndex], {
        color: isActive ? "rgb(45, 96, 255)" : "rgb(177, 177, 177)",
        width: "18px",
        height: "18px",
      })}

      <div
        className={`flex items-center text-lg font-inter ${
          isActive
            ? "text-navigationActiveForeground"
            : "text-navigationInActiveForeground"
        }`}
      >
        {displayName}
      </div>
    </Link>
  );
}
