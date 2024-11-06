import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter Growth",
    price: "£997",
    features: [
      "Content Strategy Development",
      "Basic Analytics Dashboard",
      "Weekly Growth Reports",
      "2 Platforms Focus"
    ]
  },
  {
    name: "Viral Accelerator",
    price: "£2,497",
    features: [
      "Advanced Content Strategy",
      "Multi-Platform Optimization",
      "Daily Growth Analytics",
      "Viral Trend Analysis",
      "Priority Support"
    ],
    popular: true
  },
  {
    name: "Elite Scaling",
    price: "£4,997",
    features: [
      "Full-Service Brand Management",
      "Custom Growth Strategy",
      "24/7 Priority Support",
      "Personal Brand Manager",
      "Cross-Platform Integration",
      "ROI Tracking"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to scale your personal brand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl p-8 ${
                plan.popular 
                  ? 'bg-blue-600 transform scale-105 shadow-xl' 
                  : 'bg-gray-50'
              }`}
            >
              {plan.popular && (
                <span className="bg-yellow-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl font-bold mt-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-4xl font-bold my-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.price}
                <span className="text-lg font-normal">/month</span>
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                    <Check className="h-5 w-5 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}