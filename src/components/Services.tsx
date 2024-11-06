import React from 'react';
import { Search, PenTool, Share2, Settings } from 'lucide-react';

const services = [
  {
    icon: <Search className="h-8 w-8 text-blue-600" />,
    title: "Brainstorming & Research",
    description: "We analyze your niche, run competitor analysis, and refine your best ideas for maximum impact."
  },
  {
    icon: <PenTool className="h-8 w-8 text-blue-600" />,
    title: "Content Crafting",
    description: "Creating attention-grabbing hooks, engaging visuals, and compelling CTAs optimized for short-form content."
  },
  {
    icon: <Share2 className="h-8 w-8 text-blue-600" />,
    title: "Platform Optimization",
    description: "Publishing and optimizing your content across all relevant platforms to maximize viral potential."
  },
  {
    icon: <Settings className="h-8 w-8 text-blue-600" />,
    title: "Smart Automation",
    description: "Using tools like Buffer and Hootsuite to ensure consistent visibility and engagement without manual effort."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Viral Formula</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A proven step-by-step process to take your content viral and grow your following
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-xl">
          <p className="text-center text-xl text-blue-800 font-semibold">
            "Quality over quantity - every word counts in short-form content. 
            With our expertise, witness a 4-5x surge in visibility, driving more clientele and revenue your way."
          </p>
        </div>
      </div>
    </section>
  );
}