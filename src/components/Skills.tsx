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
  { name: "Leadership", icon: "👥" },
  { name: "Teamwork", icon: "🤝" },
  { name: "Time Management", icon: "⏰" },
  { name: "Problem Solving", icon: "🧩" },
  { name: "Enthusiastic Learner", icon: "📚" },
  { name: "Communication", icon: "💬" },
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
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
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
    <section id="skills" className="section-padding bg-secondary/30 relative">
      {/* Background Element */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <AnimatedSection>
          <p className="font-mono text-primary text-sm mb-2">02. Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical & Professional Skills
          </h2>
        </AnimatedSection>

        {/* Technical Skills Bars */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-16 mb-16" staggerDelay={0.15}>
          {skillCategories.map((category, categoryIndex) => (
            <StaggerItem key={category.title}>
              <motion.div
                className="p-6 rounded-xl bg-card border border-border h-full"
                whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-gradient">{category.title}</h3>
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

        {/* Professional Skills */}
        <AnimatedSection className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Professional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="px-5 py-3 rounded-xl bg-card border border-border flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "hsl(var(--primary) / 0.5)",
                }}
              >
                <span className="text-xl">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Tech Cloud */}
        <AnimatedSection className="text-center">
          <h3 className="text-lg font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-mono cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "hsl(var(--primary) / 0.5)",
                  color: "hsl(var(--primary))"
                }}
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
