import { useEffect, useRef } from "react";
import { Bot, Cable, Code } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  {
    icon: Bot,
    title: "Bot & Automation Solutions",
    description:
      "Stop wasting time on repetitive manual tasks. We build automation bots that handle data entry, report generation, and daily workflows, freeing your team to focus on growth.",
  },
  {
    icon: Cable,
    title: "System Interfacing",
    description:
      "Make your software talk to each other. We connect your most critical tools—like Tally, Zoho, Excel, and more—to create a single, seamless workflow. No more copy-pasting.",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "When off-the-shelf software doesn't fit, we build what you need. From internal dashboards to customer portals, we create custom applications built perfectly for your business.",
  },
];

export const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".service-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Your Business, Unlocked.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You don't need enterprise-level budgets to get enterprise-level efficiency. We focus on practical solutions that solve your biggest headaches.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 group-hover:from-primary/30 group-hover:to-primary-glow/30 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
