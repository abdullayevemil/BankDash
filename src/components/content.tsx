"use client";

import Header from "./header";
import NavBar from "./navbar";
import { SessionProvider } from "next-auth/react";

export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <SessionProvider>
      <div className="flex flex-row">
        <NavBar></NavBar>

        <div className="flex-1">
          <Header />

          {children}
        </div>
      </div>
    </SessionProvider>
  );
}
