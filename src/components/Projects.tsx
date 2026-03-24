import { ExternalLink, Github, Folder, ImageIcon, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Smart Hostel Management System",
    description:
      "A comprehensive hostel management solution featuring room allocation, complaint tracking, mess management, and admin dashboard. Streamlines hostel operations for students and administrators.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Database"],
    learnings: "Learned full-stack development, database design, and user authentication systems.",
    github: "#",
    live: "#",
    gradient: "from-cyan-400/20 via-sky-500/20 to-blue-500/20",
    image: "/finiq.jpeg",
    status: "completed",
  },

  {
    title: "SkillBridge - SDG 1 (No Poverty) Empowerment Platform",
    description:
      "SkillBridge is a web platform supporting SDG 1: No Poverty, connecting users with skill development resources, career guidance, and opportunities to improve employability and financial independence.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    learnings:
      "Learned full-stack app architecture, role-based access control, API design, database modeling with Prisma, and building end-to-end recruiter and seeker workflows.",
    github: "#",
    live: "#",
    gradient: "from-emerald-400/20 via-cyan-500/20 to-blue-500/20",
    image: "/waaal.jpeg",
    status: "completed",
  },
];

const upcomingProjects = [
  
   {
  "title": "Ritantantra: Neuro-Symbolic Financial Intelligence System",
  "description": "A fintech platform that uses neuro-symbolic AI and graph reasoning to analyze financial relationships, detect fraud, and provide explainable risk insights.",
  "tech": ["Next.js", "NestJS", "PostgreSQL", "Neo4j", "Vector DB", "LLMs"],
  "status": "in-progress"
},
 {
  "title": "SakhiSeva: Smart Self-Help Group Management System",
  "description": "A mobile-first platform designed for rural women self-help groups (Bachat Gat) to digitally manage member records, monthly savings, and payment tracking. The app includes voice guidance in local languages, simple icon-based navigation, and real-time dashboards for group leaders to easily monitor payments and member information.",
  "tech": ["React Native", "Node.js", "Express.js", "PostgreSQL", "Firebase", "Voice AI (Speech-to-Text)", "Cloud Storage"],
  "status": "in-progress"
},
  {
    title: "Nashik Hall Booking and Event Manager",
    description: "Full-stack application for managing events, registrations, and feedback.",
    tech: ["React", "Node.js", "MongoDB"],
    status: "in-progress",
  },
 
];

const otherProjects = [
 {
  title: "Neo4j Python API Impact Analyzer",
  description: "CLI tool that compares Neo4j driver API versions and scans Python code to detect breaking usages with file/line-level fix suggestions.",
  tech: ["Python", "AST", "CLI", "Neo4j", "Static Analysis"],
},

  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio showcasing projects and skills with smooth animations.",
    tech: ["React", "Tailwind CSS"],
  },
  
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="font-mono text-primary text-sm mb-2">03. Projects</p>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            What I've Built
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Here are some projects that showcase my skills and passion for learning. 
            Each project taught me something new and helped me grow as a developer.
          </p>
        </AnimatedSection>

        <div className="mb-16 mt-10 space-y-8 sm:space-y-10 md:mb-20 md:mt-14">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.2}>
              <motion.article
                className="group overflow-hidden rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.28 }}
              >
                <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-12 lg:gap-8 lg:p-8">
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""} lg:col-span-7`}>
                    <div className="mb-3 flex items-center gap-3">
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary/90">Featured Project</p>
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide text-primary">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">{project.title}</h3>

                    <div className="mb-5 rounded-xl border border-border/80 bg-background/70 p-4 sm:p-5">
                      <p className="mb-4 text-sm leading-7 text-muted-foreground sm:text-base">{project.description}</p>
                      <p className="text-sm italic leading-7 text-primary/85">
                        <strong>Key Learning:</strong> {project.learnings}
                      </p>
                    </div>

                    <div className="mb-6 flex flex-wrap gap-2.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border/70 bg-secondary/70 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.github}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""} lg:col-span-5`}>
                    <div className={`relative aspect-[4/3] overflow-hidden rounded-xl border border-border/80 bg-gradient-to-br ${project.gradient}`}>
                      {project.image ? (
                        <>
                          <img
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/20 to-transparent" />
                          <div className="absolute left-3 top-3 rounded-md border border-white/15 bg-black/35 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-white/80">
                            preview
                          </div>
                        </>
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center text-muted-foreground">
                          <ImageIcon size={34} strokeWidth={1.2} />
                          <span className="mt-2 text-xs font-mono">Project Screenshot</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mb-12">
          <h3 className="mb-2 text-center text-xl font-bold sm:text-2xl">Currently Building</h3>
          <p className="mb-8 text-center text-sm text-muted-foreground sm:text-base">Projects I'm actively working on</p>
        </AnimatedSection>

        <StaggerContainer className="mb-16 grid gap-4 sm:gap-6 md:mb-20 md:grid-cols-2" staggerDelay={0.1}>
          {upcomingProjects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                className="group relative h-full overflow-hidden rounded-xl border border-border border-dashed bg-card p-4 sm:p-6"
                whileHover={{ 
                  borderColor: "hsl(var(--primary) / 0.5)",
                  borderStyle: "solid"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    In Progress
                  </span>
                </div>
                  <h4 className="mb-2 text-base font-semibold transition-colors group-hover:text-primary sm:text-lg">
                    {project.title}
                  </h4>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mb-12">
          <h3 className="text-xl font-bold sm:text-2xl">Other Noteworthy Projects</h3>
        </AnimatedSection>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" staggerDelay={0.1}>
          {otherProjects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                className="group h-full rounded-xl border border-border bg-card p-4 sm:p-5"
                whileHover={{ 
                  y: -5, 
                  borderColor: "hsl(var(--primary) / 0.5)",
                  boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <Folder className="w-8 h-8 text-primary" />
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </div>
                <h4 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-3">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-12">
          <Button variant="heroOutline" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All on GitHub
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};
