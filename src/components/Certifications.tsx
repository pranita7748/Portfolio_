import { Award, ExternalLink } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Quantum Business Foundation",
    issuer: "IBM",
    description: "Strategic overview of quantum business models, industry use cases, and quantum readiness.",
    date: "2025",
    link: "https://www.credly.com/badges/142bdf6c-3b6d-4dc0-af85-3b924d0a9c3d/linked_in_profile",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Spoken Tutorial of RDBMS PostgreSQL Training",
    issuer: "EduPyramids, SINE, IIT Bombay",
    description: "Practical guide to relational database design, SQL querying, and PostgreSQL administration.",
    date: "2025",
    link: "https://www.linkedin.com/in/pranita-patil-0685762a8/details/certifications/",
    color: "from-green-500/20 to-cyan-500/20",
  },
  {
    title: "Digital Marketing",
    issuer: "Google Digital Garage",
    description: "Foundational insights into SEO, SEM, social media strategy, and data-driven marketing analytics.",
    date: "2023",
    link: "https://www.linkedin.com/in/pranita-patil-0685762a8/details/certifications/",
    color: "from-primary/20 to-pink-500/20",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-secondary/30 relative">
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <AnimatedSection>
          <p className="font-mono text-primary text-sm mb-2">04. Certifications</p>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Credentials & Learning
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Certifications that validate my continuous learning journey and commitment to skill development.
          </p>
        </AnimatedSection>

        {/* Certifications Grid */}
        <StaggerContainer className="mt-10 grid gap-4 sm:gap-6 md:mt-12 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.15}>
          {certifications.map((cert) => (
            <StaggerItem key={cert.title}>
              <motion.div
                className={`group relative h-full overflow-hidden rounded-xl border border-border bg-gradient-to-br ${cert.color} p-4 sm:p-6`}
                whileHover={{ 
                  y: -5, 
                  borderColor: "hsl(var(--primary) / 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4">
                    <Award size={80} strokeWidth={0.5} className="text-primary" />
                  </div>
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="rounded-lg border border-border bg-card p-2">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{cert.date}</span>
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-base font-semibold transition-colors group-hover:text-primary sm:text-lg">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-mono text-primary/80 mb-3">{cert.issuer}</p>
                  <p className="mb-4 text-sm text-muted-foreground">{cert.description}</p>

                  {/* Link */}
                  <motion.a
                    href={cert.link}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Certificate
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
