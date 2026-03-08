import { Users, Calendar, Lightbulb, Mic2, TrendingUp } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const activities = [
  {
  role: "Co-Chief Ambassador",
  organization: "Students Training & Placement Committee",
  description: "Representing the student body and supporting the Training & Placement activities. Coordinating between students and the placement cell, assisting in organizing placement drives, and ensuring smooth communication.",
  icon: Users,
  highlights: ["Student Coordination", "Placement Support", "Leadership"],
  period: "2026 - Present"
},
{
  role: "Co-Treasurer",
  organization: "DESOC (Design & Entrepreneurship Society)",
  description: "Started as a member of the Ideation Team and later promoted to Co-Treasurer. Responsible for managing club finances, supporting event planning, and contributing to creative ideation and execution of design and entrepreneurship initiatives.",
  icon: TrendingUp,
  highlights: ["Financial Management", "Ideation & Strategy", "Event Planning"],
  period: "2025 - Present"
},
 
  {
    role: "Editorial & EPM Team Member",
    organization: "TEDxKKWIEER",
    description: "Contributing to content creation, event documentation, and promotional materials for TEDx events at our institution.",
    icon: Mic2,
    highlights: ["Content Writing", "Event Documentation", "Team Collaboration"],
    period: "2026 - Present",
  },

   {
    role: "Event Management Team",
    organization: "FOSS Club",
    description: "Organizing open-source events, hackathons, and technical workshops. Promoting free and open-source software culture on campus.",
    icon: Calendar,
    highlights: ["Workshop Coordination", "Community Building"],
    period: "2025 - 2026",
  },
  {
  role: "Participants Affairs Team Member",
  organization: "INNOVERA Hackathon 1st Edition",
  description: "Handled participant coordination during the hackathon, assisting with registrations, communication, and on-ground support to ensure a smooth experience for all participants.",
  icon: Users,
  highlights: ["Participant Coordination", "Event Support", "Communication"],
  period: "2025"
}
];

const skills = [
  { name: "Leadership", icon: Users },
  { name: "Event Management", icon: Calendar },
  { name: "Problem Solving", icon: Lightbulb },
];

export const Leadership = () => {
  return (
    <section id="leadership" className="section-padding relative">
      <div className="container-narrow">
        {/* Section Header */}
        <AnimatedSection>
          <p className="font-mono text-primary text-sm mb-2">05. Leadership & Activities</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Beyond the Classroom
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Active participation in college clubs and organizations has shaped my leadership skills, 
            teamwork abilities, and understanding of collaborative project management.
          </p>
        </AnimatedSection>

        {/* Skills Tags */}
        <AnimatedSection delay={0.2} className="mt-8 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <skill.icon size={16} className="text-primary" />
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Activities Timeline */}
        <StaggerContainer className="space-y-8 mt-12" staggerDelay={0.2}>
          {activities.map((activity, index) => (
            <StaggerItem key={activity.role + activity.organization}>
              <motion.div
                className="relative pl-8 md:pl-12"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-0 top-6 w-3 h-3 -translate-x-1/2 rounded-full bg-primary border-4 border-background"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                />

                {/* Card */}
                <motion.div 
                  className="p-6 rounded-xl bg-card border border-border"
                  whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <activity.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{activity.role}</h3>
                        <p className="text-sm font-mono text-primary">{activity.organization}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {activity.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">{activity.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {activity.highlights.map((highlight) => (
                      <span 
                        key={highlight}
                        className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Growth Note */}
        <AnimatedSection className="mt-12 text-center">
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30"
            whileHover={{ scale: 1.02 }}
          >
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm">Continuously growing through collaboration and responsibility</span>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
