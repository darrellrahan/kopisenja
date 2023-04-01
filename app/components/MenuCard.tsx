import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuCardProps } from "@/typings";

function MenuCard({ url, img, name, price, related }: MenuCardProps) {
  return (
    <div
      className={`bg-lighterBlack rounded-50px ${!related ? "flex-none" : ""}`}
    >
      <Link href={url}>
        <Image
          src={img}
          alt={name}
          width={395}
          height={345}
          className="rounded-t-50px w-full object-cover"
        />
        <div className="m-8 space-y-8">
          <div className="space-y-2">
            <h1
              className={`font-bold text-white ${
                !related ? "text-2xl" : "text-xl"
              }`}
            >
              {name}
            </h1>
            <Image
              src="/assets/svg/stars.svg"
              alt="5 stars"
              width={72}
              height={72}
            />
          </div>
          <p
            className={`font-bold text-gold ${
              !related ? "text-lg" : "text-base"
            }`}
          >
            Rp. {new Intl.NumberFormat().format(price)}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default MenuCard;
