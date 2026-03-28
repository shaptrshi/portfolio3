import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-chalk mb-4">
            Contact
          </h2>
          <p className="text-foreground/80 font-body leading-relaxed text-sm sm:text-base mb-8">
            Interested in working together? Let's connect.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="mailto:shaptrshik@gmail.com"
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 text-graphite hover:text-chalk hover:border-primary/40 transition-all font-body text-xs sm:text-sm hover-scale"
            >
              <Mail size={18} className="shrink-0" /> shaptrshik@gmail.com
            </a>
            <a
              href="tel:+917755099766"
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 text-graphite hover:text-chalk hover:border-primary/40 transition-all font-body text-xs sm:text-sm hover-scale"
            >
              <Phone size={18} className="shrink-0" /> +91-7755099766
            </a>
            <a
              href="https://www.linkedin.com/in/shaptrshi-kaushal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 text-graphite hover:text-chalk hover:border-primary/40 transition-all font-body text-xs sm:text-sm hover-scale"
            >
              <Linkedin size={18} className="shrink-0" /> linkedin.com/in/shaptrshi-kaushal
            </a>
            <a
              href="https://github.com/shaptrshi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 text-graphite hover:text-chalk hover:border-primary/40 transition-all font-body text-xs sm:text-sm hover-scale"
            >
              <Github size={18} className="shrink-0" /> github.com/shaptrshi
            </a>
            <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 text-graphite font-body text-xs sm:text-sm">
              <MapPin size={18} className="shrink-0" /> Kanpur, India
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
