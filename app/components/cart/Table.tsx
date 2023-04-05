"use client";

import { useGlobalContext } from "@/app/context";
import Image from "next/image";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function Table() {
  const { cart, setCart } = useGlobalContext();

  return (
    <div>
      <table className="border border-white w-full text-center text-xl">
        <thead className="text-grey">
          <tr>
            <td className="border border-grey p-4">Foto</td>
            <td className="border border-grey p-4">Produk</td>
            <td className="border border-grey p-4">Harga</td>
            <td className="border border-grey p-4">Kuantitas</td>
            <td className="border border-grey p-4">Subtotal</td>
            <td className="border border-grey p-4">Hapus</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((data) => (
            <tr>
              <td className="border border-grey py-8" key={data.item.id}>
                <Image
                  src={data.item.img}
                  alt={data.item.name}
                  width={150}
                  height={150}
                  className="m-auto"
                />
              </td>
              <td className="border border-grey">{data.item.name}</td>
              <td className="border border-grey">
                Rp. {new Intl.NumberFormat().format(data.item.price)}
              </td>
              <td className="border border-grey">{data.qty}</td>
              <td className="border border-grey">
                Rp. {new Intl.NumberFormat().format(data.item.price * data.qty)}
              </td>
              <td className="border border-grey">
                <button
                  className="text-4xl hover:text-gold transition-all duration-300 ease-linear"
                  onClick={() => {
                    const filteredItems = cart.filter(
                      (filterData) => filterData.item.id !== data.item.id
                    );
                    setCart(filteredItems);
                  }}
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
