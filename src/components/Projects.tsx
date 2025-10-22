import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

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
  },
];

export const Projects = () => {
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

    const cards = sectionRef.current?.querySelectorAll(".project-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Real Problems, Practical Solutions.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're proud of the work we do. Here are a few examples of how we've helped businesses streamline, automate, and grow.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg text-primary font-medium">{project.subtitle}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-destructive" />
                    The Challenge
                  </h4>
                  <p className="text-muted-foreground leading-relaxed pl-3">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-accent" />
                    The Solution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed pl-3">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    The Result
                  </h4>
                  <p className="text-muted-foreground leading-relaxed pl-3">
                    {project.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
