import { related } from "@/app/data";
import React from "react";
import MenuCard from "../MenuCard";

function Related() {
  return (
    <div className="mx-16 space-y-12">
      <div>
        <h1 className="text-3xl">Produk Terkait</h1>
      </div>
      <div className="flex justify-between gap-8">
        {related.map((data) => (
          <MenuCard
            key={data.id}
            id={data.id}
            url={data.url}
            img={data.img}
            name={data.name}
            price={data.price}
            related
          />
        ))}
      </div>
    </div>
  );
}

export default Related;
