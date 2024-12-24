import { Button } from '@/components/ui/button';
import { Linkedin, Mail, MessageSquare } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const handleChatClick = () => {
    window.open('https://chat.example.com', '_blank');
  };

  return (
    <section id="contact" className="min-h-screen flex items-center snap-start section-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <SectionHeader title="Get in Touch" />
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg mb-8">
            If you want to learn more about my skills, experience, projects, and passions you can talk to my chatbot. 
            Or use one of the following methods:
          </p>
          
          <Button
            size="lg"
            className="mb-8 glow-button"
            onClick={handleChatClick}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Chat with My AI Assistant
          </Button>

          <div className="flex justify-center space-x-8">
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin className="h-8 w-8" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:example@email.com"
              className="flex flex-col items-center space-y-2 text-foreground/60 hover:text-primary transition-colors"
            >
              <Mail className="h-8 w-8" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;