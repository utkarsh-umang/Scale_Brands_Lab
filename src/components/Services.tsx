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
    <section id="services" className="bg-white overflow-hidden">
      {/* Why do our edits perform? Header */}
      <div className="container mx-auto px-4 pt-20 mb-16">
        <div className="text-center">
          <h2 className="text-[56px] font-bold text-gray-900 mb-6 tracking-tight leading-tight">Why do our edits perform?</h2>
          <p className="text-[22px] text-gray-600 max-w-3xl mx-auto font-medium">
            Our clips get 5x more engagement than the average reel posted.
          </p>
        </div>
      </div>

      {/* Full Width Video Section */}
      <div className="relative w-full mb-32">
        {/* Gradient Background - Curvy Line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-full h-[800px] z-0 pointer-events-none">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1200 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <g filter="url(#filter0_f)">
              <path
                d="M-100 300 C 200 50 400 50 600 300 C 800 550 1000 550 1300 300"
                stroke="url(#paint0_linear)"
                strokeWidth="180"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <filter id="filter0_f" x="-300" y="-250" width="1800" height="1100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="70" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient id="paint0_linear" x1="-100" y1="300" x2="1300" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1e40af" stopOpacity="0.8" />
                <stop offset="0.5" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="1" stopColor="#60a5fa" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Videos Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {/* Video 1 */}
            <div className="w-[320px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[6px] border-white transform transition-transform hover:scale-105 duration-300">
              <div className="aspect-[9/16] bg-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                >
                  <source src="https://scale-brands.s3.ap-south-1.amazonaws.com/3.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Video 2 */}
            <div className="w-[320px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[6px] border-white transform transition-transform hover:scale-105 duration-300">
              <div className="aspect-[9/16] bg-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                >
                  <source src="https://scale-brands.s3.ap-south-1.amazonaws.com/2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 relative z-10">
            <a href="/clips" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 hover:underline text-lg transition-all">
              See more examples <Search className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="container mx-auto px-4 pb-20">
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