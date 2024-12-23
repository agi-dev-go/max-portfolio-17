import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

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
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center snap-start">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
          <div className="flex gap-8 p-4">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="p-6 card-hover min-w-[300px] md:min-w-[400px] animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-semibold whitespace-normal">{project.title}</h3>
                  <p className="text-foreground/70 whitespace-normal">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-foreground/60 hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={project.demo} className="text-foreground/60 hover:text-primary transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
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

export default Projects;