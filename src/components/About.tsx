import { useEffect, useRef } from "react";
import { Target, DollarSign, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Hyper-Local Focus",
    description:
      "We're not a faceless corporation. We're part of your community, and we understand the unique challenges SMEs face.",
  },
  {
    icon: DollarSign,
    title: "Practical & Affordable",
    description:
      "Our goal is to provide a clear return on your investment. We build solutions that solve problems and save money, not create new ones.",
  },
  {
    icon: Rocket,
    title: "Faster, Smarter Digital",
    description:
      "We move quickly to get your digital tools up and running, so you can start seeing the benefits immediately.",
  },
];

export const About = () => {
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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            We're <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">ApexFlow</span>. Your Local Partner in Digital Growth.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We started ApexFlow Technologies with a simple mission: to give small and medium enterprises the same digital advantages as the big players, without the complexity or the cost.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20 animate-on-scroll animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <Card className="border-border/50">
            <CardHeader>
              <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                As a hyper-local IT provider, we saw too many brilliant local businesses and startups struggling with outdated systems and manual processes. They were told that real automation or custom software was "too expensive" or "too complicated."
              </p>
              <p>
                We knew there was a better way.
              </p>
              <p>
                ApexFlow was founded on the principle of practical innovation. We don't sell you tech you don't need. We listen to your challenges—whether it's a messy Excel sheet, a Tally system that doesn't connect to your CRM, or a workflow that wastes hours every day—and we build simple, smart, and affordable solutions to fix them.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12 text-center animate-on-scroll animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
            What Makes ApexFlow Different
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={index}
              className="animate-on-scroll group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${(index + 6) * 150}ms` }}
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 group-hover:from-primary/30 group-hover:to-primary-glow/30 transition-all duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h4>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
