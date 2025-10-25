import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Rocket, Target, Lightbulb, TrendingUp, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "ApexService Flow",
    subtitle: "Internal Tool",
    tags: ["Custom Software", "Workflow Automation"],
    summary:
      "We built a custom internal service flow manager to streamline our own client project tracking, from initial consultation to final delivery and support.",
    challenge:
      "As we grew, managing client requests via email and spreadsheets became chaotic, leading to missed deadlines and inefficient communication.",
    solution:
      "We developed a custom web application that acts as a central hub for all client projects. It includes modules for ticketing, progress tracking, time logging, and automated client updates.",
    result:
      "A 40% reduction in time spent on project administration, improved team collaboration, and a transparent, professional experience for our clients.",
    metrics: ["40% Time Saved", "100% Transparency", "24/7 Access"],
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Leo Club Membership Portal",
    subtitle: "The Leo Club",
    tags: ["Custom Development", "System Interfacing"],
    summary:
      "A custom portal to manage member registrations, event sign-ups, and communication for a local community organization.",
    challenge:
      "The club was managing its growing membership list manually using Excel, leading to data errors and difficulty in communicating with members.",
    solution:
      "We designed and built a secure, mobile-friendly membership portal. The system allows new members to sign up and pay online, and integrates with an email service to automate newsletters and event reminders.",
    result:
      "A 90% reduction in administrative overhead, accurate membership data, and a 50% increase in member engagement for events.",
    metrics: ["90% Efficiency", "50% Engagement", "Zero Errors"],
    color: "from-green-500 to-teal-600"
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="perspective-1000"
    >
      <Card className="transform-style-3d backface-hidden border-border/50 glass-morphism hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative overflow-hidden group">
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Floating particles on hover */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                initial={{ 
                  x: Math.random() * 100, 
                  y: Math.random() * 100,
                  opacity: 0
                }}
                animate={{ 
                  x: Math.random() * 100, 
                  y: Math.random() * 100,
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 0.3 
                }}
              />
            ))}
          </div>
        )}
        
        <CardHeader className="relative z-10">
          <motion.div 
            className="flex items-start justify-between mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-2">
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="w-3 h-3" />
                {project.subtitle}
              </motion.div>
              
              <motion.h3 
                className="text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {project.title}
              </motion.h3>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-primary" />
            </motion.button>
          </motion.div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <motion.div
                key={tagIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.3 + tagIndex * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="secondary" className="text-sm px-3 py-1 glass-morphism">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.3 + 0.3 }}
          >
            {project.summary}
          </motion.p>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
          >
            {/* Challenge */}
            <motion.div 
              className="group"
              whileHover={{ x: 5 }}
            >
              <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-3">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Target className="h-5 w-5 text-red-500" />
                </motion.div>
                The Challenge
              </h4>
              <p className="text-muted-foreground leading-relaxed pl-8 border-l-2 border-red-500/20">
                {project.challenge}
              </p>
            </motion.div>
            
            {/* Solution */}
            <motion.div 
              className="group"
              whileHover={{ x: 5 }}
            >
              <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-3">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                </motion.div>
                The Solution
              </h4>
              <p className="text-muted-foreground leading-relaxed pl-8 border-l-2 border-yellow-500/20">
                {project.solution}
              </p>
            </motion.div>
            
            {/* Result */}
            <motion.div 
              className="group"
              whileHover={{ x: 5 }}
            >
              <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-3">
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </motion.div>
                The Result
              </h4>
              <p className="text-muted-foreground leading-relaxed pl-8 border-l-2 border-green-500/20 mb-4">
                {project.result}
              </p>
              
              {/* Metrics */}
              <motion.div 
                className="flex flex-wrap gap-3 pl-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                {project.metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.3 + 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-medium text-sm"
                  >
                    <TrendingUp className="w-3 h-3 inline mr-1" />
                    {metric}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-60 left-40 w-64 h-64 bg-primary/15 rounded-full filter blur-3xl float-animation" />
      <div className="absolute bottom-60 right-40 w-80 h-80 bg-accent/15 rounded-full filter blur-3xl float-animation" style={{ animationDelay: '2.5s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium gradient-text">Success Stories</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Real Problems,
            </span>
            <span className="block bg-gradient-to-r from-accent via-primary-glow to-primary bg-clip-text text-transparent">
              Practical Solutions.
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            We're proud of the work we do. Here are a few examples of how we've helped businesses streamline, automate, and grow.
          </motion.p>
        </motion.div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-morphism hover-lift cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text font-semibold">Ready to start your success story?</span>
            <Rocket className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
