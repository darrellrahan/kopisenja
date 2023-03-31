import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { menu } from "@/app/data";
import { SingleMenuParams } from "@/typings";
import Image from "next/image";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function page({ params: { id } }: SingleMenuParams) {
  const data = menu.find((data) => data.id === id);

  if (!data) return <h1>{id} doesn't exist.</h1>;

  return (
    <main className="min-h-screen">
      <Header />
      <div className="translate-y-16 flex">
        <div>
          <Image
            src={data.img}
            alt={data.name}
            width={100}
            height={100}
            className="h-full object-cover"
          />
        </div>
        <div>
          <h1>{data.name}</h1>
          <p>{data.desc}</p>
          <h3>{data.price}</h3>
          <label htmlFor="jumlah">Jumlah: </label>
          <input
            type="number"
            id="jumlah"
            className="text-black"
            min={1}
            value={1}
          />
          <button>
            <AiOutlineShoppingCart /> <span>Tambahkan</span>
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return menu.map((data) => ({ id: data.id.toString() }));
}
