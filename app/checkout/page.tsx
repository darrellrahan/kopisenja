"use client";

import React from "react";
import Empty from "../components/cart/Empty";
import Billing from "../components/checkout/Billing";
import Hero from "../components/checkout/Hero";
import Navigation from "../components/checkout/Navigation";
import Order from "../components/checkout/Order";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useGlobalContext } from "../context";

function page() {
  const { cart } = useGlobalContext();

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="mx-16">
        <Navigation />
        {cart.length === 0 ? (
          <Empty />
        ) : (
          <div className="grid grid-cols-fluid gap-6">
            <Billing />
            <Order />
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

export default page;
