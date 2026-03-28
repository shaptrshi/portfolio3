import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "ReactJS", "QuillJS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST API", "Cloudinary", "Docker"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "C++", "Python", "Java"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "pgAdmin"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "AWS (Deployment)"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-chalk mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider text-graphite mb-3 sm:mb-4">
                  {cat.title}
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="text-foreground/80 font-body text-xs sm:text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
