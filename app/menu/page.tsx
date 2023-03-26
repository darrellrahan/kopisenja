import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Pompiere } from "next/font/google";

const pompiere = Pompiere({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pompiere",
});

function page() {
  return (
    <main className="min-h-screen">
      <Header />
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
      <Footer />
    </main>
  );
}

export default page;
