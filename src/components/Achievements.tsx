import { motion } from "framer-motion";
import { Trophy, Code2, Award } from "lucide-react";

const achievements = [
  {
    icon: Code2,
    title: "250+ DSA Problems",
    description: "Solved over 250 data structure and algorithm problems across competitive programming platforms.",
  },
  {
    icon: Trophy,
    title: "Tech Fest Participation",
    description: "Actively participated in tech fests and coding competitions during academic career.",
  },
];

const certificates = [
  {
    title: "The Complete Prompt Engineering for AI Bootcamp",
    provider: "Udemy",
  },
  {
    title: "Programming in C++ with OOPS",
    provider: "Udemy",
  },
  {
    title: "The Web Development Bootcamp",
    provider: "Udemy",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-chalk mb-12">
            Achievements & Certificates
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary transition-colors group"
              >
                <item.icon
                  size={22}
                  className="text-graphite group-hover:text-primary transition-colors mb-3 sm:mb-4"
                />
                <h3 className="font-heading text-sm sm:text-base font-semibold text-chalk mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70 font-body text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <h3 className="font-heading text-lg sm:text-xl font-semibold text-chalk mb-6">
            Certificates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary transition-colors group"
              >
                <Award
                  size={22}
                  className="text-graphite group-hover:text-primary transition-colors mb-3 sm:mb-4"
                />
                <h4 className="font-heading text-xs sm:text-sm font-semibold text-chalk mb-1">
                  {cert.title}
                </h4>
                <p className="text-graphite font-body text-xs">
                  {cert.provider}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
