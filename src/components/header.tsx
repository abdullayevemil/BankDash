"use client";

import Image from "next/image";
import User from "../assets/header/user.png";
import SearchIcon from "../assets/header/search.svg";
import SettingsIcon from "../assets/header/settings.svg";
import NotificationsIcon from "../assets/header/notifications.svg";
import { useSession, signOut } from "next-auth/react";
import useWindowWidth from "@/hooks/width";
import { useMenu } from "@/context/MenuContext";

export default function Header() {
  const width = useWindowWidth();

  const { toggleMenu } = useMenu();

  const { status } = useSession();

  if (status !== "authenticated") {
    return null;
  }

  return (
    <header className="flex flex-col gap-5 border-b border-borderPrimary py-5 px-10">
      <div className="flex flex-row justify-between w-full items-center">
        {(width || 700) < 640 ? (
          <button
            className="flex flex-col justify-center items-center gap-1"
            onClick={() => toggleMenu()}
          >
            <div className="w-5 h-0.5 bg-primary2 rounded-full"></div>
            <div className="w-5 h-0.5 bg-primary2 rounded-full"></div>
            <div className="w-5 h-0.5 bg-primary2 rounded-full"></div>
          </button>
        ) : null}

        <div className="font-inter font-semibold text-2xl text-primary2">
          Overview
        </div>

        {(width || 700) > 640 ? (
          <div className="flex flex-row gap-7 items-center">
            <div className="items-center flex flex-row bg-backgroundPrimary py-4 px-6 rounded-[40] gap-4">
              <SearchIcon color="#718EBF" width={25} height={25} />
              <input
                className="font-inter items-center bg-backgroundPrimary placeholder-placeholder text-primaryText"
                placeholder="Search for something"
              />
            </div>

            <button className="p-3 bg-backgroundPrimary rounded-full flex items-center justify-center">
              <SettingsIcon color="#718EBF" width={25} height={25} />
            </button>

            <button className="p-3 bg-backgroundPrimary rounded-full flex items-center justify-center">
              <NotificationsIcon color="#FE5C73" width={25} height={25} />
            </button>

            <Image src={User} alt="user image" />

            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="p-3 bg-backgroundPrimary rounded-full flex items-center justify-center"
            >
              <span className="text-primaryText">Sign Out</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-row items-center gap-1">
            <Image width={35} height={35} src={User} alt="user image" />

            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="p-3 bg-backgroundPrimary rounded-full flex items-center justify-center"
            >
              <span className="text-primaryText text-xs">Sign Out</span>
            </button>
          </div>
        )}
      </div>
      {(width || 700) <= 640 ? (
        <div className="items-center flex flex-row bg-backgroundPrimary py-3 px-5 rounded-[40] gap-4">
          <SearchIcon color="#718EBF" width={16} height={16} />
          <input
            className="font-inter items-center bg-backgroundPrimary placeholder-placeholder text-small"
            placeholder="Search for something"
          />
        </div>
      ) : null}
    </header>
  );
}
