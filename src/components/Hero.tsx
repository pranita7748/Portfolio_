import { ArrowDown, Github, Linkedin, Mail, FileText, User } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Web Developer",
  "Data Science Enthusiast",
  "Quantum Computing Explorer",
  "Problem Solver",
  "UI/UX Designer",
  
];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-background opacity-50" />
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 -left-40 h-72 w-72 rounded-full bg-primary/20 blur-3xl sm:h-96 sm:w-96"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-40 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl sm:h-96 sm:w-96"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container-narrow relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-secondary px-3 py-2 sm:mb-8 sm:px-4"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground sm:text-sm">Open to Internships & Opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Hi, I'm{" "}
              <span className="text-gradient glow-text">Pranita</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-4 break-words text-sm font-medium text-muted-foreground sm:text-base md:text-xl"
            >
              Computer Science Undergraduate | Web Developer | UI/UX Designer | AI/ML Enthusiast | Quantum Computing Explorer
            </motion.p>

            {/* Typing Effect */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-6 h-8 sm:h-10 md:h-12"
            >
              <p className="font-mono text-base text-muted-foreground sm:text-lg md:text-2xl">
                <span className="text-primary">{">"}</span>{" "}
                <span>{displayText}</span>
                <motion.span 
                  className="ml-1 inline-block h-4 w-0.5 bg-primary sm:h-5 md:h-6"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </p>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-8 max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg"
            >
              Passionate about building meaningful projects and constantly learning new technologies. 
              I turn ideas into reality through code and creative problem-solving.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Button variant="hero" size="lg" className="w-full justify-center sm:w-auto" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full justify-center sm:w-auto" asChild>
                <a href="/public/pranita_resume.pdf" download>
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <span className="text-sm text-muted-foreground font-mono">Connect with me</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/pranita7748", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/pranita-patil-0685762a8/", label: "LinkedIn" },
                  { icon: Mail, href: "#contact", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-2 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative mt-4 lg:mt-0">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl blur-2xl opacity-20 animate-pulse" />
              
              {/* Image Container - Rectangular for better photo framing */}
              <motion.div 
                className="relative flex h-60 w-52 items-center justify-center overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/20 to-cyan-500/20 sm:h-72 sm:w-64 md:h-80 md:w-72 lg:h-96 lg:w-80"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder - Replace with your image */}
                <div className="flex flex-col items-center justify-center text-muted-foreground">
                  <User size={64} strokeWidth={1} />
                  <span className="text-xs font-mono mt-2">Your Photo</span>
                </div>
                
                { 
                <img 
                  src="/finiq.jpeg" 
                  alt="Pranita Patil" 
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
                }
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-cyan-400"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute top-1/2 -right-4 h-3 w-3 rounded-full bg-primary/50 sm:-right-6"
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <motion.div 
          className="flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
            <motion.div 
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
