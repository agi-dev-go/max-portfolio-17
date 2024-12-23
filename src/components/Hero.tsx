import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Mail, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxValue = scrolled * 0.5;
      hero.style.transform = `translateY(${parallaxValue}px)`;
      setShowScrollTop(scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    console.log('Download resume');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden snap-start">
        <div ref={heroRef} className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            AI/ML Engineering Lead
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Building the future of artificial intelligence through innovative solutions and scalable architectures.
          </p>
          <div className="flex flex-col items-center gap-4 w-full max-w-xl mx-auto">
            <Button 
              size="lg" 
              className="group w-full text-lg py-8 glow-button"
              onClick={() => navigate('/chat')}
            >
              Chat with My AI Assistant
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="flex gap-4 w-full">
              <Button 
                size="lg" 
                variant="secondary"
                className="flex-1 py-6"
                onClick={handleDownloadResume}
              >
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="flex-1 py-6"
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
      </div>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg transition-all hover:scale-110 z-50"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default Hero;