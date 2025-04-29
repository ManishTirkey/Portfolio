
import { useState } from 'react';
import Taskbar from '@/components/Taskbar';
import MusicPlayer from '@/components/MusicPlayer';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import SocialLinks from '@/components/SocialLinks';
import BackgroundEffect from '@/components/BackgroundEffect';
import { cn } from '@/lib/utils';

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  const handleMenuItemClick = (section: string) => {
    // Handle external links
    if (section === 'github') {
      window.open('https://github.com/', '_blank');
      return;
    }
    
    if (section === 'linkedin') {
      window.open('https://linkedin.com/', '_blank');
      return;
    }
    
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Animated background */}
      <BackgroundEffect />
      
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/40 to-purple-900/10 -z-10"></div>
      
      {/* Taskbar */}
      <Taskbar 
        onMenuItemClick={handleMenuItemClick}
        activeSection={activeSection}
      />
      
      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen py-20">
        <div className="container max-w-6xl px-4 mx-auto">
          {/* Content wrapper */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Content sections */}
            <div className="transition-all duration-500">
              {activeSection === 'about' && <AboutSection />}
              {activeSection === 'projects' && <ProjectsSection />}
              {activeSection === 'contact' && <ContactSection />}
              {(activeSection === 'github' || activeSection === 'linkedin') && <SocialLinks />}
            </div>
            
            {/* Music player - always visible */}
            <div className={cn(
              "transition-all duration-500",
              activeSection === 'music' ? "scale-110" : "scale-100"
            )}>
              <MusicPlayer />
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-16 text-center text-sm text-white/40">
            <p>© 2024 Glass Portfolio · Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
