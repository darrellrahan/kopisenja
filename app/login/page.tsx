import Image from "next/image";
import React from "react";
import Header from "../components/Header";

function page() {
  return (
    <main className="text-white min-h-screen">
      <Header />
      <div className="absolute top-16 bottom-0 inset-x-0 grid grid-cols-2">
        <div className="bg-loginBg bg-no-repeat bg-cover" />
        <div className="mx-24 my-12 bg-lighterBlack"></div>
      </div>
    </main>
  );
}

export default page;
