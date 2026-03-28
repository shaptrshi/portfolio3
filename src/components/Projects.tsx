import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "GrayMatter Blogging Website",
    description:
      "A full stack blogging platform built as a freelance client project — features authentication, rich text editing with QuillJS, article publishing, search, filtering, and content management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "QuillJS"],
    github: null,
    live: "https://thatgreymatter.com/",
    highlight: true,
    badge: "Freelance · Client Project",
  },
  {
    title: "Social Media Website",
    description:
      "A responsive social networking platform with dynamic content, user interactions, and real-time features built with the MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/shaptrshi/Social-Media-React-App",
    live: null,
    highlight: false,
    badge: null,
  },
  {
    title: "Enterprise Resource Planning Website",
    description:
      "A web-based ERP platform for managing organizational workflows, data, and business processes efficiently.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com/shaptrshi/ERP",
    live: null,
    highlight: false,
    badge: null,
  },
  {
    title: "Movie Recommendation Model",
    description:
      "A machine learning model that recommends movies based on user preferences and viewing patterns using collaborative filtering.",
    tech: ["Python", "Jupyter Notebook", "Machine Learning"],
    github: "https://github.com/shaptrshi/Movie-Reccomendation-Model",
    live: null,
    highlight: false,
    badge: null,
  },
];

const Projects = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-chalk mb-12">
            Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative bg-card border rounded-xl p-5 sm:p-6 transition-all duration-300 ${
                  project.highlight
                    ? "border-primary/40 sm:col-span-2"
                    : "border-border"
                }`}
                style={{
                  opacity: hoveredIdx !== null && hoveredIdx !== i ? 0.4 : 1,
                  filter:
                    hoveredIdx !== null && hoveredIdx !== i
                      ? "blur(4px)"
                      : "none",
                  transform:
                    hoveredIdx === i ? "translateY(-12px)" : "translateY(0)",
                }}
              >
                {hoveredIdx === i && (
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, hsl(289 90% 60% / 0.1), transparent 70%)",
                    }}
                  />
                )}

                {project.badge && (
                  <div className="flex items-center gap-1.5 mb-3 relative z-10">
                    <Star size={12} className="text-primary" />
                    <span className="text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-primary">
                      {project.badge}
                    </span>
                  </div>
                )}

                <h3 className="font-heading text-base sm:text-lg font-semibold text-chalk mb-2 relative z-10">
                  {project.title}
                </h3>
                <p className="text-foreground/70 font-body text-xs sm:text-sm leading-relaxed mb-4 relative z-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 relative z-10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-xs font-body font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-secondary text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 relative z-10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs sm:text-sm font-heading font-medium text-graphite hover:text-chalk transition-colors"
                    >
                      <Github size={14} />
                      <span
                        className="transition-all duration-200 overflow-hidden"
                        style={{
                          maxWidth: hoveredIdx === i ? "80px" : "0px",
                          opacity: hoveredIdx === i ? 1 : 0,
                        }}
                      >
                        GitHub
                      </span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs sm:text-sm font-heading font-medium text-graphite hover:text-chalk transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span
                        className="transition-all duration-200 overflow-hidden"
                        style={{
                          maxWidth: hoveredIdx === i ? "80px" : "0px",
                          opacity: hoveredIdx === i ? 1 : 0,
                        }}
                      >
                        Live
                      </span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
