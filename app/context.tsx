"use client";

import { MenuCardProps, MenuProps } from "@/typings";
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
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  cart: { item: MenuProps; qty: number }[];
  setCart: React.Dispatch<
    React.SetStateAction<
      {
        item: MenuProps;
        qty: number;
      }[]
    >
  >;
};

const GlobalContext = React.createContext<GlobalContextType>({
  currentMenuCategory: { category: "", menu: [] },
  setCurrentMenuCategory() {},
  isModal: false,
  setIsModal() {},
  cart: [],
  setCart() {},
});

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentMenuCategory, setCurrentMenuCategory] = useState({
    category: menuSidebar[0].name,
    menu: menuSidebar[0].menus,
  });
  const [isModal, setIsModal] = useState(false);
  const [cart, setCart] = useState<{ item: MenuProps; qty: number }[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        currentMenuCategory,
        setCurrentMenuCategory,
        isModal,
        setIsModal,
        cart,
        setCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
