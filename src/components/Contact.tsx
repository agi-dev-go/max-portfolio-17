import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Mail } from 'lucide-react';
import SectionHeader from './SectionHeader';


const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center snap-start bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center"><SectionHeader title="Get in Touch" /></h2>
        <div className="max-w-xl mx-auto">
          <div className="flex justify-center space-x-6 mb-12"> 
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:example@email.com" className="text-foreground/60 hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <form className="space-y-6">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" className="min-h-[150px]" />
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;