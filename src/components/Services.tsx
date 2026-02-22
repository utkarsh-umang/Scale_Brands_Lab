import { Search } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

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
      <div className="container mx-auto px-4 pt-2 md:pt-4 mb-1 md:mb-2">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2 tracking-tight leading-tight">
            Why do our edits perform?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-medium px-4">
            Our clips get 5x more engagement than the average reel posted.
          </p>
        </div>
      </div>

      {/* Full Width Video Section */}
      <div className="relative w-full mb-2 md:mb-4">
        {/* Gradient Background - Curvy Line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none overflow-visible">
          {/* High-Opacity Core Gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[500px] md:h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.18)_0%,rgba(96,165,250,0.12)_45%,transparent_70%)] blur-[60px]" />

          {/* Vibrant High-Density Blobs */}
          <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[35%] h-[50%] bg-blue-500/25 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[35%] h-[50%] bg-blue-400/25 rounded-full blur-[120px] animate-float-medium" />

          {/* Atmospheric Accent */}
          <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-blue-300/20 rounded-full blur-[100px] animate-pulse" />
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
            className="mySwiper !pb-2 md:!pb-4"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id} className="py-2 md:py-4">
                <div className="w-full max-w-[180px] md:max-w-[220px] mx-auto rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-[0_12px_24px_-8px_rgba(30,64,175,0.15)] md:shadow-[0_20px_40px_-10px_rgba(30,64,175,0.2)] border-[3px] md:border-[6px] border-white transition-all duration-700 group">
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

          <div className="text-center mt-0 relative z-10">
            <a href="/clips" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 hover:underline text-[16px] md:text-lg transition-all">
              View more examples <Search className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}