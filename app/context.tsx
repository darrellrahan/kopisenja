"use client";

import { MenuCardProps } from "@/typings";
import React, { useContext, useState } from "react";
import { menuSidebar } from "./data";

type GlobalContextType = {
  currentMenuCategory: {
    category: string;
    menu: MenuCardProps[];
  };
  setCurrentMenuCategory: React.Dispatch<
    React.SetStateAction<{
      category: string;
      menu: MenuCardProps[];
    }>
  >;
};

const GlobalContext = React.createContext<GlobalContextType>({
  currentMenuCategory: { category: "", menu: [] },
  setCurrentMenuCategory() {},
});

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentMenuCategory, setCurrentMenuCategory] = useState({
    category: menuSidebar[0].name,
    menu: menuSidebar[0].menus,
  });

  return (
    <GlobalContext.Provider
      value={{ currentMenuCategory, setCurrentMenuCategory }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
