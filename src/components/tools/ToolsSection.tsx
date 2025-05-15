import React from 'react'
import Tools from '@/components/tools/Tools'

const ToolsSection = () =>{
    return (
        <div className="mt-8 glass-morphism p-5 rounded-lg hover:bg-white/10 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-white/90">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center">
                {Tools.map((tool, index)=>(
                    <div
                    key={index}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-sidebar-primary/30 transition-all duration-300 border border-white/20">
                        {tool.name}
                    </div>                
                ))}
            </div>
                

        </div>
    )
}

export default ToolsSection;