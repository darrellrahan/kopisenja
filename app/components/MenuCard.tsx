import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuCardProps } from "@/typings";

function MenuCard({ url, img, name, price }: MenuCardProps) {
  return (
    <Link href={url} className="bg-lighterBlack flex-none rounded-50px">
      <Image src={img} alt={name} width={395} height={345} />
      <div className="m-8 space-y-8">
        <div className="space-y-2">
          <h1 className="font-bold text-white text-2xl">{name}</h1>
          <Image
            src="assets/svg/stars.svg"
            alt="5 stars"
            width={72}
            height={72}
          />
        </div>
        <p className="font-bold text-gold text-lg">
          Rp. {new Intl.NumberFormat().format(price)}
        </p>
      </div>
    </Link>
  );
}

export default MenuCard;
