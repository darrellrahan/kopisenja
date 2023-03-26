"use client";

import React from "react";
import Header from "../components/Header";
import BannerArea from "../components/login/BannerArea";
import FormArea from "../components/login/FormArea";

function page() {
  return (
    <main>
      <Header />
      <div className="absolute top-16 bottom-0 inset-x-0 grid grid-cols-2 items-center">
        <BannerArea />
        <FormArea />
      </div>
    </main>
  );
}

export default page;
