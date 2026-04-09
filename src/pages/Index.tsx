import SideNav from "@/components/SideNav";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <SideNav />
      <Header />
      <main className="lg:pl-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <footer className="py-6 sm:py-8 px-4 sm:px-6 text-center">
          <p className="text-graphite font-body text-xs">
            © 2026 Shaptrshi Kaushal. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
