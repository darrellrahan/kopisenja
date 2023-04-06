import React from "react";
import Billing from "../components/checkout/Billing";
import Hero from "../components/checkout/Hero";
import Navigation from "../components/checkout/Navigation";
import Order from "../components/checkout/Order";
import Footer from "../components/Footer";
import Header from "../components/Header";

function page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="mx-16">
        <Navigation />
        <div className="grid grid-cols-fluid gap-6">
          <Billing />
          <Order />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default page;
