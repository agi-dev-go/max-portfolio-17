import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

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
  },
  {
    title: "Research Assistant",
    company: "University AI Lab",
    period: "2012 - 2014",
    description: "Conducted foundational research in machine learning algorithms.",
    technologies: ["Python", "MATLAB", "Neural Networks", "Statistical Analysis"],
  }
];

const Experience = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="min-h-screen flex items-center bg-muted/50 snap-start relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background cursor-pointer"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <ScrollArea className="w-full">
            <div 
              ref={scrollContainerRef}
              className="flex gap-8 p-4 pb-8 overflow-x-auto snap-x snap-mandatory"
            >
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className="p-6 card-hover snap-center flex-shrink-0 bg-gradient-to-br from-background to-muted/50 border border-primary/10 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                  <div className="flex flex-col space-y-4 relative z-10">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-foreground/60">{exp.company}</p>
                    </div>
                    <span className="text-sm text-foreground/60">{exp.period}</span>
                    <p className="flex-grow">{exp.description}</p>
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

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background cursor-pointer"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
