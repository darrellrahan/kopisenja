"use client";

import { useGlobalContext } from "@/app/context";
import Link from "next/link";
import React from "react";

function Checkout() {
  const { cart } = useGlobalContext();

  return (
    <div className="flex flex-col items-end text-xl">
      <div>
        <table>
          <tr>
            <td className="border border-grey py-3 px-12">Total</td>
            <td className="border border-grey py-3 px-12 text-gold">
              Rp.{" "}
              {new Intl.NumberFormat().format(
                cart.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.item.price * currentValue.qty,
                  0
                )
              )}
            </td>
          </tr>
        </table>
        <Link
          href="/checkout"
          className="block text-center bg-gold p-2 transition-all duration-300 ease-linear hover:opacity-75"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
