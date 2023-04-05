import React from "react";
import Hero from "../components/checkout/Hero";
import Navigation from "../components/checkout/Navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";

function page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Navigation />
      <h1>checkout</h1>
      <Footer />
    </main>
  );
}

export default page;
