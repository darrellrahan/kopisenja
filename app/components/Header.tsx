"use client";

import { headerIcons, navLink } from "../data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ShopDropdown from "./ShopDropdown";
import { usePathname } from "next/navigation";

function Header() {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 bg-black px-16 py-4 text-white flex items-center justify-between z-50">
      <div className="logo-area">
        <Link href="/">
          <Image
            src="assets/svg/logo.svg"
            width={132}
            height={132}
            alt="logo"
          />
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
                        className="stroke-gold"
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
                    className={usePathname() === item.url ? "text-gold" : ""}
                  >
                    {usePathname() === item.url ? (
                      <span className="relative">
                        {item.text}
                        <span className="w-2 h-2 bg-gold absolute top-7 left-1/2 right-1/2 rounded-full" />
                      </span>
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
      <div className="icon-area flex items-center gap-8 text-3xl">
        {headerIcons.map((item) => {
          const Icon = item.icon;
          return !item.url ? (
            <button
              key={item.id}
              className="hover:text-gold transition-all duration-300 ease-linear"
            >
              <Icon />
            </button>
          ) : (
            <Link
              key={item.id}
              href={item.url}
              className={`${
                usePathname() === item.url ? "text-gold" : ""
              } hover:text-gold transition-all duration-300 ease-linear`}
            >
              {usePathname() === item.url ? (
                <span className="relative">
                  <Icon />
                  <span className="w-2 h-2 bg-gold absolute top-9 left-3 rounded-full" />
                </span>
              ) : (
                <Icon />
              )}
            </Link>
          );
        })}
      </div>
      {isDropdown && <ShopDropdown />}
    </header>
  );
}

export default Header;
