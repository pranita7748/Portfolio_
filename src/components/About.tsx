import { BookOpen, Code2, Lightbulb, Users } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const stats = [
  { icon: Code2, value: "3+", label: "Projects Built" },
  { icon: BookOpen, value: "3rd", label: "Year BTech" },
  { icon: Users, value: "2+", label: "Club Roles" },
  { icon: Lightbulb, value: "INF", label: "Curiosity" },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="mb-2 font-mono text-sm text-primary">01. About Me</p>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Get to know me</h2>
        </AnimatedSection>

        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-12">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative">
              <motion.div
                className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-cyan-500/10 sm:max-w-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/aboutsec.jpeg" alt="Pranita Patil" className="h-full w-full object-cover" />
              </motion.div>

              <div className="absolute -inset-3 -z-10 rounded-2xl border-2 border-primary/20 sm:-inset-4" />
              <div className="absolute -inset-6 -z-20 rounded-3xl border border-primary/10 sm:-inset-8" />

              <motion.div
                className="absolute -right-2 -top-3 rounded-lg border border-border bg-card px-3 py-1.5 shadow-lg sm:-right-6 sm:-top-6 sm:px-4 sm:py-2"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="font-mono text-xs text-primary sm:text-sm">{"<Student />"}</span>
              </motion.div>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={0.3}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I&apos;m a <span className="font-medium text-foreground">Computer Science BTech student</span> with
                a genuine passion for technology and problem-solving. While I&apos;m still building my
                professional experience, I&apos;ve channeled my energy into creating impactful projects
                and taking on leadership roles in tech communities.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I specialize in <span className="font-medium text-foreground">web development</span> and
                have a growing interest in <span className="font-medium text-foreground">data analysis</span> and
                <span className="font-medium text-foreground"> quantum computing</span>. I believe in learning by doing,
                which is why I&apos;m always working on projects that challenge me to grow.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Beyond coding, I actively contribute to college clubs and events, developing my teamwork
                and leadership abilities. I&apos;m a quick learner who thrives in collaborative environments.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="code-block mt-8">
                <pre className="whitespace-pre-wrap break-words text-xs sm:text-sm">
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

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:mt-20 md:grid-cols-4" staggerDelay={0.1}>
          {stats.map(({ icon: Icon, value, label }) => (
            <StaggerItem key={label}>
              <motion.div
                className="rounded-xl border border-border bg-card p-4 text-center sm:p-6"
                whileHover={{ y: -5, borderColor: "hsl(var(--primary) / 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="mx-auto mb-3 h-7 w-7 text-primary sm:mb-4 sm:h-8 sm:w-8" />
                <p className="mb-1 text-2xl font-bold text-gradient sm:text-3xl">{value}</p>
                <p className="text-xs text-muted-foreground sm:text-sm">{label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
