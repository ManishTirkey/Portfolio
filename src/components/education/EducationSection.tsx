import React from 'react';
import EducationItem, { EducationData } from './EducationItem';
import EducationList from './EducationList';

interface EducationSectionProps{
    educationList: EducationData[];
}

const EducationSection = () =>{
    return (
        <div className="transform hover:-translate-y-1 transition-all duration-500">
        <h2 className="text-3xl font-bold mb-6 text-center text-gradient text-glow font-display relative inline-block mx-auto">
          Education
          <span className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-full h-1 bg-sidebar-primary rounded-full"></span>
        </h2>
        <div className="p-6 sm:p-8 relative transition-all duration-500">
          {/* Education Timeline - Enhanced */}
          <div className="relative pl-8">
            {/* Vertical timeline line - Thinner and elegant */}
            <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/5 via-sidebar-primary/100 to-white/5"></div>

            <div className="space-y-12">
              {EducationList.map((item, index) => (
                <EducationItem key={index} education={item}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}

export default EducationSection;