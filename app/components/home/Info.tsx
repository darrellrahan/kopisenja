import Image from "next/image";
import React from "react";
import { locations, openHour } from "../../data";
import { IoLocationSharp } from "react-icons/io5";

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
        <div className="bg-lighterBlack p-16 space-y-12 pt-16">
          <h1 className="font-extrabold text-4xl text-center text-gold">
            Lokasi
          </h1>
          <div className="space-y-10">
            {locations.map((data) => (
              <div key={data.id} className="text-white text-2xl font-bold">
                <p className="flex gap-4 items-center">
                  <span className="text-4xl">
                    <IoLocationSharp />
                  </span>
                  <span>{data.location}</span>
                </p>
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
