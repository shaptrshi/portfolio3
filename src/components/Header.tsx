import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";

const sections = ["hero", "about", "skills", "experience", "projects", "achievements", "contact"];
const labels = ["Home", "About", "Skills", "Experience", "Projects", "Achievements", "Contact"];

const Header = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl shadow-sm" : ""
        } lg:left-16`}
      >
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary hover:bg-accent transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {sections.map((id, i) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === id
                  ? "bg-primary/10 text-primary"
                  : "text-graphite hover:text-chalk hover:bg-secondary"
              }`}
            >
              {labels[i]}
            </button>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="ml-auto lg:ml-4">
          <ThemeToggle />
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col items-center justify-center h-full gap-5 sm:gap-6">
            {sections.map((id, i) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`text-xl sm:text-2xl font-heading font-semibold transition-colors ${
                  active === id ? "gradient-text" : "text-chalk hover:text-primary"
                }`}
              >
                {labels[i]}
              </button>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;
