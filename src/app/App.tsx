import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import Preloader from "./components/greet";

export default function App() {
  return (
    <div className="min-h-screen">
      <Preloader />
      <Hero />
      <About />
      <Projects />
      <Portfolio />
      <Footer />
    </div>
  );
}