import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = ["hero", "about", "skills", "experience", "projects", "achievements", "contact"];
const labels = ["Home", "About", "Skills", "Experience", "Projects", "Achievements", "Contact"];

const SideNav = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
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

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-5">
      {sections.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-3"
          aria-label={labels[i]}
        >
          <motion.span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? "w-3 h-3 gradient-bg"
                : "w-2 h-2 bg-foreground opacity-60 group-hover:opacity-100"
            }`}
            layout
          />
          <span className="text-xs font-heading font-medium text-graphite opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {labels[i]}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default SideNav;
