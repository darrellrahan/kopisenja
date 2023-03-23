import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Info from "./components/Info";
import Team from "./components/Team";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="space-y-8 px-16">
        <About />
        <Menu />
        <Info />
        <Team />
        <Quote />
        <Footer />
      </div>
    </main>
  );
}
