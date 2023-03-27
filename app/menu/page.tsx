"use client";

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/menu/Hero";
import Sidebar from "../components/menu/Sidebar";
import { useGlobalContext } from "../context";

function page() {
  const { currentMenuCategory } = useGlobalContext();

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="flex mt-16">
        <Sidebar />
        <p>{currentMenuCategory}</p>
      </div>
      <Footer />
    </main>
  );
}

export default page;
