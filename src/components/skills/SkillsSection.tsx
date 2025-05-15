
import React from 'react';
import SkillCategory from './SkillCategory';
import { Skill } from "@/components/skills/SkillCategoryData"
import SkillCategoryData  from '@/components/skills/SkillCategoryData';

export interface SkillCategoryData {
  category: string;
  skills: Skill[];
}

const SkillsSection = () => {
  return (
    <div className="transform hover:-translate-y-1 transition-all duration-500">
      <h2 className="text-3xl font-bold mb-6 text-center text-gradient text-glow font-display relative inline-block mx-auto">
        Skills
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-sidebar-primary rounded-full"></span>
      </h2>
      <div className="glass-card p-6 sm:p-8 hover:bg-white/5 transition-all duration-500">
        {/* Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SkillCategoryData.map((category, idx) => (
            <SkillCategory
              key={idx}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;