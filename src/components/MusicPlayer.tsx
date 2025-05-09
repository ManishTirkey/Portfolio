
import React, { useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  isMini?: boolean;
}

const MusicPlayer = ({ 
  isPlaying, 
  setIsPlaying, 
  currentTime, 
  setCurrentTime,
  isMini = false 
}: MusicPlayerProps) => {
  const songDuration = 217; // 3:37 in seconds
  
  // Auto-progress if playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= songDuration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, setCurrentTime, setIsPlaying, songDuration]);
  
  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const togglePlay = () => setIsPlaying(!isPlaying);

  // Render mini player version
  if (isMini) {
    return (
      <div className="glass-card p-2 flex items-center gap-2 w-auto">
        {/* Mini cover art */}
        <div className="relative w-10 h-10 rounded-md overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974')] bg-cover bg-center rounded-md"></div>
        </div>
        
        {/* Mini controls */}
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipBack size={16} />
          </button>
          
          <button 
            onClick={togglePlay}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={16} />
          </button>
        </div>
      </div>
    );
  }
  
  // Render full player version
  return (
    <div className="glass-card w-[340px] p-5">
      <div className="flex flex-col gap-4">
        {/* Album art */}
        <div className="mx-auto relative w-48 h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg animate-pulse-slow"></div>
          <div className="absolute inset-2 rounded-lg bg-[url('https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] rounded-lg"></div>
          <div className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg transition-opacity",
            isPlaying ? "opacity-0" : "opacity-100"
          )}>
            <Play 
              size={40} 
              fill="white" 
              className="cursor-pointer" 
              onClick={togglePlay}
            />
          </div>
        </div>
        
        {/* Track info */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-gradient">Track Don't Matter</h3>
          <p className="text-sm text-gray-400">Glass Portfolio • 2024</p>
        </div>
        
        {/* Playback controls */}
        <div className="flex items-center justify-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipBack size={20} />
          </button>
          
          <button 
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="space-y-1">
          <Slider
            value={[currentTime]}
            max={songDuration}
            step={1}
            onValueChange={(values) => setCurrentTime(values[0])}
            className="cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(songDuration)}</span>
          </div>
        </div>
        
        {/* Volume */}
        <div className="flex items-center gap-2">
          <Volume2 size={16} className="text-gray-400" />
          <Slider
            defaultValue={[70]}
            max={100}
            step={1}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
