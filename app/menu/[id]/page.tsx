import { menu } from "@/app/data";
import { SingleMenuParams } from "@/typings";
import Image from "next/image";
import React from "react";

export default function page({ params: { id } }: SingleMenuParams) {
  const data = menu.find((data) => data.id === id);

  if (!data) return <h1>{id} doesn't exist.</h1>;

  return (
    <div>
      <h1>{data.name}</h1>
      <Image src={data.img} alt={data.name} width={100} height={100} />
      <p>{data.desc}</p>
      <h3>{data.price}</h3>
    </div>
  );
}

export function generateStaticParams() {
  return menu.map((data) => ({ id: data.id.toString() }));
}
