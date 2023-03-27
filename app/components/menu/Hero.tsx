import React from "react";
import Image from "next/image";
import { Pompiere } from "next/font/google";

const pompiere = Pompiere({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pompiere",
});

function Hero() {
  return (
    <div className="h-480px bg-menuHeroBg bg-norepeat bg-cover flex items-end pb-12">
      <div className="bg-darkerBlack90 flex items-center flex-col gap-4 py-4 px-12">
        <Image
          src="assets/svg/quotation.svg"
          alt="quotation"
          width={28}
          height={28}
        />
        <p
          className={`${pompiere.className} text-gold text-3xl text-center leading-normal`}
        >
          Ketika kata-kata tak lagi banyak bicara, <br /> secangkir kopi bisa
          jadi perantara untuk mencairkan suasana.
        </p>
      </div>
    </div>
  );
}

export default Hero;
