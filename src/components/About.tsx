import { useEffect, useRef, useState } from "react";
import { Target, DollarSign, Rocket, Users, TrendingUp, Award, Globe, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Hyper-Local Focus",
    description:
      "We're not a faceless corporation. We're part of your community, and we understand the unique challenges SMEs face.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: DollarSign,
    title: "Practical & Affordable",
    description:
      "Our goal is to provide a clear return on your investment. We build solutions that solve problems and save money, not create new ones.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Rocket,
    title: "Faster, Smarter Digital",
    description:
      "We move quickly to get your digital tools up and running, so you can start seeing the benefits immediately.",
    color: "from-purple-500 to-pink-600"
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Businesses Transformed", color: "text-blue-500" },
  { icon: TrendingUp, value: "95%", label: "Client Satisfaction", color: "text-green-500" },
  { icon: Award, value: "50+", label: "Custom Solutions", color: "text-purple-500" },
  { icon: Globe, value: "24/7", label: "Support Available", color: "text-orange-500" },
];

const AnimatedStatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const targetValue = parseInt(stat.value.replace(/\D/g, ''));
      const duration = 2000;
      const increment = targetValue / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          current = targetValue;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05, 
        rotateX: 10,
        transition: { duration: 0.3 }
      }}
      className="perspective-1000"
    >
      <Card className="text-center p-8 glass-morphism border-border/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform-style-3d backface-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: index * 0.5,
            ease: "easeInOut"
          }}
          className="mb-4 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20"
        >
          <stat.icon className={`h-8 w-8 ${stat.color}`} />
        </motion.div>
        
        <motion.div 
          className="text-4xl font-bold gradient-text mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
        >
          {stat.value.includes('%') || stat.value.includes('+') || stat.value.includes('/') 
            ? stat.value 
            : count + stat.value.replace(/\d/g, '')
          }
        </motion.div>
        
        <p className="text-muted-foreground font-medium">{stat.label}</p>
      </Card>
    </motion.div>
  );
};

const ValueCard = ({ value, index }: { value: typeof values[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      whileHover={{ 
        y: -10, 
        scale: 1.03,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="perspective-1000"
    >
      <Card className="h-full transform-style-3d backface-hidden border-border/50 glass-morphism hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative overflow-hidden group">
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        <CardHeader className="relative z-10">
          <motion.div 
            className="mb-6 inline-flex p-6 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500"
            style={{ background: `linear-gradient(135deg, ${value.color.split(' ')[0]}, ${value.color.split(' ')[2]})` }}
            whileHover={{ 
              rotate: [0, -15, 15, 0],
              scale: 1.1
            }}
            transition={{ duration: 0.6 }}
          >
            <value.icon className="h-10 w-10 text-white" />
          </motion.div>
          
          <motion.h4 
            className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {value.title}
          </motion.h4>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <motion.p 
            className="text-muted-foreground leading-relaxed"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {value.description}
          </motion.p>
          
          {/* Hover indicator */}
          <motion.div
            className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: -10 }}
            animate={{ x: isHovered ? 0 : -10 }}
          >
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-medium">Learn more</span>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"
        style={{ y: backgroundY }}
      />
      <div className="absolute top-40 right-20 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl float-animation" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl float-animation" style={{ animationDelay: '3s' }} />
      
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
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium gradient-text">About ApexFlow</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            We're{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              ApexFlow
            </span>
            .{" "}
            <br />
            <span className="text-foreground">Your Local Partner in Digital Growth.</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            We started ApexFlow Technologies with a simple mission: to give small and medium enterprises the same digital advantages as the big players, without the complexity or the cost.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedStatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          className="max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="glass-morphism border-border/50 overflow-hidden">
            <motion.div
              className="h-2 bg-gradient-to-r from-primary via-primary-glow to-accent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              style={{ originX: 0 }}
            />
            <CardHeader className="pb-4">
              <motion.h3 
                className="text-3xl lg:text-4xl font-bold gradient-text"
                whileHover={{ scale: 1.02 }}
              >
                Our Story
              </motion.h3>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                As a hyper-local IT provider, we saw too many brilliant local businesses and startups struggling with outdated systems and manual processes. They were told that real automation or custom software was "too expensive" or "too complicated."
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-2xl font-semibold text-primary text-center"
              >
                We knew there was a better way.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                ApexFlow was founded on the principle of practical innovation. We don't sell you tech you don't need. We listen to your challenges—whether it's a messy Excel sheet, a Tally system that doesn't connect to your CRM, or a workflow that wastes hours every day—and we build simple, smart, and affordable solutions to fix them.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.h3 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
            whileHover={{ scale: 1.02 }}
          >
            What Makes <span className="gradient-text">ApexFlow</span> Different
          </motion.h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
