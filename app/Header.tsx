"use client";

import { headerIcons, navLink } from "./data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ShopDropdown from "./ShopDropdown";

function Header() {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 bg-black50 px-12 py-4 text-white flex items-center justify-between">
      <div className="logo-area">
        <Link href="/">
          <Image
            src="assets/svg/logo.svg"
            width={132}
            height={132}
            alt="logo"
          />{" "}
        </Link>
      </div>
      <div className="nav-area">
        <nav>
          <ul className="flex items-center gap-8">
            {navLink.map((item) => (
              <li
                key={item.id}
                className="font-bold transition-all duration-300 -linear hover:text-gold"
              >
                {!item.url ? (
                  <button
                    className={
                      isDropdown
                        ? "flex items-center gap-3 cursor-pointer stroke-white hover:stroke-gold text-gold stroke-gold"
                        : "flex items-center gap-3 cursor-pointer stroke-white hover:stroke-gold"
                    }
                    onClick={() => setIsDropdown(!isDropdown)}
                  >
                    {item.text}{" "}
                    {isDropdown ? (
                      <svg
                        width="20"
                        height="9"
                        viewBox="0 0 20 9"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all duration-300 ease-linear"
                      >
                        <path
                          d="M18.8975 7.62253L9.18155 1.37743L0.999733 7.62253"
                          strokeWidth="2"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="9"
                        viewBox="0 0 20 9"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all duration-300 ease-linear"
                      >
                        <path
                          d="M1 1.37744L10.7159 7.62254L18.8977 1.37744"
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.url}
                    className={item.text === "Beranda" ? "text-gold" : ""}
                  >
                    {item.text === "Beranda" ? (
                      <div className="relative">
                        {item.text}
                        <div className="w-2 h-2 bg-gold absolute top-7 left-1/2 right-1/2 rounded-full" />
                      </div>
                    ) : (
                      item.text
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="icon-area flex items-center gap-8">
        {headerIcons.map((item) =>
          !item.url ? (
            <button>{item.icon}</button>
          ) : (
            <Link href={item.url}>{item.icon}</Link>
          )
        )}
      </div>
      {isDropdown && <ShopDropdown />}
    </header>
  );
}

export default Header;
