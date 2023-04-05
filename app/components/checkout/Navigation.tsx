import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <div className="my-12 flex justify-center items-center gap-4 text-2xl">
      <Link
        href="/"
        className="transition-all duration-300 ease-linear hover:text-gold"
      >
        Beranda
      </Link>
      <span>{">"}</span>
      <Link
        href="/cart"
        className="transition-all duration-300 ease-linear hover:text-gold"
      >
        Keranjang
      </Link>
      <span>{">"}</span>
      <Link href="/checkout" className="text-gold">
        <span className="relative">
          Checkout
          <span className="w-2 h-2 bg-gold absolute top-10 left-1/2 right-1/2 rounded-full" />
        </span>
      </Link>
    </div>
  );
}

export default Navigation;
