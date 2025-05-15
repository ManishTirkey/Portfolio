import React from 'react';
import AboutMe from '@/components/about/AboutMe';
import SkillsSection from '@/components/skills/SkillsSection';
import ToolsSection from '@/components/tools/ToolsSection';
import EducationSection from '@/components/education/EducationSection';
import Icons from "@/components/icons/Icons"

const AboutSection = () => {
  
  return (
    <div className="flex flex-col gap-12 w-full max-w-4xl mx-auto">
      
      {/* About Section */}
      <AboutMe/>
      
      {/* Skills Section */}
      <SkillsSection/>
      <div className="transform hover:-translate-y-1 transition-all duration-500">
        <ToolsSection/>
      </div>

      {/* Education Section */}
      <EducationSection/>
    </div>
  );
};

export default AboutSection;
