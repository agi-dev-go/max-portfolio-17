import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-primary">Portfolio</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => handleNavigation('experience')} className="text-foreground/80 hover:text-primary transition-colors">Experience</button>
            <button onClick={() => handleNavigation('projects')} className="text-foreground/80 hover:text-primary transition-colors">Projects</button>
            <button onClick={() => handleNavigation('contact')} className="text-foreground/80 hover:text-primary transition-colors">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-background">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleNavigation('experience')} className="text-foreground/80 hover:text-primary transition-colors">Experience</button>
              <button onClick={() => handleNavigation('projects')} className="text-foreground/80 hover:text-primary transition-colors">Projects</button>
              <button onClick={() => handleNavigation('contact')} className="text-foreground/80 hover:text-primary transition-colors">Contact</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;