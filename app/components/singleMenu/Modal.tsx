"use client";

import { useGlobalContext } from "@/app/context";
import Link from "next/link";
import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function Modal() {
  const { setIsModal } = useGlobalContext();

  return (
    <div className="fixed inset-0 bg-black z-40 flex items-center justify-center">
      <div className="bg-darkerBlack p-8 flex flex-col gap-8 items-center">
        <h1 className="text-4xl text-gold font-bold">Sukses!</h1>
        <div className="text-7xl text-gold">
          <AiOutlineCheckCircle />
        </div>
        <p className="text-lg text-grey">
          Item berhasil ditambahkan ke keranjang
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/menu"
            className="flex items-center gap-2 bg-darkerBlack shadow-loginToggler text-white py-2 px-6 rounded-35px transition-all duration-300 ease-linear hover:opacity-75"
            onClick={() =>
              setTimeout(() => {
                setIsModal(false);
              }, 1000)
            }
          >
            <span>
              <AiOutlineShoppingCart />
            </span>
            <span>Lanjutkan Belanja</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 bg-gold text-white py-2 px-6 rounded-35px transition-all duration-300 ease-linear hover:opacity-75"
            onClick={() =>
              setTimeout(() => {
                setIsModal(false);
              }, 1000)
            }
          >
            <span>
              <AiOutlineEye />
            </span>
            <span>Lihat Keranjang</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
