import React from "react";
import { shopDropdown } from "./data";
import Link from "next/link";

function ShopDropdown() {
  return (
    <div className="bg-black rounded absolute text-gold top-16 left-46.5% shadow-xl shadow-lighterBlack">
      <ul className="flex flex-col gap-2">
        {shopDropdown.map((item, index) => (
          <li key={item.id}>
            <Link
              href={item.url}
              className={`hover:bg-gold hover:text-white font-bold transition-all p-3 duration-300 ease-linear block ${
                index === 0 && "rounded-t"
              } ${index === 2 && "rounded-b"}`}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopDropdown;
