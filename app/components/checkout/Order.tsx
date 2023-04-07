import Image from "next/image";
import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";

function Order() {
  return (
    <div className="border border-white p-8 flex flex-col justify-between">
      <div className="space-y-8">
        <h1 className="font-bold text-2xl border-b-2 w-fit pb-1">
          Pesanan Anda
        </h1>
        <table className="text-lg w-full">
          <thead>
            <tr className="text-center text-grey">
              <td className="border border-grey p-3">Produk</td>
              <td className="border border-grey p-3">Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-grey p-3">Hot Cappucino</td>
              <td className="border border-grey p-3 text-center">Rp. 40,000</td>
            </tr>
            <tr>
              <td className="border border-grey p-3">Irish Coffee</td>
              <td className="border border-grey p-3 text-center">Rp. 75,000</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-grey p-3">Total</td>
              <td className="border border-grey p-3 text-gold text-center">
                Rp. 115,000
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-lg space-y-4">
          <div className="flex items-center gap-2">
            <input type="radio" name="payment" id="cod" />
            <label htmlFor="cod">Cash On Delivery</label>
            <span className="text-2xl">
              <GiMoneyStack />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="payment" id="payment" />
            <label htmlFor="payment">Payment</label>
            <span className="text-2xl">
              <AiOutlineCreditCard />
            </span>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-gold w-full p-2 text-xl transition-all duration-300 ease-linear hover:opacity-75">
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
}

export default Order;
