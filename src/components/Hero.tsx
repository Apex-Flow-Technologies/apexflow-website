import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl float-animation" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/50 to-background/80" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium gradient-text">AI-Powered IT Solutions</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-pulse">
              Stop Patching,
            </span>
            <span className="block bg-gradient-to-r from-accent via-primary-glow to-primary bg-clip-text text-transparent animate-pulse" style={{ animationDelay: '0.5s' }}>
              Start Scaling.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your business with cutting-edge automation, system integration, and custom software solutions. 
            <span className="gradient-text font-semibold"> Fast, smart, and affordable.</span>
          </motion.p>
          
          {/* Feature pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Zap, text: "Lightning Fast" },
              { icon: Shield, text: "Secure & Reliable" },
              { icon: Sparkles, text: "AI-Enhanced" }
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-morphism hover-lift cursor-default"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="group text-lg px-10 py-8 bg-gradient-to-r from-primary to-primary-glow hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Request a Free Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#services")}
              className="text-lg px-10 py-8 border-2 hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 glass-morphism"
            >
              See Our Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("#services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary hover:text-primary-glow transition-colors"
        aria-label="Scroll down"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};
