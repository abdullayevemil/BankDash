"use client";

import { User } from "@/types/user";
import React, { createContext, useContext, useState } from "react";

type UserState = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const GlobalContext = createContext<UserState | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
};
