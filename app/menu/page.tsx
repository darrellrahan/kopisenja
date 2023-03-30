import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/menu/Hero";
import Menus from "../components/menu/Menus";
import Navigation from "../components/menu/Navigation";
import Sidebar from "../components/menu/Sidebar";

function page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Navigation />
      <div className="flex gap-8">
        <Sidebar />
        <Menus />
      </div>
      <Footer />
    </main>
  );
}

export default page;
