import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, TrendingUp } from 'lucide-react';
import { creators } from '../data/creators';

// Totals derived from the creator case studies
const showcaseStats = [
  { value: '93M+', label: 'Organic Views', accent: false },
  { value: '1.1M+', label: 'Combined Audience', accent: true },
  { value: '405k+', label: 'Followers Gained', accent: false },
  { value: '15.5%', label: 'Avg. Engagement', accent: true },
];

type SortKey = 'views' | 'audience';

export default function CreatorShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState<SortKey>('views');

  const categories = ['All', ...Array.from(new Set(creators.map((c) => c.category)))];

  const visibleCreators = useMemo(() => {
    const filtered = activeCategory === 'All' ? creators : creators.filter((c) => c.category === activeCategory);
    return [...filtered].sort((a, b) =>
      sortBy === 'views' ? b.sortViews - a.sortViews : b.sortAudience - a.sortAudience
    );
  }, [activeCategory, sortBy]);

  return (
    <div className="relative z-[3] w-full max-w-[1100px] mt-[85px] max-md:mt-[60px]">
      {/* Stats Bar */}
      <div className="mx-auto w-fit max-w-full grid grid-cols-4 bg-white/80 backdrop-blur-sm rounded-[28px] border border-white shadow-[0_8px_32px_rgba(31,38,135,0.08)] px-4 py-5 max-md:grid-cols-2 max-md:gap-y-4">
        {showcaseStats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`px-8 text-center max-md:px-4 ${idx !== 0 ? 'md:border-l md:border-gray-100' : ''}`}
          >
            <div className={`text-[26px] font-extrabold leading-none tracking-tight ${stat.accent ? 'text-[#2563eb]' : 'text-[#1a1a1a]'}`}>
              {stat.value}
            </div>
            <div className="text-[12px] text-[#1a1a1a]/50 font-medium mt-1.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between gap-4 mt-12 flex-wrap max-md:justify-center">
        <div className="flex gap-2 flex-wrap max-md:justify-center">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold border transition-all duration-300 ${
                  isActive
                    ? 'bg-[#2563eb] text-white border-[#2563eb] shadow-[0_4px_14px_rgba(37,99,235,0.3)]'
                    : 'bg-white text-[#1a1a1a]/70 border-gray-100 hover:border-[#2563eb]/30 hover:text-[#2563eb]'
                }`}
              >
                {category === 'All' ? `All Creators (${creators.length})` : category}
              </button>
            );
          })}
        </div>

        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortKey)}
            aria-label="Sort creators"
            className="appearance-none bg-white border border-gray-100 rounded-full pl-5 pr-10 py-2.5 text-[13px] font-semibold text-[#1a1a1a]/70 cursor-pointer outline-none focus:border-[#2563eb]/40"
          >
            <option value="views">Sort by: Total Views</option>
            <option value="audience">Sort by: Audience Size</option>
          </select>
          <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a1a1a]/40" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Creator Cards */}
      <div className="grid grid-cols-3 gap-6 mt-8 text-left max-lg:grid-cols-2 max-md:grid-cols-1 max-md:max-w-[360px] max-md:mx-auto">
        {visibleCreators.map((creator) => {
          const [views, , engagement, highlight] = creator.stats;
          return (
            <Link
              key={creator.id}
              to={`/case-study/${creator.id}`}
              className="group flex flex-col bg-white rounded-[35px] border-[5px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(37,99,235,0.2)]"
            >
              {/* Image */}
              <div className="relative h-[260px] rounded-[30px] overflow-hidden bg-gray-200 transform-gpu [mask-image:linear-gradient(white,white)]">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-x-0 bottom-0 h-[140px] bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-5">
                  <div className="font-extrabold text-2xl text-white tracking-tight leading-none uppercase">{creator.name}</div>
                  <div className="text-[11px] text-white/90 font-bold uppercase tracking-wider mt-2 bg-white/20 py-1 px-2.5 rounded-full backdrop-blur-sm w-fit">
                    {creator.followers}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 px-5 pt-5 pb-4">
                <div className="flex items-center justify-between gap-2 text-[12px]">
                  <span className="text-[#2563eb] font-semibold">{creator.niche}</span>
                  <span className="text-[#1a1a1a]/40 font-medium">{creator.handle}</span>
                </div>

                <div className="flex items-center gap-2.5 mt-3 bg-blue-50 border border-blue-100 rounded-2xl px-3.5 py-2.5">
                  <TrendingUp className="w-4 h-4 text-[#2563eb] shrink-0" />
                  <span className="text-[13px] font-bold text-[#1a1a1a]">
                    {views.value} {views.label} &amp; {highlight.value} {highlight.label}
                  </span>
                </div>

                <p className="text-[14px] text-[#1a1a1a]/60 leading-[1.6] mt-4 mb-5">{creator.description}</p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 text-[12px]">
                  <span className="flex items-center gap-1.5 text-[#2563eb] font-semibold">
                    <BadgeCheck className="w-4 h-4" />
                    {engagement.value} {engagement.label}
                  </span>
                  <span className="flex items-center gap-1 text-[#1a1a1a] font-semibold group-hover:text-[#2563eb] transition-colors">
                    Case Study
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
