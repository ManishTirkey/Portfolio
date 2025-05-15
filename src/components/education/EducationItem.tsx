import React from 'react';
import { GraduationCap } from 'lucide-react';

export interface EducationData {
    degree: string;
    institution: string;
    period: string;
    details: string;
}

interface EducationItemProps {
    education: EducationData;
}

const EducationItem = ({ education }: EducationItemProps) => {
    return (
        <div className="relative group">
            <div className="absolute left-[-38px] top-1.5">
                <div className="w-8.5 h-8.5 rounded-full border-2 border-sidebar-primary/50 bg-sidebar flex items-center justify-center group-hover:border-sidebar-primary group-hover:shadow-[0_0_10px_rgba(147,51,234,0.5)] transition-all duration-300">
                    <GraduationCap size={25} className="text-sidebar-primary" />
                </div>
            </div>

            <div className="glass-morphism p-5 rounded-lg hover:bg-white/5 transition-all duration-300 group-hover:translate-x-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                    <div>
                        <h4 className="font-semibold text-white group-hover:text-sidebar-primary transition-colors">{education.degree}</h4>
                        <p className="text-sm text-white/70">{education.institution}</p>
                        <p className="text-xs text-white/50 mt-1.5">{education.details}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4">
                        <span className="inline-block bg-sidebar/80 px-3 py-1 rounded-full text-xs font-medium text-white/80 group-hover:bg-sidebar-primary/30 transition-colors">
                            {education.period}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationItem;