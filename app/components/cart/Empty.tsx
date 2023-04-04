import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Empty() {
  return (
    <div className="flex flex-col items-center gap-8 my-16">
      <p className="text-grey text-xl">Tidak ada item di keranjang.</p>
      <Link
        href="/menu"
        className="flex items-center gap-2 bg-gold text-white py-2 px-6 rounded-35px transition-all duration-300 ease-linear hover:opacity-75 w-fit"
      >
        <span>
          <AiOutlineShoppingCart />
        </span>
        <span>Mulai Belanja</span>
      </Link>
    </div>
  );
}

export default Empty;
