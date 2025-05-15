import React from 'react';

const AboutMe = () => {
    return (
        <div className="glass-card p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 hover:bg-white/5 transition-all duration-500">
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-xs aspect-square overflow-hidden rounded-xl border border-white/20 shadow-glow group">
            <img
              src="https://avatars.githubusercontent.com/u/65901594?s=400&u=bfc62001c3edf5742ff4d7180c323d0ba51b9735&v=4"
              alt="Developer"
              className="object-cover w-full h-full group-hover:scale-105 transition-all duration-700 group-hover:rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <div className="bg-black/60 backdrop-blur-sm p-3 rounded-lg">
                <h3 className="text-white text-sm font-medium">Developer</h3>
                <p className="text-white/80 text-xs">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gradient text-glow font-display relative">
            About Me
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-sidebar-primary rounded-full"></span>
          </h2>
          <p className="mb-4 font-light leading-relaxed">
            Hey there! I'm a curious and passionate software developer who loves diving into all things tech—especially when it comes to AI and building smart, useful applications.
          </p>
          <p className="mb-4 font-light leading-relaxed">
            Whether it's crafting clean, responsive interfaces with React and Tailwind, experimenting with machine learning models,
            or tinkering with microcontrollers like the ESP32, I enjoy learning by doing—and turning ideas into real, working systems.
          </p>
          <p className="font-light leading-relaxed">
            For me, coding isn’t just work—it’s a tool to solve meaningful problems, explore new ideas, and bring creative visions to life.
          </p>
        </div>
      </div>
    )
}

export default AboutMe;