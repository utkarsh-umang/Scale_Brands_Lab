import React from 'react';
import { Shield, Flame, Users, Trophy } from 'lucide-react';

const programs = [
  {
    icon: <Shield className="h-8 w-8 text-red-600" />,
    title: "Boxing Fundamentals",
    description: "Master the basics of boxing with proper technique and form. Perfect for beginners."
  },
  {
    icon: <Flame className="h-8 w-8 text-red-600" />,
    title: "Advanced Combat",
    description: "Intensive training for experienced fighters looking to take their skills to the next level."
  },
  {
    icon: <Users className="h-8 w-8 text-red-600" />,
    title: "Group Classes",
    description: "Join our energetic group sessions for motivation and community support."
  },
  {
    icon: <Trophy className="h-8 w-8 text-red-600" />,
    title: "Competition Prep",
    description: "Specialized training for athletes preparing for competitions and tournaments."
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Programs</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our range of specialized training programs designed to meet your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
              <p className="text-gray-400">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}