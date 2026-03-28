import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-chalk mb-4">
            About
          </h2>
          <p className="text-graphite font-body text-sm mb-10 max-w-xl">
            A quick snapshot of who I am, what drives me, and the path that got me here.
          </p>

          {/* Main intro */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-6">
            <p className="text-foreground/80 font-body leading-relaxed text-base sm:text-lg">
              I'm a full stack developer who loves turning ideas into real, working products.
              I work primarily with the <span className="text-chalk font-medium">MERN stack</span> —
              React on the front, Node.js and Express on the back, with MongoDB or MySQL handling the data.
              Alongside building products, I also work as a <span className="text-chalk font-medium">freelance developer</span> for
              clients and serve as a <span className="text-chalk font-medium">DSA trainer</span>, helping
              others sharpen their problem-solving skills.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* What I do */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-colors group"
            >
              <Briefcase
                size={20}
                className="text-graphite group-hover:text-primary transition-colors mb-3"
              />
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-chalk mb-3">
                What I Do
              </h3>
              <p className="text-foreground/70 font-body text-sm leading-relaxed">
                I build end-to-end web applications — from designing responsive UIs to
                architecting REST APIs and managing databases. I've shipped projects ranging
                from content platforms to ERP systems.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-colors group"
            >
              <GraduationCap
                size={20}
                className="text-graphite group-hover:text-primary transition-colors mb-3"
              />
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-chalk mb-3">
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-foreground/80 font-body text-sm font-medium">
                    Master of Computer Applications
                  </p>
                  <p className="text-graphite font-body text-xs">
                    PSIT, Kanpur — Sept 2023
                  </p>
                </div>
                <div>
                  <p className="text-foreground/80 font-body text-sm font-medium">
                    Bachelor of Science
                  </p>
                  <p className="text-graphite font-body text-xs">
                    CSJMU (Chhatrapati Shahu Ji Maharaj University)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Beyond Code */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-colors group sm:col-span-2 lg:col-span-1"
            >
              <Heart
                size={20}
                className="text-graphite group-hover:text-primary transition-colors mb-3"
              />
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-chalk mb-3">
                Beyond Code
              </h3>
              <p className="text-foreground/70 font-body text-sm leading-relaxed">
                When I'm not coding, I'm exploring new tech, solving DSA problems,
                or diving into machine learning experiments. I believe in continuous
                learning and building things that matter.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
