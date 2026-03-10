import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "C++", level: 80 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "Technologies & Tools",
    icon: Brain,
    skills: [
      { name: "React", level: 80 },
      { name: "Quantum Computing", level: 75 },
      { name: "Data Analysis", level: 70 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
  {
    title: "Core Competencies",
    icon: Users,
    skills: [
      { name: "DSA", level: 75 },
      { name: "OOP Concepts", level: 80 },
      { name: "Problem Solving", level: 80 },
      { name: "Team Collaboration", level: 95 },
    ],
  },
];

const professionalSkills = [
  { name: "Leadership", icon: "LD" },
  { name: "Teamwork", icon: "TW" },
  { name: "Time Management", icon: "TM" },
  { name: "Problem Solving", icon: "PS" },
  { name: "Enthusiastic Learner", icon: "EL" },
  { name: "Communication", icon: "CM" },
];

const technologies = [
  "C++", "Python", "JavaScript", "React", "HTML5", "CSS3",
  "Quantum Computing", "Git", "VS Code", "OOP", "DSA", "Data Science"
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <div className="mb-1 flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="font-mono text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative bg-secondary/30">
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <p className="mb-2 font-mono text-sm text-primary">02. Skills</p>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Technical & Professional Skills</h2>
        </AnimatedSection>

        <StaggerContainer className="mb-12 mt-10 grid gap-4 sm:gap-6 md:mb-16 md:mt-16 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.15}>
          {skillCategories.map((category, categoryIndex) => (
            <StaggerItem key={category.title}>
              <motion.div
                className="h-full rounded-xl border border-border bg-card p-4 sm:p-6"
                whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <category.icon className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-semibold text-gradient sm:text-lg">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mb-12 md:mb-16">
          <h3 className="mb-6 text-center text-lg font-semibold sm:text-xl">Professional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 sm:px-5 sm:py-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.5)" }}
              >
                <span className="text-xs font-mono text-primary">{skill.icon}</span>
                <span className="text-sm font-medium sm:text-base">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center">
          <h3 className="mb-6 text-base font-semibold sm:mb-8 sm:text-lg">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="cursor-default rounded-full border border-border bg-card px-3 py-1.5 text-xs font-mono sm:px-4 sm:py-2 sm:text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.5)", color: "hsl(var(--primary))" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
