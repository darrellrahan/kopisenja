import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="top-0 inset-x-0 bg-heroBg bg-contain bg-no-repeat bg-right h-650px flex flex-col justify-center gap-16 px-16">
      <div className="space-y-4">
        <div className="space-y-4">
          <h1 className="text-white font-bold text-4xl tracking-wider">
            Selamat datang di
          </h1>
          <Image
            src="assets/svg/logo.svg"
            alt="Kopi Senja"
            width={200}
            height={200}
          />
        </div>
        <p className="text-grey font-bold text-lg">
          Secangkir kopi autentik dan berkualitas tinggi <br /> Kopi Senja
          menyajikan segelas kopi terbaik untuk anda.
        </p>
      </div>
      <div>
        <Link
          href="/menu"
          className="bg-gold text-white font-bold p-4 rounded-35px transition-all duration-300 ease-linear hover:opacity-75"
        >
          Pesan sekarang
        </Link>
      </div>
    </div>
  );
}

export default Hero;
