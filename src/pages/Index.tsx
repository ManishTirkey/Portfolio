
import { useState, useEffect } from 'react';
import Taskbar from '@/components/Taskbar';
import MusicPlayer from '@/components/MusicPlayer';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import SocialLinks from '@/components/SocialLinks';
import BackgroundEffect from '@/components/BackgroundEffect';
import { cn } from '@/lib/utils';
import WelcomeSection from '@/components/WelcomeSection';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  // Single state to track which section is active
  const [activeSection, setActiveSection] = useState<string | null>('music');
  const isMobile = useIsMobile();

  // Set music as default on initial load
  useEffect(() => {
    setActiveSection('music');
  }, []);

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
    
    // Toggle sections - if clicking the same section, set to null (nothing selected)
    setActiveSection(prevSection => prevSection === section ? null : section);
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
        activeSection={activeSection || ''}
      />
      
      {/* Main content */}
      <div className={cn(
        "flex items-center justify-center min-h-screen",
        isMobile ? "py-20 pb-28" : "py-20" // Extra bottom padding on mobile for taskbar
      )}>
        <div className="container max-w-6xl px-4 mx-auto">
          {/* Content wrapper */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Conditional rendering based on active section */}
            <div className="transition-all duration-500">
              {activeSection === 'about' && <AboutSection />}
              {activeSection === 'projects' && <ProjectsSection />}
              {activeSection === 'contact' && <ContactSection />}
              {activeSection === 'music' && <MusicPlayer />}
              {(activeSection === 'github' || activeSection === 'linkedin') && <SocialLinks />}
              {/* Show welcome content when nothing is selected */}
              {activeSection === null && <WelcomeSection />}
            </div>
          </div>
          
          {/* Footer */}
          <div className={cn(
            "text-center text-sm text-white/40",
            isMobile ? "mt-8 mb-16" : "mt-16" // Adjust footer spacing on mobile
          )}>
            <p>© 2024 Glass Portfolio · Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
