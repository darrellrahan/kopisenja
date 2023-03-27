"use client";

import { useGlobalContext } from "@/app/context";
import { menuSidebar } from "@/app/data";
import React from "react";

function Sidebar() {
  const { currentMenuCategory, setCurrentMenuCategory } = useGlobalContext();

  return (
    <div className="bg-darkerBlack w-fit p-12 rounded-r-50px flex">
      <ul className="space-y-6">
        {menuSidebar.map((data) => (
          <li key={data.id}>
            <button
              className={`${
                currentMenuCategory === data.text ? "text-gold" : "text-grey"
              } text-lg hover:text-gold transition-all duration-300 ease-linear`}
              onClick={() => setCurrentMenuCategory(data.text)}
            >
              {data.text} ({data.amount})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
