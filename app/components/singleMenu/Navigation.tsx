import Link from "next/link";
import React from "react";

function Navigation({ menu, url }: { menu: string; url: string }) {
  return (
    <div className="flex justify-center items-center gap-4 text-2xl my-12">
      <Link
        href="/"
        className="transition-all duration-300 ease-linear hover:text-gold"
      >
        Beranda
      </Link>
      <span>{">"}</span>
      <Link
        href="/menu"
        className="transition-all duration-300 ease-linear hover:text-gold"
      >
        Menu
      </Link>
      <span>{">"}</span>
      <Link href={url} className="text-gold">
        <span className="relative">
          {menu}
          <span className="w-2 h-2 bg-gold absolute top-10 left-1/2 right-1/2 rounded-full" />
        </span>
      </Link>
    </div>
  );
}

export default Navigation;
