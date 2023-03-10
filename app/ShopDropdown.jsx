import React from "react";
import { shopDropdown } from "./data";
import Link from "next/link";

function ShopDropdown() {
  return (
    <div className="bg-gold rounded absolute text-white top-16 left-32rem p-4">
      <ul className="flex flex-col gap-2">
        {shopDropdown.map((item) => (
          <li key={item.id}>
            <Link
              href={item.url}
              className="hover:text-black font-bold transition-all duration-300 ease-linear block"
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
