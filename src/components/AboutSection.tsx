import React from 'react';

const AboutSection = () => {
  return (
    <div className="glass-card p-8 max-w-xl">
      <h2 className="text-3xl font-bold mb-6 text-gradient text-glow font-display">About Me</h2>
      <p className="mb-5 font-light leading-relaxed">
        Hey there! I'm a curious and passionate software developer who loves diving into all things tech—especially when it comes to AI and building smart, useful applications.
      </p>
      <p className="mb-5 font-light leading-relaxed">
        Whether it's crafting clean, responsive interfaces with React and Tailwind, experimenting with machine learning models, 
        or tinkering with microcontrollers like the ESP32, I enjoy learning by doing—and turning ideas into real, working systems.
      </p>
      <p className="font-light leading-relaxed">
      For me, coding isn’t just work—it’s a tool to solve meaningful problems, explore new ideas, and bring creative visions to life.
      </p>
    </div>
  );
};

export default AboutSection;
