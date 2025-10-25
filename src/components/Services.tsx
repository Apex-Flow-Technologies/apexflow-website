import { useEffect, useRef, useState } from "react";
import { Bot, Cable, Code, Zap, Shield, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: Bot,
    title: "Bot & Automation Solutions",
    description:
      "Stop wasting time on repetitive manual tasks. We build automation bots that handle data entry, report generation, and daily workflows, freeing your team to focus on growth.",
    features: ["Time-saving automation", "Error reduction", "24/7 operation"],
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Cable,
    title: "System Interfacing",
    description:
      "Make your software talk to each other. We connect your most critical tools—like Tally, Zoho, Excel, and more—to create a single, seamless workflow. No more copy-pasting.",
    features: ["Seamless integration", "Real-time sync", "Unified dashboard"],
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "When off-the-shelf software doesn't fit, we build what you need. From internal dashboards to customer portals, we create custom applications built perfectly for your business.",
    features: ["Tailored solutions", "Scalable architecture", "Modern tech stack"],
    color: "from-orange-500 to-red-600"
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      whileHover={{ 
        y: -15, 
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="perspective-1000"
    >
      <Card className="h-full transform-style-3d backface-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative overflow-hidden group">
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Floating particles on hover */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
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
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </div>
        )}
        
        <CardHeader className="relative z-10">
          <motion.div 
            className="mb-6 inline-flex p-6 rounded-3xl bg-gradient-to-br shadow-lg group-hover:shadow-xl transition-all duration-500"
            style={{ background: `linear-gradient(135deg, ${service.color.split(' ')[0]}, ${service.color.split(' ')[2]})` }}
            whileHover={{ 
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }}
            transition={{ duration: 0.5 }}
          >
            <service.icon className="h-10 w-10 text-white" />
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {service.title}
          </motion.h3>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <p className="text-muted-foreground leading-relaxed mb-6">
            {service.description}
          </p>
          
          {/* Feature list */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {service.features.map((feature, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: isHovered ? 0 : -10, opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <motion.div
                  animate={{ 
                    scale: isHovered ? [1, 1.2, 1] : 1,
                    rotate: isHovered ? 360 : 0
                  }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-sm text-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Hover action button */}
          <motion.div
            className="mt-6 pt-4 border-t border-border/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            <button className="text-primary font-medium text-sm hover:text-primary-glow transition-colors flex items-center gap-2">
              Learn more
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="w-4 h-4" />
              </motion.div>
            </button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl float-animation" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      
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
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium gradient-text">Our Core Services</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Your Business,
            </span>
            <span className="block bg-gradient-to-r from-accent via-primary-glow to-primary bg-clip-text text-transparent">
              Unlocked.
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            You don't need enterprise-level budgets to get enterprise-level efficiency. 
            We focus on <span className="gradient-text font-semibold">practical solutions</span> that solve your biggest headaches.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
