import { MenuProps } from "@/typings";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function RightArea({ data }: { data: MenuProps }) {
  return (
    <div className="bg-lighterBlack rounded-lg p-8 space-y-10 text-xl w-750px">
      <div className="space-y-6">
        <h1 className="text-center text-3xl font-bold text-gold">
          {data.name}
        </h1>
        <p>{data.desc}</p>
        <h3 className="text-gold font-bold">
          Rp. {new Intl.NumberFormat().format(data.price)}
        </h3>
        <div className="space-x-2">
          <label htmlFor="jumlah">Jumlah: </label>
          <input
            type="number"
            id="jumlah"
            className="bg-transparent border border-white text-white py-1 px-2 w-16 text-base"
            defaultValue={1}
            min={1}
          />
        </div>
      </div>
      <div>
        <button className="flex items-center gap-2 bg-gold text-white text-base py-2 px-6 rounded-35px transition-all duration-300 ease-linear hover:opacity-75">
          <span>
            <AiOutlineShoppingCart />
          </span>{" "}
          <span>Tambahkan</span>
        </button>
      </div>
    </div>
  );
}

export default RightArea;
