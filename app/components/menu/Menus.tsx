"use client";

import React from "react";
import { useGlobalContext } from "@/app/context";
import MenuCard from "../MenuCard";

function Menus() {
  const { currentMenuCategory } = useGlobalContext();

  return (
    <div className="grid grid-cols-3 gap-8 mx-8">
      {currentMenuCategory.menu.map((data) => (
        <MenuCard
          key={data.id}
          id={data.id}
          img={data.img}
          name={data.name}
          price={data.price}
          url={data.url}
        />
      ))}
    </div>
  );
}

export default Menus;
