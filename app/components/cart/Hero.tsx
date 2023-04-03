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
    <div className="h-480px bg-cartHeroBg bg-norepeat bg-cover flex items-end justify-end pb-12">
      <div className="bg-darkerBlack90 flex items-center flex-col gap-4 py-4 px-12">
        <Image
          src="/assets/svg/quotation.svg"
          alt="quotation"
          width={28}
          height={28}
        />
        <p
          className={`${pompiere.className} text-gold text-3xl text-center leading-normal`}
        >
          Kopi mengajarkan kita bahwa <br /> di atas kepahitan masih ada beribu
          keharmonisan.
        </p>
      </div>
    </div>
  );
}

export default Hero;
