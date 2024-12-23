import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const experiences = [
  {
    title: "Lead AI Engineer",
    company: "Tech Innovation Corp",
    period: "2021 - Present",
    description: "Leading a team of ML engineers in developing cutting-edge AI solutions.",
    technologies: ["PyTorch", "TensorFlow", "AWS", "MLOps"],
  },
  {
    title: "Senior ML Engineer",
    company: "AI Solutions Inc",
    period: "2018 - 2021",
    description: "Architected and deployed large-scale machine learning systems.",
    technologies: ["Python", "Kubernetes", "Docker", "GCP"],
  },
  {
    title: "ML Research Engineer",
    company: "AI Research Lab",
    period: "2016 - 2018",
    description: "Conducted research in natural language processing and computer vision.",
    technologies: ["PyTorch", "BERT", "Computer Vision", "NLP"],
  },
  {
    title: "Data Scientist",
    company: "Data Analytics Co",
    period: "2014 - 2016",
    description: "Developed predictive models for business intelligence.",
    technologies: ["Scikit-learn", "Pandas", "SQL", "R"],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center bg-muted/50 snap-start">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-lg" orientation="horizontal">
          <div className="flex gap-8 p-4 min-w-max">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-6 card-hover min-w-[300px] md:min-w-[400px] animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold whitespace-normal">{exp.title}</h3>
                    <p className="text-foreground/60">{exp.company}</p>
                  </div>
                  <span className="text-sm text-foreground/60">{exp.period}</span>
                  <p className="whitespace-normal">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default Experience;