import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="py-4 space-y-16">
      <Image
        src="/assets/svg/about-line.svg"
        alt="Kopi Senja"
        width={1136}
        height={28}
        className="w-full"
      />
      <div className="flex items-center gap-28">
        <Image
          src="/assets/svg/about-coffee.svg"
          alt="Kopi Senja"
          width={369}
          height={637}
        />
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-white font-bold text-8xl">Tentang</h1>
            <Image
              src="/assets/svg/logo.svg"
              alt="Kopi Senja"
              width={300}
              height={300}
            />
          </div>
          <p className="text-grey font-bold text-lg">
            Visi Kopi Senja adalah menjadi kafe terbaik di kota ini dan
            memberikan layanan yang baik bagi pelanggan. Kami berkomitmen untuk
            menggunakan bahan-bahan berkualitas tinggi. Kafe kami didesain
            dengan suasana yang hangat dan nyaman, dengan musik yang
            menenangkan. Kami memiliki beberapa tempat duduk yang cocok untuk
            bersantai.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
