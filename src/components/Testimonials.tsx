import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Users, TrendingUp, Award } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "ApexFlow automated our entire invoicing process by linking Tally to our CRM. It's saved us at least 10 hours a week. As a small business, that's game-changing.",
    author: "John D.",
    role: "Owner, Local Business",
    rating: 5,
    company: "Retail Solutions Inc.",
    color: "from-blue-500 to-purple-600"
  },
  {
    quote:
      "We needed a custom tool for our unique inventory, and the ApexFlow team built it faster and more affordably than we thought possible. They understood our problem perfectly.",
    author: "Sarah L.",
    role: "Operations Manager, Startup",
    rating: 5,
    company: "Tech Innovations",
    color: "from-green-500 to-teal-600"
  },
  {
    quote:
      "The automation bots they created for our daily reporting have eliminated human error completely. Our team can now focus on strategic work instead of repetitive tasks.",
    author: "Michael R.",
    role: "CEO, Manufacturing Firm",
    rating: 5,
    company: "Precision Manufacturing",
    color: "from-orange-500 to-red-600"
  },
];

const TestimonialCard = ({ testimonial, index, isActive }: { 
  testimonial: typeof testimonials[0]; 
  index: number; 
  isActive: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateY: -45, scale: 0.8 }}
      animate={isInView ? { 
        opacity: isActive ? 1 : 0.7, 
        rotateY: isActive ? 0 : -15, 
        scale: isActive ? 1 : 0.95,
        z: isActive ? 50 : 0
      } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05, 
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="perspective-1000"
    >
      <Card className={`transform-style-3d backface-hidden border-border/50 glass-morphism hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative overflow-hidden group ${
        isActive ? 'ring-2 ring-primary/50' : ''
      }`}>
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Floating particles on hover */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
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
                  duration: 2.5, 
                  repeat: Infinity, 
                  delay: i * 0.4 
                }}
              />
            ))}
          </div>
        )}
        
        <CardContent className="pt-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          >
            {/* Rating stars */}
            <motion.div 
              className="flex items-center gap-1 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            >
              {[...Array(testimonial.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Quote icon */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, rotate: -15 }}
              animate={isInView ? { opacity: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
            >
              <Quote className={`h-12 w-12 bg-gradient-to-br ${testimonial.color} bg-clip-text text-transparent`} />
            </motion.div>
            
            {/* Quote text */}
            <motion.p 
              className="text-lg text-foreground mb-6 leading-relaxed italic"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
            >
              "{testimonial.quote}"
            </motion.p>
            
            {/* Author info */}
            <motion.div 
              className="border-t border-border/50 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <motion.p 
                    className="font-semibold text-foreground"
                    whileHover={{ x: 5 }}
                  >
                    {testimonial.author}
                  </motion.p>
                  <motion.p 
                    className="text-sm text-muted-foreground"
                    whileHover={{ x: 3 }}
                  >
                    {testimonial.role}
                  </motion.p>
                  <motion.p 
                    className="text-xs text-primary font-medium"
                    whileHover={{ x: 3 }}
                  >
                    {testimonial.company}
                  </motion.p>
                </div>
                
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className={`p-2 rounded-lg bg-gradient-to-br ${testimonial.color} bg-opacity-10`}
                >
                  <Users className="w-5 h-5 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-40 left-20 w-64 h-64 bg-primary/15 rounded-full filter blur-3xl float-animation" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent/15 rounded-full filter blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      
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
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium gradient-text">Client Success Stories</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Don't Just Take
            </span>
            <span className="block text-foreground">Our Word For It.</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            Hear from businesses that have transformed their operations with our practical, affordable solutions.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Side cards */}
            {testimonials.map((testimonial, index) => (
              index !== activeIndex && (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  index={index}
                  isActive={false}
                />
              )
            ))}
            
            {/* Active card */}
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={activeIndex}
                testimonial={testimonials[activeIndex]}
                index={activeIndex}
                isActive={true}
              />
            </AnimatePresence>
          </div>
          
          {/* Carousel indicators */}
          <motion.div 
            className="flex justify-center items-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { icon: Users, value: "500+", label: "Happy Clients" },
              { icon: TrendingUp, value: "95%", label: "Success Rate" },
              { icon: Award, value: "50+", label: "Projects Completed" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary-glow/20 mb-3"
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
