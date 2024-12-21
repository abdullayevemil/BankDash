"use client";

import Link from "next/link";
import DefaultIcon from "../../public/dashboard.svg";
import { useEffect, useState } from "react";

export default function NavLink({ url, displayName, isActive }: NavLinkProps) {
  const [Icon, setIcon] = useState<React.FC | any>(null);

  const iconName = url.split("/")[1];

  useEffect(() => {
    import(`../../public/${iconName}.svg`)
      .then((module) => setIcon(() => module.default as React.FC))
      .catch((err) => console.error("Error loading icon:", err));
  }, [iconName]);

  return (
    <Link href={url} className="flex flex-row gap-2 items-center gap-9">
      <div
        className={`${
          isActive ? "bg-navigationActiveForeground" : "bg-transparent"
        } w-1.5 h-[60] rounded-e-lg`}
      ></div>

      {Icon ? (
        <Icon
          style={{
            color: isActive ? "rgb(45, 96, 255)" : "rgb(177, 177, 177)",
            width: "18px",
            height: "18px",
          }}
        />
      ) : (
        <DefaultIcon
          style={{
            color: "transparent",
            width: "18px",
            height: "18px",
          }}
        />
      )}

      <div
        className={`flex items-center text-lg ${
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
