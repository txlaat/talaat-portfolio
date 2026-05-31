import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <>
      <div className="wave-background"></div>
      <Header />
      <Hero />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Experience />
      <div className="section-divider"></div>
      <Contact />
      <ScrollObserver />
    </>
  );
}
