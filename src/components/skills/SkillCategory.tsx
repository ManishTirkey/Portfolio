
import React from 'react';
import { Skill } from "@/components/skills/SkillCategoryData"


export interface SkillCategoryProps {
  category: string;
  skills: Skill[];
}

const SkillCategory = ({ category, skills }: SkillCategoryProps) => {
  // Helper function to determine color based on proficiency level
  const getProgressColor = (proficiency: number) => {
    if (proficiency > 60) return "bg-green-500";
    if (proficiency > 50) return "bg-green-300";
    return "bg-white/80";
  };

  return (
    <div className="glass-morphism p-5 rounded-lg hover:bg-white/10 transition-all duration-300">
      <h3 className="text-lg font-semibold mb-4 text-white/90">{category}</h3>
      <div className="space-y-4">
        {skills.map((skill, skillIdx) => (
          <div key={skillIdx} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-white/80">{skill.name}</span>
              <span className="text-xs font-semibold text-sidebar-primary">{skill.proficiency}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full">
              <div
                className={`h-full rounded-full ${getProgressColor(skill.proficiency)} transition-all duration-500`}
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;