"use client";

import { useGlobalContext } from "@/app/context";
import { menuSidebar } from "@/app/data";
import React from "react";

function Sidebar() {
  const { currentMenuCategory, setCurrentMenuCategory } = useGlobalContext();

  return (
    <div className="bg-lighterBlack p-12 rounded-br-50px h-fit min-w-fit">
      <ul className="space-y-6">
        {menuSidebar.map((data) => (
          <li key={data.id}>
            <button
              className={`${
                currentMenuCategory.category === data.name
                  ? "text-gold"
                  : "text-grey"
              } text-xl hover:text-gold transition-all duration-300 ease-linear`}
              onClick={() =>
                setCurrentMenuCategory({
                  ...currentMenuCategory,
                  category: data.name,
                  menu: data.menus,
                })
              }
            >
              {data.name} ({data.menus.length})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
