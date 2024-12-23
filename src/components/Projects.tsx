import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Real-time analytics platform using machine learning for predictive insights.",
    technologies: ["Python", "React", "TensorFlow", "AWS"],
    github: "#",
    demo: "#",
  },
  {
    title: "NLP Research Framework",
    description: "Open-source framework for natural language processing research.",
    technologies: ["PyTorch", "FastAPI", "Docker", "Redis"],
    github: "#",
    demo: "#",
  },
  {
    title: "Computer Vision Pipeline",
    description: "Automated visual inspection system for manufacturing.",
    technologies: ["OpenCV", "PyTorch", "CUDA", "C++"],
    github: "#",
    demo: "#",
  },
  {
    title: "MLOps Platform",
    description: "End-to-end platform for ML model deployment and monitoring.",
    technologies: ["Kubernetes", "TensorFlow", "Prometheus", "Python"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Research Assistant",
    description: "Intelligent system for automating literature review and research synthesis.",
    technologies: ["BERT", "Transformers", "Python", "ElasticSearch"],
    github: "#",
    demo: "#",
  }
];

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="min-h-screen flex items-center snap-start relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-accent/5 rounded-full blur-3xl rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        
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
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="p-6 card-hover snap-center flex-shrink-0 bg-gradient-to-br from-background to-muted/50 border border-primary/10 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                  <div className="flex flex-col space-y-4 relative z-10">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-foreground/70 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.github} className="text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={project.demo} className="text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
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

export default Projects;
