import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/menu/Hero";
import Menus from "../components/menu/Menus";
import Sidebar from "../components/menu/Sidebar";

function page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="flex gap-8 mt-16">
        <Sidebar />
        <Menus />
      </div>
      <Footer />
    </main>
  );
}

export default page;
