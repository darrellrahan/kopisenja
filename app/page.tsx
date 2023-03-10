import Header from "./components/Header";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Menu from "./components/home/Menu";
import Info from "./components/home/Info";
import Team from "./components/home/Team";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="space-y-8 px-16 pb-16">
        <About />
        <Menu />
        <Info />
        <Team />
      </div>
    </main>
  );
}
