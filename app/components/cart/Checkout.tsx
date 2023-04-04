import React from "react";

function Checkout() {
  return (
    <div className="flex flex-col items-end text-xl">
      <div className="">
        <table className="border border-white">
          <tr>
            <td className="border border-grey py-3 px-12 text-gold">Total</td>
            <td className="border border-grey py-3 px-12">Rp. 240,000</td>
          </tr>
        </table>
        <button className="w-full bg-gold p-2 transition-all duration-300 ease-linear hover:opacity-75">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
