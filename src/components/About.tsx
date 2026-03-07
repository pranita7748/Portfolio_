import { BookOpen, Code2, Lightbulb, Users, User } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const stats = [
  { icon: Code2, value: "3+", label: "Projects Built" },
  { icon: BookOpen, value: "3rd", label: "Year BTech" },
  { icon: Users, value: "2+", label: "Club Roles" },
  { icon: Lightbulb, value: "∞", label: "Curiosity" },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-narrow">
        {/* Section Header */}
        <AnimatedSection>
          <p className="font-mono text-primary text-sm mb-2">01. About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get to know me
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Image Section */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative">
              {/* Main Image Container */}
              <motion.div 
                className="relative aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-border overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder - Replace with your image 
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                  <User size={100} strokeWidth={1} />
                  <span className="text-sm font-mono mt-4">Your Photo</span>
                  <span className="text-xs text-muted-foreground/60 mt-1">Upload to replace</span>
                </div>
                */}

                {
                <img 
                  src="/aboutsec.jpeg" 
                  alt="Pranita Patil" 
                  className="w-full h-full object-cover"
                />
                }
              </motion.div>

              {/* Decorative Border */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -inset-8 border border-primary/10 rounded-3xl -z-20" />

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 px-4 py-2 rounded-lg bg-card border border-border shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="font-mono text-sm text-primary">{"<Student />"}</span>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Text Content */}
          <div className="space-y-6">
            <AnimatedSection delay={0.3}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Computer Science BTech student</span> with 
                a genuine passion for technology and problem-solving. While I'm still building my 
                professional experience, I've channeled my energy into creating impactful projects 
                and taking on leadership roles in tech communities.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in <span className="text-foreground font-medium">web development</span> and 
                have a growing interest in <span className="text-foreground font-medium">data analysis</span> and 
                <span className="text-foreground font-medium"> quantum Computing</span>. I believe in learning by doing, 
                which is why I'm always working on projects that challenge me to grow.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I actively contribute to college clubs and events, developing my teamwork 
                and leadership abilities. I'm a quick learner who thrives in collaborative environments.
              </p>
            </AnimatedSection>

            {/* Code Block */}
            <AnimatedSection delay={0.6}>
              <div className="code-block mt-8">
                <pre className="text-sm">
                  <code>
                    <span className="text-primary">const</span>{" "}
                    <span className="text-cyan-400">student</span> = {"{"}
                    {"\n"}  name: <span className="text-green-400">"Pranita Pravin Patil"</span>,
                    {"\n"}  degree: <span className="text-green-400">"BTech Computer Science and Design"</span>,
                    {"\n"}  interests: [<span className="text-green-400">"Web Dev"</span>, <span className="text-green-400">"Data Science"</span>, <span className="text-green-400">"Quantum Comp"</span>],
                    {"\n"}  mindset: <span className="text-green-400">"Always learning"</span>,
                    {"\n"}  status: <span className="text-green-400">"Ready for opportunities"</span>
                    {"\n"}{"}"};
                  </code>
                </pre>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Stats Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20" staggerDelay={0.1}>
          {stats.map(({ icon: Icon, value, label }) => (
            <StaggerItem key={label}>
              <motion.div
                className="p-6 rounded-xl bg-card border border-border text-center"
                whileHover={{ y: -5, borderColor: "hsl(var(--primary) / 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-3xl font-bold text-gradient mb-1">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
