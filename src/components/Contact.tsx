import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Send, Phone, MapPin, Clock, Zap, MessageCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "contact@apexflow.tech",
    href: "mailto:contact@apexflow.tech",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Linkedin,
    title: "Connect on LinkedIn",
    content: "Follow us on LinkedIn",
    href: "https://linkedin.com",
    color: "from-purple-500 to-pink-600"
  },
];

const ContactInfoCard = ({ info, index }: { info: typeof contactInfo[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50, rotateY: 15 }}
      animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
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
      <Card className="transform-style-3d backface-hidden border-border/50 glass-morphism hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative overflow-hidden group">
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        <CardContent className="pt-8 relative z-10">
          <motion.div 
            className="flex items-start gap-4"
            whileHover={{ x: 5 }}
          >
            <motion.div
              className={`p-4 rounded-2xl bg-gradient-to-br ${info.color} shadow-lg group-hover:shadow-xl transition-all duration-500`}
              whileHover={{ 
                rotate: [0, -10, 10, 0],
                scale: 1.1
              }}
              transition={{ duration: 0.6 }}
            >
              <info.icon className="h-6 w-6 text-white" />
            </motion.div>
            
            <div className="flex-1">
              <motion.h3 
                className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
                whileHover={{ x: 3 }}
              >
                {info.title}
              </motion.h3>
              <motion.a
                href={info.href}
                className="text-primary hover:text-primary-glow transition-colors flex items-center gap-2 group"
                whileHover={{ x: 5 }}
              >
                {info.content}
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast.success("Message sent! We'll get back to you soon.");
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl float-animation" />
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
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium gradient-text">Get In Touch</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Let's Talk About
            </span>
            <span className="block text-foreground">Your Project.</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            We're here to help. Whether you have a clear idea or just want to explore possibilities, 
            reach out for a <span className="gradient-text font-semibold">no-pressure consultation</span>.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="perspective-1000"
          >
            <Card className="transform-style-3d backface-hidden border-border/50 glass-morphism hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <CardContent className="pt-8">
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Your Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="w-full glass-morphism border-border/50 focus:border-primary transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Your Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      className="w-full glass-morphism border-border/50 focus:border-primary transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Your Phone Number (Optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                      className="w-full glass-morphism border-border/50 focus:border-primary transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us a bit about your business and your challenges..."
                      required
                      rows={5}
                      className="w-full glass-morphism border-border/50 focus:border-primary transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-105 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Clock className="h-5 w-5" />
                            </motion.div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <motion.div
                              animate={{ x: isSubmitting ? 0 : 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Send className="h-5 w-5" />
                            </motion.div>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Button>
                  </motion.div>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <ContactInfoCard key={index} info={info} index={index} />
            ))}
            
            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Card className="glass-morphism border-primary/20 overflow-hidden relative group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <CardContent className="pt-8 relative z-10">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold gradient-text mb-4">
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Don't let outdated systems hold you back. Let's build something practical, affordable, and perfectly suited to your needs.
                    </p>
                    <motion.div
                      className="flex items-center gap-2 text-primary font-medium cursor-pointer"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Start your transformation</span>
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
