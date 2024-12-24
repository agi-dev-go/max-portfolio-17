import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Mail, ArrowRight, ArrowUp, MessageSquare } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
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

  const handleChatClick = () => {
    window.open('https://chat.example.com', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center hero-gradient light dark:dark relative overflow-hidden snap-start">
        <div ref={heroRef} className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Building the future of artificial intelligence through innovative solutions and scalable architectures.
          </p>
          <div className="flex flex-col items-center gap-4 w-full max-w-xl mx-auto">
            <Button 
              size="lg" 
              className="w-full text-lg py-8 glow-button cursor-pointer"
              onClick={handleChatClick}
            >
              <span className="flex items-center justify-center w-full">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat with My AI Assistant
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            <div className="flex gap-4 w-full">
              <Button 
                size="lg" 
                variant="outline"
                className="flex-1 py-6 bg-white hover:bg-accent cursor-pointer dark:bg-gray-800 dark:text-white"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <span className="flex items-center justify-center w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="flex-1 py-6 bg-white hover:bg-accent cursor-pointer dark:bg-gray-800 dark:text-white"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="flex items-center justify-center w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full glow-button shadow-lg transition-all hover:scale-110 z-50 cursor-pointer"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default Hero;