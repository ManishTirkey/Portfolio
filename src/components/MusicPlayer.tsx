
import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { MusicController } from './MusicController';

interface MusicPlayerProps{
  Controller: MusicController;
  isMini?: boolean; // optional
}

const MusicPlayer : React.FC<MusicPlayerProps> = ({Controller, isMini=false}) => {
  const [CurrentTime, setCurrentTime] = useState(0);

  const handleTime = (time: number)=>{
    setCurrentTime(time);    
  }
  

  useEffect(()=>{
    Controller.onTimeUpdate(handleTime);
    setCurrentTime(Controller.getCurrentTime() || 0);    
  }, [])
  

  // Render mini player version
  if (isMini) {
    return (
      <div className="fixed z-50 bottom-8 right-10 transition-all duration-500 bg-red-100/20 rounded-lg shadow-lg">
        <div className="glass-card p-2 flex items-center gap-2 w-auto shadow-glow">
          {/* Mini cover art */}
          <div className="relative w-10 h-10 rounded-md overflow-hidden shadow-glow-sm">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974')] bg-cover bg-center rounded-md"></div>
          </div>

          {/* Mini controls */}
          <div className="flex items-center gap-2">

            {/* prevSong */}
            <button
              onClick={Controller.prevSong}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipBack size={16} />
            </button>

            {/* play/pause */}
            <button
              onClick={Controller.togglePlay}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              {Controller.isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>

            {/* nextSong */}
            <button
              onClick={Controller.nextSong}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipForward size={16} />
            </button>
          </div>
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
            Controller.isPlaying ? "opacity-0" : "opacity-100"
          )}>
            <Play
              size={40}
              fill="white"
              className="cursor-pointer"
              onClick={Controller.togglePlay}
            />
          </div>
        </div>

        {/* Track info */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-gradient">{Controller.currentSong().title}</h3>
          <p className="text-sm text-gray-400">{Controller.currentSong().artist}</p>
        </div>

        {/* Playback controls */}
        <div className="flex items-center justify-center gap-4">

          {/* prevSong */}
          <button
          onClick={Controller.prevSong} 
          className="text-gray-400 hover:text-white transition-colors">
            <SkipBack size={20} />
          </button>

          {/* play/pause */}
          <button
            onClick={Controller.togglePlay}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            {Controller.isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          {/* nextSong */}
          <button
          onClick={Controller.nextSong} 
          className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
        </div>

        {/* Seek bar */}
        <div className="space-y-1">
          <Slider
            value={[CurrentTime]}
            max={Controller.getDuration() || 100}
            step={1}
            onValueChange={(values) => Controller.seekTo(values[0])}
            className="cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>{Controller.formatedCurTime()}</span>
            <span>{Controller.formatedDuration() || 0}</span>
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2">
          <Volume2 size={16} className="text-gray-400" />
          <Slider
            value={[Controller.volume]}
            max={1}
            step={0.01}
            onValueChange={(values) => Controller.setVolume(values[0])}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
