import React from "react";
import Image from "next/image";
import { homeMenuData } from "../../data";
import MenuCard from "../MenuCard";

function Menu() {
  return (
    <div className="py-8 space-y-16 pb-0">
      <Image
        src="/assets/svg/menu-line.svg"
        alt="Kopi Senja"
        width={1179}
        height={28}
        className="w-full"
      />
      <div className="overflow-x-auto flex gap-8 pb-12">
        {homeMenuData.map((data) => (
          <MenuCard
            key={data.id}
            id={data.id}
            url={data.url}
            img={data.img}
            name={data.name}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
