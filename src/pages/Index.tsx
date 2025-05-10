
import { useState, useEffect, useMemo } from 'react';
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
import { MusicController } from '@/components/MusicController';

const Index = () => {
// --------------------music control-------------------
  // const [currentIndex, setCurrentIndex] = useState(
  //   Math.floor(Math.random() * songs.length)
  // );

    // Music player state
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [currentTime, setCurrentTime] = useState(0);
  // const [volume, setVolume] = useState(0.7);
  // const audioRef = useRef<HTMLAudioElement | null>(null);

  // const currentSong = songs[currentIndex];


  // useEffect(() => {
    // if (!audioRef.current) return;

    // const audio = audioRef.current;
    // audio.src = currentSong.url;
    // audio.volume = volume;
    // setCurrentTime(0);

    // if (isPlaying) {
    //   audio
    //     .play()
    //     .catch((err) => console.error('Audio playback failed:', err));
    // }
  // }, [currentIndex]);


  // useEffect(() => {
  //   const audio = audioRef.current;
  //   if (!audio) return;

  //   const handleTimeUpdate = () => {
  //     setCurrentTime(audio.currentTime);
  //   };

  //   const handleEnded = () => {
  //     nextSong();
  //   };

  //   audio.addEventListener('timeupdate', handleTimeUpdate);
  //   audio.addEventListener('ended', handleEnded);

  //   return () => {
  //     audio.removeEventListener('timeupdate', handleTimeUpdate);
  //     audio.removeEventListener('ended', handleEnded);
  //   };
  // }, [audioRef.current]);



  // -----------------controllers

  // const togglePlay = () => {
  //   if (!audioRef.current) return;
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current
  //       .play()
  //       .catch((err) => console.error('Audio playback failed:', err));
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  // const nextSong = () => {
  //   setCurrentIndex((prev) => (prev + 1) % songs.length);
  // };

  // const prevSong = () => {
  //   setCurrentIndex((prev) =>
  //     prev === 0 ? songs.length - 1 : prev - 1
  //   );
  // };

  // const handleSeek = (value: number) => {
  //   if (audioRef.current) {
  //     audioRef.current.currentTime = value;
  //     setCurrentTime(value);
  //   }
  // };

  // const handleVolume = (value: number) => {
  //   setVolume(value);
  //   if (audioRef.current) {
  //     audioRef.current.volume = value;
  //   }
  // };

  // const SongDuration = () =>{
  //   if (audioRef.current) {
  //     return audioRef.current.duration;
  //   }
  //   return 0;
  // }

  // const formatTime = (seconds: number) => {
  //   const mins = Math.floor(seconds / 60);
  //   const secs = Math.floor(seconds % 60);
  //   return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  // };

// --------------------------------------------------------  

  // Single state to track which section is active
  const [activeSection, setActiveSection] = useState<string | null>('music');
  const isMobile = useIsMobile();

  const handleEnded = ()=>{
    controller.nextSong();
  }
  const controller = useMemo(() => new MusicController(), []);    
  controller.onEnded(handleEnded);
  
  // Set music as default on initial load
  useEffect(() => {

    setActiveSection('music');
  }, []);

  const handleMenuItemClick = (section: string) => {
    // Handle external links
    if (section === 'github') {
      window.open('https://github.com/manishtirkey', '_blank');
      return;
    }
    
    if (section === 'linkedin') {
      window.open('https://www.linkedin.com/in/manish-t-b02a67205/', '_blank');
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
      {/* {activeSection === 'music' && (
        <div className="flex flex-wrap items-center justify-center gap-8 transition-all duration-500">
          <MusicPlayer 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
          />
        </div>
      )} */}
      
      {/* Mini Music Player - Always shown when music is not the active section */}
      {activeSection !== 'music' && (
        <div className="fixed z-50 top-6 right-6 transition-all duration-500">
           <MusicPlayer Controller={controller} isMini={true}/>
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
              {activeSection === 'music' &&
              <MusicPlayer Controller={controller}/>
              }
              {activeSection === 'github' || activeSection === 'linkedin' ? <SocialLinks /> : null}
              {activeSection === null && <WelcomeSection />}
            </div>
          </div>
          
          {/* Footer */}
          <div className={cn(
            "text-center text-sm text-white/40",
            isMobile ? "mt-8 mb-16" : "mt-16" // Adjust footer spacing on mobile
          )}>
            <p>© 2024 Portfolio: Manish Tirkey · Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  );
};

export default Index;
