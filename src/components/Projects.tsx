import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from './SectionHeader';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Real-time analytics platform using machine learning for predictive insights.",
    technologies: ["Python", "React", "TensorFlow", "AWS"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=200",
  },
  {
    title: "NLP Research Framework",
    description: "Open-source framework for natural language processing research.",
    technologies: ["PyTorch", "FastAPI", "Docker", "Redis"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=300&h=200",
  },
  {
    title: "Computer Vision Pipeline",
    description: "Automated visual inspection system for manufacturing.",
    technologies: ["OpenCV", "PyTorch", "CUDA", "C++"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=300&h=200",
  },
  {
    title: "MLOps Platform",
    description: "End-to-end platform for ML model deployment and monitoring.",
    technologies: ["Kubernetes", "TensorFlow", "Prometheus", "Python"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=200",
  },
  {
    title: "AI Research Assistant",
    description: "Intelligent system for automating literature review and research synthesis.",
    technologies: ["BERT", "Transformers", "Python", "ElasticSearch"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200",
  }
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 750) setItemsPerPage(1);
      else if (width < 1500) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  useEffect(() => {
    setCurrentPage(0)
  }, [itemsPerPage]);
  
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePageChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(curr => curr - 1);
    } else if (direction === 'next' && currentPage < totalPages - 1) {
      setCurrentPage(curr => curr + 1);
    }
  };

  const visibleProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="projects" className="min-h-screen flex items-center snap-start relative bg-gradient-to-br from-background to-muted">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <h2 className="text-3xl font-bold mb-12 text-center"><SectionHeader title="Featured Projects"/></h2>
        
        <div className="relative flex flex-col items-center">
          <div className="flex justify-center gap-8 mb-8 transition-all duration-300 ease-in-out">
            {visibleProjects.map((project, index) => (
              <Card 
                key={index} 
                className="p-6 w-[300px] sm:w-[350px] h-[500px] flex-shrink-0 bg-card border border-primary/10 relative group hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                <div className="flex flex-col h-full space-y-4 relative z-10">
                  <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-card shadow-lg hover:bg-accent cursor-pointer disabled:opacity-50"
              onClick={() => handlePageChange('prev')}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-card shadow-lg hover:bg-accent cursor-pointer disabled:opacity-50"
              onClick={() => handlePageChange('next')}
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
