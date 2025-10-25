import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp, Zap, Globe } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Automation Solutions", href: "#services" },
      { name: "System Integration", href: "#services" },
      { name: "Custom Development", href: "#services" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ]
  },
  {
    title: "Connect",
    links: [
      { name: "contact@apexflow.tech", href: "mailto:contact@apexflow.tech", icon: Mail },
      { name: "+1 (555) 123-4567", href: "tel:+15551234567", icon: Phone },
      { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    ]
  }
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@apexflow.tech", label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-muted/30 border-t border-border">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center"
              >
                <Zap className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-2xl font-bold gradient-text">ApexFlow</span>
            </motion.div>
            
            <motion.p 
              className="text-muted-foreground leading-relaxed"
              whileHover={{ scale: 1.02 }}
            >
              Practical IT Solutions for SMEs. We help small and medium businesses transform their operations with smart, affordable technology.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-3 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 15,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary-glow transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-lg font-semibold text-foreground"
                whileHover={{ x: 5 }}
              >
                {section.title}
              </motion.h3>
              
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      {link.icon && (
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: linkIndex * 0.5 }}
                        >
                          <link.icon className="w-4 h-4" />
                        </motion.div>
                      )}
                      <span className="group-hover:gradient-text">{link.name}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-border/50 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div 
              className="text-sm text-muted-foreground text-center md:text-left"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} ApexFlow Technologies. All rights reserved.
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#"
                className="hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Terms of Service
              </motion.a>
            </motion.div>
            
            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 180,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gradient-to-r from-primary to-primary-glow text-white shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
