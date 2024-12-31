"use client";

import Link from "next/link";
import DashboardIcon from "../assets/navigation/dashboard.svg";
import AccountsIcon from "../assets/navigation/accounts.svg";
import CreditCardsIcon from "../assets/navigation/credit-cards.svg";
import InvestmentsIcon from "../assets/navigation/investments.svg";
import LoansIcon from "../assets/navigation/loans.svg";
import PrivelegesIcon from "../assets/navigation/priveleges.svg";
import ServicesIcon from "../assets/navigation/services.svg";
import SettingsIcon from "../assets/navigation/setting.svg";
import TransactionsIcon from "../assets/navigation/transactions.svg";
import React from "react";

const icons = [
  DashboardIcon,
  TransactionsIcon,
  AccountsIcon,
  InvestmentsIcon,
  CreditCardsIcon,
  LoansIcon,
  ServicesIcon,
  PrivelegesIcon,
  SettingsIcon,
];

interface NavLinkProps {
  url: string;
  displayName: string;
  isActive: boolean;
  iconIndex: number;
};

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
