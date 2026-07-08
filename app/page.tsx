import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Produtos from "./components/Produtos";
import Diferenciais from "./components/Diferenciais";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Produtos />
      <Diferenciais />
      <Footer />
    </>
  );
}