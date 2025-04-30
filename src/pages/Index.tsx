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

const Index = () => {
  // Separate state for content section and music section
  const [activeSection, setActiveSection] = useState<string>('music');
  const [activeContent, setActiveContent] = useState<string | null>(null);

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
    
    // If clicking on music, toggle other content sections
    if (section === 'music') {
      setActiveContent(null); // Clear content when clicking on music
    } else {
      // For content sections, toggle them on/off
      setActiveContent(prevContent => prevContent === section ? null : section);
    }
    
    // Always keep track of the active section for highlighting in taskbar
    setActiveSection(section);
  };

  // Determine which content to show
  const renderContent = () => {
    if (activeContent === 'about') return <AboutSection />;
    if (activeContent === 'projects') return <ProjectsSection />;
    if (activeContent === 'contact') return <ContactSection />;
    if (activeContent === 'github' || activeContent === 'linkedin') return <SocialLinks />;
    
    // Default to welcome when no content is selected
    return <WelcomeSection />;
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
            {/* Content sections - always show content with welcome as default */}
            <div className="transition-all duration-500">
              {renderContent()}
            </div>
            
            {/* Music player - always visible but highlighted when selected */}
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
