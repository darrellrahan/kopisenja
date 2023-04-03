import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/cart/Hero";
import Navigation from "../components/cart/Navigation";
import Table from "../components/cart/Table";

function page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Navigation />
      <div className="m-16">
        <Table />
      </div>
      <Footer />
    </main>
  );
}

export default page;
