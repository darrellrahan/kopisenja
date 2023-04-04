"use client";

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/cart/Hero";
import Navigation from "../components/cart/Navigation";
import Table from "../components/cart/Table";
import Checkout from "../components/cart/Checkout";
import { useGlobalContext } from "../context";
import Empty from "../components/cart/Empty";

function page() {
  const { cart } = useGlobalContext();

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Navigation />
      {cart.length === 0 ? (
        <Empty />
      ) : (
        <div className="m-16 space-y-12">
          <Table />
          <Checkout />
        </div>
      )}
      <Footer />
    </main>
  );
}

export default page;
