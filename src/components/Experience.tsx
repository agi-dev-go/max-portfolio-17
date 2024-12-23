import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = Math.floor((window.innerWidth - 200) / 400); // Approximate number of items that fit
  const totalPages = Math.ceil(experiences.length / itemsPerPage);

  const handlePageChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(curr => curr - 1);
    } else if (direction === 'next' && currentPage < totalPages - 1) {
      setCurrentPage(curr => curr + 1);
    }
  };

  const visibleExperiences = experiences.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background cursor-pointer disabled:opacity-50"
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="flex gap-8 transition-all duration-300 ease-in-out">
            {visibleExperiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-6 w-[400px] h-[400px] flex-shrink-0 bg-gradient-to-br from-background to-muted/50 border border-primary/10 relative group hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                <div className="flex flex-col h-full space-y-4 relative z-10">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-foreground/60">{exp.company}</p>
                  </div>
                  <span className="text-sm text-foreground/60">{exp.period}</span>
                  <p className="flex-grow">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background cursor-pointer disabled:opacity-50"
            onClick={() => handlePageChange('next')}
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;