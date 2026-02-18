import { Search, PenTool, Share2, Settings } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

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

const videos = [
  { id: 1, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/1.mp4' },
  { id: 2, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/2.mp4' },
  { id: 3, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/3.mp4' },
  { id: 4, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/4.mp4' },
  { id: 5, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/5.mp4' },
  { id: 6, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/6.mp4' },
  { id: 7, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/7.mp4' },
  { id: 8, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/8.mp4' },
];

export default function Services() {
  return (
    <section id="services" className="bg-white overflow-hidden">
      {/* Why do our edits perform? Header */}
      <div className="container mx-auto px-4 pt-12 md:pt-20 mb-8 md:mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-[56px] font-bold text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight">
            Why do our edits perform?
          </h2>
          <p className="text-lg md:text-[22px] text-gray-600 max-w-3xl mx-auto font-medium px-4">
            Our clips get 5x more engagement than the average reel posted.
          </p>
        </div>
      </div>

      {/* Full Width Video Section */}
      <div className="relative w-full mb-16 md:mb-32">
        {/* Gradient Background - Curvy Line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-full h-[500px] md:h-[800px] z-0 pointer-events-none">
          <svg
            className="w-full h-full overflow-visible opacity-60 md:opacity-100"
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
        <div className="container mx-auto px-4 relative z-10 group/swiper">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: false,
              scale: 0.9,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.15,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="mySwiper !pb-20 md:!pb-24"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id} className="py-8 md:py-12">
                <div className="w-full max-w-[280px] md:max-w-[320px] mx-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(30,64,175,0.25)] md:shadow-[0_30px_60px_-15px_rgba(30,64,175,0.3)] border-[6px] md:border-[10px] border-white transition-all duration-700 group">
                  <div className="aspect-[9/16] bg-black">
                    <video
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      controls
                      playsInline
                    >
                      <source src={video.url} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Premium Navigation Buttons */}
          <button className="custom-swiper-button-prev absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 backdrop-blur-md border border-white/50 shadow-2xl flex items-center justify-center text-blue-900 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-95 disabled:opacity-0 group-hover/swiper:translate-x-0 -translate-x-12 opacity-0 group-hover/swiper:opacity-100 hidden lg:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button className="custom-swiper-button-next absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 backdrop-blur-md border border-white/50 shadow-2xl flex items-center justify-center text-blue-900 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-95 disabled:opacity-0 group-hover/swiper:translate-x-0 translate-x-12 opacity-0 group-hover/swiper:opacity-100 hidden lg:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
          </button>

          <div className="text-center mt-4 relative z-10">
            <a href="/clips" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 hover:underline text-[16px] md:text-lg transition-all">
              See more examples <Search className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="container mx-auto px-4 pb-12 md:pb-20">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Viral Formula</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            A proven step-by-step process to take your content viral and grow your following
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="mb-4 bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-[#1a1a1a] p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
          <p className="text-center text-lg md:text-xl text-white font-medium leading-relaxed relative z-10">
            <span className="text-blue-400 font-bold text-2xl md:text-3xl block mb-2">"</span>
            Quality over quantity - every word counts in short-form content.
            With our expertise, witness a <span className="text-blue-400 font-bold">4-5x surge</span> in visibility, driving more clientele and revenue your way.
          </p>
        </div>
      </div>
    </section>
  );
}