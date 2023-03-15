import Image from "next/image";
import React from "react";
import { Pompiere } from "next/font/google";

const pompiere = Pompiere({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pompiere",
});

function Quote() {
  return (
    <div className="space-y-10">
      <Image
        src="assets/svg/quote-line.svg"
        alt="quote"
        width={1266}
        height={24}
        className="w-full"
      />
      <h1
        className={`${pompiere.className} text-white text-5xl text-center leading-relaxed`}
      >
        Kurangi ekspetasi perbanyak ngopi <br /> karena hidup itu butuh
        inspirasi bukan hanya halusinasi
      </h1>
      <p className="text-gold font-bold text-center text-xl">- salam senja</p>
      <Image
        src="assets/svg/quote-line.svg"
        alt="quote"
        width={1266}
        height={24}
        className="w-full"
      />
    </div>
  );
}

export default Quote;
