"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import LeftArea from "@/app/components/singleMenu/LeftArea";
import Modal from "@/app/components/singleMenu/Modal";
import Navigation from "@/app/components/singleMenu/Navigation";
import Related from "@/app/components/singleMenu/Related";
import RightArea from "@/app/components/singleMenu/RightArea";
import { useGlobalContext } from "@/app/context";
import { menu } from "@/app/data";
import { SingleMenuParams } from "@/typings";
import React from "react";

export default function page({ params: { id } }: SingleMenuParams) {
  const { isModal } = useGlobalContext();
  const data = menu.find((data) => data.id === id);

  if (!data) return <h1>{id} doesn't exist.</h1>;
  if (isModal) return <Modal />;

  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex justify-center gap-8 mx-16 mt-20">
        <LeftArea data={data} />
        <RightArea data={data} />
      </div>
      <Navigation menu={data.name} url={`/menu/${data.id}`} />
      <Related />
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return menu.map((data) => ({ id: data.id }));
}
