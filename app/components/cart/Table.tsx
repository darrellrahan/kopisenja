import Image from "next/image";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function Table() {
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
          <tr>
            <td className="border border-grey py-8">
              <Image
                src="/assets/svg/affogato.svg"
                alt="affogato"
                width={150}
                height={150}
                className="m-auto"
              />
            </td>
            <td className="border border-grey">Affogato</td>
            <td className="border border-grey">Rp. 40,000</td>
            <td className="border border-grey">6</td>
            <td className="border border-grey">Rp. 240,000</td>
            <td className="border border-grey">
              <button className="text-4xl hover:text-gold transition-all duration-300 ease-linear">
                <AiOutlineDelete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
