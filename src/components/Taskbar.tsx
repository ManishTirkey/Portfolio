
import { useState } from 'react';
import { User, FolderKanban, Mail, Github, Linkedin, Music } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface TaskbarProps {
  onMenuItemClick: (section: string) => void;
  activeSection: string;
}

const Taskbar = ({ onMenuItemClick, activeSection }: TaskbarProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const menuItems = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: FolderKanban, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact Me' },
    { id: 'github', icon: Github, label: 'GitHub' },
    { id: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
    { id: 'music', icon: Music, label: 'Music' },
  ];

  // Mobile taskbar at bottom
  if (isMobile) {
    return (
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
        <div className="glass-taskbar-enhanced flex items-center justify-between px-4 py-3 rounded-full shadow-glow">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onMenuItemClick(item.id)}
                className={cn(
                  "p-2 mx-1 rounded-full transition-all duration-300 icon-hover",
                  isActive 
                    ? "bg-sidebar-primary text-white shadow-glow-sm scale-110" 
                    : "text-sidebar-foreground hover:text-white"
                )}
              >
                <item.icon size={20} className={isActive ? "animate-float" : ""} />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop taskbar on side
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <div className="glass-taskbar-enhanced flex flex-col items-center justify-center py-8 px-4 gap-8 rounded-full shadow-glow">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          const isHovered = hoveredItem === item.id;
          
          return (
            <div 
              key={item.id} 
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button
                onClick={() => onMenuItemClick(item.id)}
                className={cn(
                  "p-2 rounded-full transition-all duration-300 icon-hover",
                  isActive 
                    ? "bg-sidebar-primary text-white shadow-glow-sm scale-110" 
                    : "text-sidebar-foreground hover:text-white"
                )}
              >
                <item.icon size={24} className={isActive ? "animate-float" : ""} />
              </button>
              
              {/* Label tooltip */}
              <div className={cn(
                "absolute left-14 top-1/2 -translate-y-1/2 glass-morphism px-3 py-1.5 rounded-md whitespace-nowrap",
                "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              )}>
                <span className="text-sm font-medium font-display">{item.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Taskbar;
