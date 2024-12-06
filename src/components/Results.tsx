import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Katie Melissa",
    role: "Instagram Influencer",
    image: "https://scale-brands.s3.ap-south-1.amazonaws.com/katie_melissa.jpg",
    content: "ScaleBrandsLab helped me reach 240k+ followers on Instagram. Their viral content formula really works!",
    stats: "240k+ Followers"
  },
  {
    name: "Mind Hustler",
    role: "Twitter Influencer",
    image: "https://scale-brands.s3.ap-south-1.amazonaws.com/mind_hustler.jpg",
    content: "Grew my Twitter following to 350k+ with their strategies. The engagement rates are incredible!",
    stats: "350k+ Followers"
  },
  {
    name: "Nutty Productions",
    role: "YouTube Creator",
    image: "https://scale-brands.s3.ap-south-1.amazonaws.com/nutty_productions.jpg",
    content: "Reached 600k+ subscribers on YouTube thanks to ScaleBrandsLab' content optimization techniques.",
    stats: "600k+ Subscribers"
  }
];

const chatScreenshots = [
  {
    message: "Just hit 100k followers this month! Your strategies are gold! 🚀",
    platform: "Instagram"
  },
  {
    message: "My latest video went viral, 1M views in 48 hours! Thank you! 🎉",
    platform: "YouTube"
  },
  {
    message: "The engagement rate has tripled since implementing your formula! 📈",
    platform: "Twitter"
  }
];

export default function Results() {
  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our clients are crushing it with our viral content formula
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-blue-600 font-semibold">{testimonial.stats}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Client Messages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chatScreenshots.map((chat, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">{chat.platform}</span>
                </div>
                <p className="text-gray-800">{chat.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}