import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      threshold: [0.2, 0.5, 0.8], // Multiple thresholds for better accuracy
      rootMargin: '-100px 0px -100px 0px' // Adjusted margins
    };

    let currentSection = '';
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Get the intersection ratio
        const ratio = entry.intersectionRatio;
        
        if (entry.isIntersecting && ratio > 0.5) {
          if (entry.target.id === 'hero') {
            currentSection = '';
            setActiveSection('');
          } else {
            currentSection = entry.target.id;
            setActiveSection(entry.target.id);
          }
        } else if (!entry.isIntersecting && currentSection === entry.target.id) {
          // Only clear if this was the active section
          currentSection = '';
          setActiveSection('');
        }
      });
    }, options);

    // Special handling for hero section at top
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
          setActiveSection('');
        }
      });
    }, { threshold: [0.1, 0.5], rootMargin: '0px' });

    // Observe hero section with special observer
    const heroSection = document.getElementById('hero');
    if (heroSection) heroObserver.observe(heroSection);

    // Observe other sections with main observer
    ['experience', 'projects', 'contact'].forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const getButtonClassName = (sectionId: string) => {
    const baseClasses = "relative group px-4 py-2 transition-colors w-full";
    const isActive = activeSection === sectionId;
    return `${baseClasses} ${
      isActive 
        ? "text-primary bg-accent/50" 
        : "text-foreground/80 hover:text-primary"
    }`;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-sm' : ''
    } bg-background dark:bg-gray-900`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Portfolio
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['experience', 'projects', 'contact'].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className={getButtonClassName(item)}
                onClick={() => handleNavigation(item)}
              >
                <span className="capitalize">{item}</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform origin-left ${
                  activeSection === item ? 'scale-x-100' : 'scale-x-0'
                }`}></span>
              </Button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="ml-2"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-background/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-border/50 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-2">
              {['experience', 'projects', 'contact'].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className={`w-full justify-start px-4 py-2 transition-colors ${
                    activeSection === item
                      ? 'text-primary bg-accent/50'
                      : 'text-foreground/80 hover:text-primary hover:bg-accent/50'
                  }`}
                  onClick={() => handleNavigation(item)}
                >
                  <span className="capitalize">{item}</span>
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
