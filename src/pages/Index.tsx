
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
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  // Single state to track which section is active
  const [activeSection, setActiveSection] = useState<string | null>('music');
  const isMobile = useIsMobile();
  
  // Music player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

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
    // But don't affect music player state
    setActiveSection(prevSection => prevSection === section ? null : section);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Animated background */}
      <BackgroundEffect />
      
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/40 to-purple-900/10 -z-10"></div>
      
      {/* Full Music Player - Only shown when music section is active */}
      {activeSection === 'music' && (
        <div className="fixed z-40 top-24 right-6 transition-all duration-500">
          <MusicPlayer 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
          />
        </div>
      )}
      
      {/* Mini Music Player - Shown when music is not the active section */}
      {activeSection !== 'music' && isPlaying && (
        <div className="fixed z-40 top-6 right-6 transition-all duration-500 animate-fade-in">
          <MusicPlayer 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            isMini={true}
          />
        </div>
      )}
      
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
              {activeSection === 'github' || activeSection === 'linkedin' ? <SocialLinks /> : null}
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
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  );
};

export default Index;
