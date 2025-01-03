"use client";

import Content from "./content";
import Header from "./header";
import NavBar from "./navbar";
import { SessionProvider } from "next-auth/react";

export default function ContentProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <Content>
        <div className="flex flex-row">
          <NavBar></NavBar>

          <div className="flex-1">
            <Header />

            {children}
          </div>
        </div>
      </Content>
    </SessionProvider>
  );
}
