import { MenuProps } from "@/typings";
import Image from "next/image";
import React from "react";

function LeftArea({ data }: { data: MenuProps }) {
  return (
    <div>
      <Image
        src={data.img}
        alt={data.name}
        width={400}
        height={400}
        className="h-full object-cover rounded-lg"
      />
    </div>
  );
}

export default LeftArea;
