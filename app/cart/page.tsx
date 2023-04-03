import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/cart/Hero";
import Navigation from "../components/cart/Navigation";

function page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Navigation />
      <h1>Hello World</h1>
      <Footer />
    </main>
  );
}

export default page;
