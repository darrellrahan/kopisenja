import { billingInput, billingInputGrid } from "@/app/data";
import React from "react";

function Billing() {
  return (
    <div className="border border-white space-y-6 p-8">
      <h1 className="font-bold text-2xl border-b-2 w-fit pb-1">
        Detail Pemesanan
      </h1>
      {billingInput.map((data) => (
        <div key={data.id} className="flex flex-col gap-2">
          <label htmlFor={data.id} className="text-grey text-lg font-bold">
            {data.label}
          </label>
          <input
            type={data.type}
            id={data.id}
            className="text-white bg-transparent border border-grey text-xl p-3"
          />
        </div>
      ))}
      <div className="grid grid-cols-2 gap-6">
        {billingInputGrid.map((data) => (
          <div key={data.id} className="flex flex-col gap-2">
            <label htmlFor={data.id} className="text-grey text-lg font-bold">
              {data.label}
            </label>
            <input
              type={data.type}
              id={data.id}
              className="text-white bg-transparent border border-grey text-xl p-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Billing;
