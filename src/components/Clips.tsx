import { ArrowRight } from 'lucide-react';
import Footer from './Footer';

export default function Clips() {
  const videos = [
    { id: 1, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/1.mp4', title: 'Viral Strategy #1' },
    { id: 2, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/2.mp4', title: 'Engagement Hook' },
    { id: 3, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/3.mp4', title: 'Cinematic Storytelling' },
    { id: 4, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/4.mp4', title: 'Retention Edit' },
    { id: 5, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/5.mp4', title: 'Growth Series' },
    { id: 6, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/6.mp4', title: 'Viral Asset #2' },
    { id: 7, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/7.mp4', title: 'Creative Hook' },
    { id: 8, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/8.mp4', title: 'Viral Delivery' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section of Clips Page */}
        <section className="relative pt-24 pb-24 md:pt-[150px] md:pb-36 overflow-hidden border-b border-gray-100 bg-white">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-[85px] font-black text-[#1a1a1a] mb-8 tracking-tighter leading-[1] max-w-5xl mx-auto">
              You've <span className="text-blue-600">already</span> seen our work on your feed.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-12 px-4">
              We help creators of the common narrative go viral. These are the clips that made noise, flipped stories upside down, and helped our clients grow fast—without selling out.
            </p>
            <button
              onClick={() => document.querySelector('#video-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-[35px] py-[18px] rounded-full font-bold text-lg shadow-2xl hover:bg-blue-700 hover:scale-105 transition-all group"
            >
              Our Work <ArrowRight className="w-[17px] h-[17px] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Down Arrow Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </section>

        <div id="video-grid" />

        {/* Video Grid Section */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {videos.map((video) => (
                <div key={video.id} className="group">
                  <div className="relative aspect-[9/16] bg-black rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-gray-100 group-hover:scale-[1.03] transition-all duration-500">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    >
                      <source src={video.url} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-24">
          <div className="bg-[#1a1a1a] rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/30 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight uppercase leading-[1.1]">
                Ready to Create <br /> Your Next <span className="text-blue-500">Viral</span> Hit?
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 font-medium">
                Let's transform your content strategy with our high-retention video systems.
              </p>
              <a href="/contact" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all">
                Book Your Strategy Call
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
