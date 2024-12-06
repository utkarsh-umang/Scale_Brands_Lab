import React from 'react';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Boost Clients, Grow Followers, <span className="text-blue-600">Maximize Exposure!</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            ...in the next 30 days with our Viral content formula
          </p>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="font-semibold text-blue-800 mb-4">Our Client Success Stories:</p>
            <ul className="space-y-2 text-blue-700">
              <li>🚀 Katie Melissa: 240k+ on Instagram</li>
              <li>🚀 Mind Hustler: 350k+ on Twitter</li>
              <li>🚀 Nutty Productions: 600k+ on YouTube</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#results" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold 
              hover:bg-blue-600 hover:text-white transition-all text-center">
              View Case Studies
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <TrendingUp className="h-12 w-12 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">4-5x</h3>
                <p className="text-gray-600">Visibility Surge</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Users className="h-12 w-12 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">30 Days</h3>
                <p className="text-gray-600">To Results</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="h-12 w-12 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">100%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}