import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-start justify-center overflow-hidden px-4 pt-24 pb-10 sm:min-h-[100svh] sm:px-6 sm:items-center sm:py-0"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 -left-32 w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-[0.07] blur-[100px] pointer-events-none"
        style={{ background: "linear-gradient(135deg, hsl(var(--aperture-start)), hsl(var(--aperture-end)))" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-[0.05] blur-[100px] pointer-events-none"
        style={{ background: "linear-gradient(135deg, hsl(var(--aperture-end)), hsl(var(--aperture-start)))" }}
      />

      <div className="max-w-[1100px] w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-body text-[10px] sm:text-xs text-foreground/70">
              Available for freelance & full-time roles
            </span>
          </motion.div>

          <h1 className="font-heading text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-chalk mb-3 sm:mb-4">
            Shaptrshi{" "}
            <span className="gradient-text">Kaushal</span>
          </h1>

          <p className="font-heading text-sm sm:text-base md:text-lg font-medium tracking-wide text-graphite mb-6 sm:mb-8">
            Full Stack SDE{" "}
            <span className="text-foreground/30 mx-1 sm:mx-2">·</span>{" "}
            Freelance Software Developer{" "}
            <span className="text-foreground/30 mx-1 sm:mx-2">·</span>{" "}
            DSA Trainer
          </p>

          <p className="max-w-xl text-sm sm:text-base md:text-lg text-foreground/60 font-body leading-relaxed mb-8 sm:mb-10">
            I build scalable web applications with{" "}
            <span className="text-chalk font-medium">React</span>,{" "}
            <span className="text-chalk font-medium">Node.js</span>,{" "}
            <span className="text-chalk font-medium">Express</span>, and{" "}
            <span className="text-chalk font-medium">MongoDB</span>.
            Focused on clean architecture, performance, and shipping products that matter.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href="https://github.com/shaptrshi"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-heading text-xs sm:text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shaptrshi-kaushal/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-heading text-xs sm:text-sm font-semibold text-chalk hover:bg-secondary transition-colors flex items-center gap-2"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="border border-border px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-heading text-xs sm:text-sm font-semibold text-chalk hover:bg-secondary transition-colors flex items-center gap-2"
            >
              <Mail size={16} />
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1cd3Ut8EIiwqcf2-LbzpCkCMtdNK_MVyQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-heading text-xs sm:text-sm font-semibold text-chalk hover:bg-secondary transition-colors flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:bottom-10 sm:block"
      >
        <a href="#about" className="flex flex-col items-center gap-1 text-graphite hover:text-chalk transition-colors">
          <span className="text-[10px] font-heading tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
