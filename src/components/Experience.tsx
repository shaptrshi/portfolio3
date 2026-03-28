import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Software Development Engineer",
    company: "Where U Elevate",
    period: "November 2025 — Present",
    location: "Greater Noida, India",
    points: [
      "Built responsive and scalable UI using React & Next.js, focusing on performance and clean component architecture.",
      "Integrated APIs efficiently, ensuring seamless data flow between frontend and backend systems.",
      "Implemented SEO best practices (Next.js SSR, meta tags, optimization) to improve search visibility and page ranking.",
      "Developed reusable UI components using modern design systems, enhancing consistency and development speed.",
      "Deployed and managed applications on AWS, ensuring reliable hosting and smooth production releases.",
    ],
  },
  {
    role: "DSA Trainer",
    company: "Multiple Institutions",
    period: "November 2024 — Present",
    points: [
      "Conducted DSA training sessions at Galgotia College, Galgotia University, IMAR Ghaziabad, and IPEC Ghaziabad",
      "Trained students on data structures, algorithms, and competitive programming techniques",
      "Focused on problem-solving strategies, time complexity analysis, and interview preparation",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "January 2025 — Present",
    points: [
      "Developing custom full stack applications for clients using the MERN stack",
      "Building responsive web applications and deploying production-ready projects",
      "6+ months of hands-on freelance development experience",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-chalk mb-12">
            Experience
          </h2>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-10 sm:space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative pl-8 sm:pl-10"
                >
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full gradient-bg border-2 border-background" />

                  <p className="font-body text-xs text-graphite mb-1">{exp.period}</p>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-chalk">
                    {exp.role}
                  </h3>
                  <p className="font-body text-sm text-graphite mb-3">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="text-foreground/70 font-body text-xs sm:text-sm leading-relaxed"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
