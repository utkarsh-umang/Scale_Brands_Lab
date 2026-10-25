import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BadgeCheck, CalendarDays, ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';
import Footer from './Footer';
import { featuredTestimonial, testimonials } from '../data/testimonials';

const channels = ['YouTube Shorts', 'Instagram Reels', 'TikTok', 'X Video', 'LinkedIn Video'];

function InlineVideo({ src, poster, alt, className }: { src: string; poster: string; alt: string; className: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return <video src={src} className={`${className} object-cover bg-black`} controls autoPlay playsInline />;
  }

  return (
    <button type="button" onClick={() => setPlaying(true)} aria-label={`Play ${alt}`} className={`${className} group/play relative block overflow-hidden`}>
      <img src={poster} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover/play:scale-105" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover/play:scale-110">
          <Play className="w-5 h-5 text-[#2563eb] fill-[#2563eb] ml-0.5" />
        </span>
      </span>
    </button>
  );
}

export default function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);
  const featured = featuredTestimonial;
  const [views, growth, , highlight] = featured.creator.stats;

  const scrollRail = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      <main className="relative overflow-hidden px-10 pt-40 pb-20 max-md:px-4 max-md:pt-28 max-md:pb-14">
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[420px] bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-15 blur-[100px] rounded-[100%] pointer-events-none" />

        <div className="relative max-w-[1100px] mx-auto">
          {/* Heading */}
          <div className="text-center">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
              Hear directly from creators
            </span>
            <h1 className="text-[56px] font-extrabold leading-[1.1] tracking-tight text-[#1a1a1a] mt-6 max-lg:text-[46px] max-md:text-[34px]">
              Watch How Creators <span className="text-[#2563eb]">10x Output</span>
              <br className="max-md:hidden" /> and Scale Revenue
            </h1>
            <p className="text-[17px] text-[#1a1a1a]/60 leading-[1.5] max-w-[620px] mx-auto mt-5 max-md:text-base">
              Real video reviews, authentic studio workflows, and behind-the-scenes distribution results powered on autopilot.
            </p>
          </div>

          {/* Featured testimonial */}
          <div className="grid grid-cols-[1.35fr_1fr] gap-6 mt-14 max-lg:grid-cols-1">
            <div className="flex flex-col bg-white rounded-[35px] border-[5px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="relative">
                <InlineVideo
                  src={featured.videoUrl}
                  poster={featured.creator.image}
                  alt={featured.title}
                  className="w-full aspect-video rounded-[30px]"
                />
              </div>
              <div className="px-5 pt-5 pb-4">
                <h2 className="text-[20px] font-bold text-[#1a1a1a] leading-snug tracking-tight">{featured.title}</h2>
                <div className="flex items-center justify-between gap-3 mt-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <img src={featured.creator.image} alt="" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="flex items-center gap-1.5 text-[15px] font-semibold text-[#1a1a1a]">
                        {featured.creator.name}
                        <BadgeCheck className="w-4 h-4 text-[#2563eb]" />
                      </div>
                      <div className="text-[12px] text-[#1a1a1a]/50">{featured.creator.niche}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563eb] bg-blue-50 px-3 py-1 rounded-full">
                      {featured.subtitle}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563eb] bg-blue-50 px-3 py-1 rounded-full">
                      {featured.creator.followers}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-blue-50/60 border border-blue-100 rounded-[35px] p-7 max-md:p-5">
              <span className="w-9 h-9 rounded-xl bg-white border border-blue-100 flex items-center justify-center">
                <Quote className="w-4 h-4 text-[#2563eb] fill-[#2563eb]" />
              </span>
              <p className="text-[17px] text-[#1a1a1a] leading-[1.6] mt-5">&ldquo;{featured.quote}&rdquo;</p>

              <div className="grid grid-cols-3 gap-2 mt-6">
                {[views, growth, highlight].map((stat, idx) => (
                  <div key={stat.label} className="bg-white rounded-2xl border border-blue-100 px-3 py-3">
                    <div className={`text-[20px] font-extrabold leading-none tracking-tight ${idx === 0 ? 'text-[#2563eb]' : 'text-[#1a1a1a]'}`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-[#1a1a1a]/50 font-bold uppercase tracking-wider mt-1.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="text-[10px] text-[#1a1a1a]/50 font-bold uppercase tracking-widest mb-2">Interview chapters</div>
                <div className="flex flex-col gap-2">
                  {featured.chapters.map((chapter, idx) => (
                    <div key={chapter.title} className="flex items-center gap-3 bg-white rounded-xl border border-blue-100 px-3 py-2.5 text-[13px]">
                      <span className="text-[11px] font-bold text-[#2563eb] bg-blue-50 rounded-md px-1.5 py-0.5">0{idx + 1}</span>
                      <span className="flex-1 text-[#1a1a1a]/80">{chapter.title}</span>
                      <span className="text-[12px] font-semibold text-[#1a1a1a]/50">{chapter.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={`/case-study/${featured.creator.id}`}
                className="group mt-auto pt-6 flex items-center gap-1.5 text-[14px] font-semibold text-[#2563eb]"
              >
                Read {featured.creator.name}&rsquo;s full case study
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Reel vault */}
          <div className="mt-24 max-md:mt-16">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-[11px] text-[#2563eb] font-bold uppercase tracking-widest">Reel vault</div>
                <h2 className="text-[36px] font-extrabold tracking-tight text-[#1a1a1a] mt-2 leading-tight max-md:text-[26px]">
                  More Creator Video Testimonials
                </h2>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => scrollRail(-1)}
                  aria-label="Previous testimonials"
                  className="w-11 h-11 rounded-full bg-white border border-gray-100 text-[#1a1a1a]/70 flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-all hover:border-[#2563eb]/30 hover:text-[#2563eb]"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollRail(1)}
                  aria-label="Next testimonials"
                  className="w-11 h-11 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all hover:bg-[#1d4ed8]"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              ref={railRef}
              className="flex gap-5 mt-8 overflow-x-auto snap-x snap-mandatory pb-6 -mx-2 px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((t, idx) => (
                <div
                  key={t.videoUrl}
                  className="snap-start shrink-0 w-[260px] flex flex-col bg-white rounded-[30px] border-[5px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.08)] overflow-hidden"
                >
                  <div className="relative">
                    <InlineVideo src={t.videoUrl} poster={t.creator.image} alt={`${t.creator.name} testimonial`} className="w-full aspect-[9/14] rounded-[25px]" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-none">
                      {t.creator.followers}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 px-4 pt-4 pb-3">
                    <div className="text-[16px] font-bold text-[#1a1a1a] leading-tight">{t.creator.name}</div>
                    <div className="text-[12px] text-[#2563eb] font-semibold mt-0.5">{t.creator.niche}</div>
                    <p className="text-[13px] text-[#1a1a1a]/60 leading-[1.55] mt-3 mb-4">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 text-[11px] font-bold uppercase tracking-wider">
                      <span className="text-[#1a1a1a]/40">{t.duration}</span>
                      <Link to={`/case-study/${t.creator.id}`} className="text-[#2563eb] hover:text-[#1d4ed8]">
                        Case study #{String(idx + 1).padStart(2, '0')}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Channels */}
          <div className="flex items-center justify-between gap-6 bg-blue-50/60 border border-blue-100 rounded-[28px] px-7 py-6 mt-10 max-md:flex-col max-md:items-start max-md:px-5">
            <div>
              <div className="text-[11px] text-[#2563eb] font-bold uppercase tracking-widest">Cross-platform distribution</div>
              <div className="text-[18px] font-bold text-[#1a1a1a] mt-1">Multi-channel reach included</div>
              <p className="text-[13px] text-[#1a1a1a]/55 mt-0.5">One long-form asset repurposed for every short-form platform.</p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end md:max-w-[440px]">
              {channels.map((channel) => (
                <span key={channel} className="text-[12px] font-semibold text-[#1a1a1a]/70 bg-white border border-gray-100 px-3.5 py-1.5 rounded-full">
                  {channel}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden flex items-center justify-between gap-8 bg-[#1a1a1a] rounded-[35px] px-10 py-10 mt-10 max-md:flex-col max-md:items-start max-md:px-6 max-md:py-8">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#2563eb] opacity-30 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2 text-[11px] text-white/60 font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                Limited slots available
              </div>
              <h2 className="text-[34px] font-extrabold text-white tracking-tight leading-tight mt-2 max-md:text-[26px]">
                Scale without lifting a finger.
              </h2>
              <p className="text-[15px] text-white/60 leading-[1.6] mt-2 max-w-[480px]">
                Book a call. We&rsquo;ll look at your content, map out a repurposing plan, and show you what autopilot growth looks like.
              </p>
            </div>
            <div className="relative flex gap-3 flex-wrap shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-7 py-3.5 rounded-full font-semibold text-[14px] shadow-[0_4px_14px_rgba(37,99,235,0.4)] transition-all duration-300 hover:bg-[#1d4ed8] hover:-translate-y-0.5"
              >
                Start Today
                <CalendarDays className="w-4 h-4" />
              </Link>
              <Link
                to="/clips"
                className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-semibold text-[14px] border-[1.5px] border-white/30 transition-all duration-300 hover:bg-white hover:text-[#1a1a1a] hover:border-white"
              >
                See Our Work
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
