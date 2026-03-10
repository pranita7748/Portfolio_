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
    gradient: "from-primary/20 via-cyan-500/20 to-blue-500/20",
    status: "completed",
  },
  {
    title: "Neo4j Graph Analyzer",
    description:
      "A graph database visualization and analysis tool built with Neo4j. Enables users to explore relationships between data points, run Cypher queries, and visualize complex networks.",
    tech: ["Neo4j", "Python", "JavaScript", "Graph Algorithms"],
    learnings: "Deep understanding of graph databases, relationship modeling, and data visualization.",
    github: "#",
    live: "#",
    gradient: "from-purple-500/20 via-pink-500/20 to-primary/20",
    status: "completed",
  },
];

const upcomingProjects = [
  {
    title: "AI-Powered Study Assistant",
    description: "An intelligent study companion using machine learning to create personalized learning paths.",
    tech: ["React", "Python", "ML"],
    status: "in-progress",
  },
  {
    title: "Campus Event Manager",
    description: "Full-stack application for managing college events, registrations, and feedback.",
    tech: ["React", "Node.js", "MongoDB"],
    status: "in-progress",
  },
];

const otherProjects = [
  {
    title: "Weather Dashboard",
    description: "Real-time weather app with location search, forecasts, and weather alerts.",
    tech: ["React", "API Integration"],
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio showcasing projects and skills with smooth animations.",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive tool to visualize sorting and pathfinding algorithms step by step.",
    tech: ["JavaScript", "CSS Animations"],
  },
  {
    title: "Task Tracker",
    description: "Simple yet effective task management app with priority levels and due dates.",
    tech: ["React", "LocalStorage"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
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

        {/* Featured Projects */}
        <div className="mb-16 mt-10 space-y-12 sm:space-y-16 md:mb-20 md:mt-16 md:space-y-24">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.2}>
              <div
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                {/* Image/Gradient Placeholder */}
                <motion.div 
                className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                  <div
                    className={`aspect-video rounded-xl bg-gradient-to-br ${project.gradient} border border-border flex flex-col items-center justify-center relative overflow-hidden group`}
                  >
                    {/* Placeholder content */}
                    <div className="flex flex-col items-center justify-center text-muted-foreground z-10">
                      <ImageIcon size={40} strokeWidth={1} />
                      <span className="mt-2 text-xs font-mono sm:text-sm">Project Screenshot</span>
                      <span className="text-xs text-muted-foreground/60 mt-1">Upload to replace</span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="mb-4 text-xl font-bold sm:text-2xl">{project.title}</h3>
                  <motion.div 
                    className="mb-4 rounded-xl border border-border bg-card p-4 sm:p-6"
                    whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4 text-sm text-muted-foreground sm:text-base">{project.description}</p>
                    <p className="text-xs italic text-primary/80 sm:text-sm">
                      <strong>Key Learning:</strong> {project.learnings}
                    </p>
                  </motion.div>
                  <div className={`flex flex-wrap gap-3 mb-6 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground sm:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    <motion.a 
                      href={project.github} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a 
                      href={project.live} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* In Progress Projects */}
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

        {/* Other Projects */}
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

        {/* View More */}
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
