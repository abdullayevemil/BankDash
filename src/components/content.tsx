"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { status } = useSession();

  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    if (status === "unauthenticated" && pathname != "/authentication/signup") {
      router.push("/authentication/signin");

      return;
    }

    if (status === "authenticated" && pathname.includes("authentication")) {
      router.push("/dashboard");

      return;
    }
  }, [status, router, pathname]);

  return <>{children}</>;
}
