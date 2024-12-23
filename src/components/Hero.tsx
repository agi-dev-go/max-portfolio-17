import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxValue = scrolled * 0.5;
      hero.style.transform = `translateY(${parallaxValue}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    // TODO: Implement resume download
    console.log('Download resume');
  };

  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden snap-start">
      <div ref={heroRef} className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          AI/ML Engineering Lead
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Building the future of artificial intelligence through innovative solutions and scalable architectures.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="group"
            onClick={() => navigate('/chat')}
          >
            Chat with My AI Assistant
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={handleDownloadResume}
          >
            <FileText className="mr-2 h-4 w-4" />
            Resume
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;