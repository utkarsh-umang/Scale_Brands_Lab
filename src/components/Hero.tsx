import { Link } from 'react-router-dom';
import CreatorShowcase from './CreatorShowcase';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-10 pt-40 pb-20 overflow-hidden bg-white max-md:px-8 max-md:pt-28 max-md:pb-16">
      {/* Decorations are pinned to the original hero height so they stay put above the creator grid */}
      <div className="absolute inset-x-0 top-0 h-[max(100vh,972px)] max-md:h-[1560px] pointer-events-none">
      {/* Blue Gradient Background */}
      {/* Blue Gradient Background - Blob Effect */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[550px] bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-20 blur-[100px] rounded-[100%] z-[1] pointer-events-none" />

      {/* Floating Blur Blobs for Depth */}
      <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow z-[1] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-medium animation-delay-2000 z-[1] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-fast animation-delay-4000 z-[1] pointer-events-none" />

      {/* Floating Social Media Icons with Glassy Effect */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] pointer-events-none">
        {/* Instagram */}
        <div className="absolute top-[25%] left-[12%] w-[85px] h-[85px] rounded-3xl glass-icon shadow-[0_8px_32px_rgba(31,38,135,0.15)] flex items-center justify-center transition-all duration-400 max-lg:w-[70px] max-lg:h-[70px] max-md:w-[60px] max-md:h-[60px]">
          <svg className="w-10 h-10 max-lg:w-8 max-lg:h-8 max-md:w-[26px] max-md:h-[26px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#FED576', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#F47133', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#BC3081', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2" fill="none" />
            <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" strokeWidth="2" fill="none" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="url(#instagram-gradient)" />
          </svg>
        </div>

        {/* YouTube */}
        <div className="absolute top-[25%] right-[12%] w-[85px] h-[85px] rounded-3xl glass-icon shadow-[0_8px_32px_rgba(31,38,135,0.15)] flex items-center justify-center transition-all duration-400 max-lg:w-[70px] max-lg:h-[70px] max-md:w-[60px] max-md:h-[60px]">
          <svg className="w-11 h-8 max-lg:w-9 max-lg:h-7 max-md:w-7 max-md:h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.5219 14.4001C47.5219 14.4001 47.0531 11.0907 45.6094 9.6376C43.7812 7.7251 41.7375 7.71572 40.8 7.60322C34.0875 7.11572 24.0094 7.11572 24.0094 7.11572H23.9906C23.9906 7.11572 13.9125 7.11572 7.2 7.60322C6.2625 7.71572 4.21875 7.7251 2.39062 9.6376C0.946875 11.0907 0.4875 14.4001 0.4875 14.4001C0.4875 14.4001 0 18.2907 0 22.172V25.8095C0 29.6907 0.478125 33.5813 0.478125 33.5813C0.478125 33.5813 0.946875 36.8907 2.38125 38.3438C4.20937 40.2563 6.60938 40.1907 7.67813 40.397C11.5219 40.7626 24 40.8845 24 40.8845C24 40.8845 34.0875 40.8657 40.8 40.3876C41.7375 40.2751 43.7812 40.2657 45.6094 38.3532C47.0531 36.9001 47.5219 33.5907 47.5219 33.5907C47.5219 33.5907 48 29.7095 48 25.8188V22.1813C48 18.2907 47.5219 14.4001 47.5219 14.4001Z" fill="#FF0000" />
            <path d="M19 31.5V16.5L32 24L19 31.5Z" fill="white" />
          </svg>
        </div>

        {/* X (Twitter) */}
        <div className="absolute top-[40%] left-[8%] w-[85px] h-[85px] rounded-3xl glass-icon shadow-[0_8px_32px_rgba(31,38,135,0.15)] flex items-center justify-center transition-all duration-400 max-lg:w-[70px] max-lg:h-[70px] max-md:w-[60px] max-md:h-[60px] max-md:top-[38%] max-md:left-[4%]">
          <svg className="w-10 h-10 max-lg:w-8 max-lg:h-8 max-md:w-[26px] max-md:h-[26px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#000000" />
          </svg>
        </div>

        {/* Facebook */}
        <div className="absolute top-[40%] right-[8%] w-[85px] h-[85px] rounded-3xl glass-icon shadow-[0_8px_32px_rgba(31,38,135,0.15)] flex items-center justify-center transition-all duration-400 max-lg:w-[70px] max-lg:h-[70px] max-md:w-[60px] max-md:h-[60px] max-md:top-[38%] max-md:right-[4%]">
          <svg className="w-10 h-10 max-lg:w-8 max-lg:h-8 max-md:w-[26px] max-md:h-[26px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
          </svg>
        </div>
      </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-[3] max-w-[1280px]">
        <h1 className="text-[64px] font-extrabold leading-[1.1] mb-[22px] tracking-tight text-[#1a1a1a] max-lg:text-[50px] max-md:text-[36px] max-md:tracking-normal">
          Built for <span className="text-[#2563eb]">Content Creators</span> to scale<br />
          without lifting a finger
        </h1>
        <p className="text-[17px] text-[#1a1a1a]/60 mb-[42px] font-normal leading-[1.5] max-w-[700px] mx-auto max-md:text-base">
          Helping Personal Brands Transform Content Into Views, Sponsorship Deals & Scalable Downloads
        </p>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Link
            to="/clips"
            className="group inline-flex items-center gap-2 bg-[#2563eb] text-white px-[45px] py-[17px] rounded-full font-semibold text-[15px] border-2 border-[#2563eb] shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all duration-300 hover:bg-[#1d4ed8] hover:border-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)]"
          >
            See Our Work
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#2563eb] px-[45px] py-[17px] rounded-full font-semibold text-[15px] border-2 border-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)]"
          >
            Start Today
          </Link>
        </div>
      </div>

      <CreatorShowcase />
    </section>
  );
}