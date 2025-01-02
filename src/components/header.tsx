"use client";

import Image from "next/image";
import User from "../assets/header/user.png";
import SearchIcon from "../assets/header/search.svg";
import SettingsIcon from "../assets/header/settings.svg";
import NotificationsIcon from "../assets/header/notifications.svg";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();

  if (status != "authenticated") {
    return null;
  }

  return (
    <header className="flex flex-row justify-between w-full py-5 px-10 items-center border-b border-borderPrimary">
      <div className="font-inter font-semibold text-[28px] text-primary2">
        Overview
      </div>

      <div className="flex flex-row gap-[30] items-center">
        <div className="items-center flex flex-row bg-backgroundPrimary py-4 px-6 rounded-[40] gap-4">
          <SearchIcon color="#718EBF" width={25} height={25} />

          <input
            className="font-inter items-center bg-backgroundPrimary placeholder-placeholder text-primaryText"
            placeholder="Search for somehting"
          />
        </div>

        <button className="p-3 bg-backgroundPrimary rounded-full flex items-center justify-center">
          <SettingsIcon color="#718EBF" width={25} height={25} />
        </button>

        <button className="p-3 bg-backgroundPrimary rounded-full flex items-center justify-center">
          <NotificationsIcon color="#FE5C73" width={25} height={25} />
        </button>

        <Image src={User} alt="user image" />
      </div>
    </header>
  );
}
