import Image from "next/image";
import React from "react";
import { openHour } from "../../data";

function Info() {
  return (
    <div className="py-8 space-y-8">
      <Image
        src="assets/svg/info-line.svg"
        alt="Kopi Senja"
        width={1208}
        height={56}
        className="w-full"
      />
      <div className="grid grid-cols-2">
        <Image
          src="/assets/svg/info-img1.svg"
          alt="Info"
          width={620}
          height={561}
          className="w-full h-full"
        />
        <div className="bg-lighterBlack p-16 flex flex-col justify-between pt-16">
          <h1 className="font-extrabold text-4xl text-center text-gold">
            Jam Buka
          </h1>
          <div className="space-y-8">
            {openHour.map((data) => (
              <div
                key={data.id}
                className="flex justify-between items-center text-2xl font-bold text-white"
              >
                <p>{data.day}</p>
                <p>{data.hour}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-lighterBlack p-16 flex flex-col justify-between pt-16">
          <h1 className="font-extrabold text-4xl text-center text-gold">
            Jam Buka
          </h1>
          <div className="space-y-8">
            {openHour.map((data) => (
              <div
                key={data.id}
                className="flex justify-between items-center text-2xl font-bold text-white"
              >
                <p>{data.day}</p>
                <p>{data.hour}</p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="assets/svg/info-img2.svg"
          alt="Info"
          width={620}
          height={561}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default Info;
