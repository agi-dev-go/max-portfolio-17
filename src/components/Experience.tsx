import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    title: "Lead AI Engineer",
    company: "Tech Innovation Corp",
    period: "2021 - Present",
    description: "Leading a team of ML engineers in developing cutting-edge AI solutions.",
    technologies: ["PyTorch", "TensorFlow", "AWS", "MLOps"],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=300&h=200",
  },
  {
    title: "Senior ML Engineer",
    company: "AI Solutions Inc",
    period: "2018 - 2021",
    description: "Architected and deployed large-scale machine learning systems.",
    technologies: ["Python", "Kubernetes", "Docker", "GCP"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=200",
  },
  {
    title: "ML Research Engineer",
    company: "AI Research Lab",
    period: "2016 - 2018",
    description: "Conducted research in natural language processing and computer vision.",
    technologies: ["PyTorch", "BERT", "Computer Vision", "NLP"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200",
  },
  {
    title: "Data Scientist",
    company: "Data Analytics Co",
    period: "2014 - 2016",
    description: "Developed predictive models for business intelligence.",
    technologies: ["Scikit-learn", "Pandas", "SQL", "R"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=200",
  },
  {
    title: "Research Assistant",
    company: "University AI Lab",
    period: "2012 - 2014",
    description: "Conducted foundational research in machine learning algorithms.",
    technologies: ["Python", "MATLAB", "Neural Networks", "Statistical Analysis"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=300&h=200",
  }
];

const Experience = () => {
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
    <section id="experience" className="min-h-screen flex items-center snap-start relative bg-gradient-to-br from-muted to-background dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
      <h2 className="text-3xl font-bold mb-12 text-center"><SectionHeader title="Experience"/></h2>
        
        <div className="relative flex flex-col items-center">
          <div className="flex justify-center gap-8 mb-8 transition-all duration-300 ease-in-out">
            {visibleExperiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-6 w-[300px] sm:w-[350px] h-[500px] flex-shrink-0 bg-card dark:bg-gray-800 border border-primary/10 relative group hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col h-full space-y-4 relative z-10">
                  <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={exp.image} 
                      alt={exp.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                  <p className="flex-grow text-foreground/80">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-card dark:bg-gray-800 shadow-lg hover:bg-accent cursor-pointer disabled:opacity-50"
              onClick={() => handlePageChange('prev')}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-card dark:bg-gray-800 shadow-lg hover:bg-accent cursor-pointer disabled:opacity-50"
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

export default Experience;
