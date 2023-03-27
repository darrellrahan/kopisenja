"use client";

import React, { useContext, useState } from "react";

type GlobalContextType = {
  currentMenuCategory: string;
  setCurrentMenuCategory: React.Dispatch<React.SetStateAction<string>>;
};

const GlobalContext = React.createContext<GlobalContextType>({
  currentMenuCategory: "",
  setCurrentMenuCategory() {},
});

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentMenuCategory, setCurrentMenuCategory] =
    useState<string>("Black Coffee");

  return (
    <GlobalContext.Provider
      value={{ currentMenuCategory, setCurrentMenuCategory }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
