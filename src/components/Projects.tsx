import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 card-hover">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;