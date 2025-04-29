
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Glass Portfolio",
    description: "A beautiful glassmorphism portfolio website with interactive elements and smooth animations.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#"
  },
  {
    title: "Music Visualizer",
    description: "Interactive audio visualization tool that creates beautiful patterns based on music input.",
    tech: ["WebGL", "Three.js", "Web Audio API"],
    github: "#",
    demo: "#"
  },
  {
    title: "Neural Canvas",
    description: "AI-powered digital canvas that transforms simple sketches into detailed artwork.",
    tech: ["TensorFlow.js", "React", "Canvas API"],
    github: "#",
    demo: "#"
  }
];

const ProjectsSection = () => {
  return (
    <div className="glass-card p-6 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gradient text-glow">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="glass-morphism rounded-lg p-5 transition-all duration-300 hover:bg-white/10">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-3">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-white/10 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a href={project.github} className="flex items-center gap-1 text-sm hover:text-sidebar-primary transition-colors">
                <Github size={16} />
                <span>Code</span>
              </a>
              <a href={project.demo} className="flex items-center gap-1 text-sm hover:text-sidebar-primary transition-colors">
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
