import { Zap, Users, ShieldCheck } from 'lucide-react';

const XLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
);

const YouTubeShortsLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const InstagramLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const TikTokLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z" />
    </svg>
);

export default function WhyUs() {
    const features = [
        {
            title: "Outproduce your competition",
            desc: "Our streamlined systems allow you to create more high-quality content than anyone else in your niche, ensuring constant visibility.",
            icon: Zap,
            color: "bg-orange-50 text-orange-500"
        },
        {
            title: "Say no to outsourcing",
            desc: "Everything is handled by our in-house experts. No low-quality white-labeling or overseas outsourcing. Pure quality control.",
            icon: Users,
            color: "bg-orange-50 text-orange-500"
        },
        {
            title: "Verified Monetization Partner",
            desc: "We don't just make views; we build assets. Our strategies are proven to drive real revenue and sustainable business growth.",
            icon: ShieldCheck,
            color: "bg-orange-50 text-orange-500"
        }
    ];

    const platforms = [
        {
            name: "X (Twitter) Videos",
            desc: "Viral-ready clips optimized for the X algorithm and high-engagement threads.",
            Logo: XLogo,
            color: "text-[#000000]"
        },
        {
            name: "YouTube Shorts",
            desc: "Vertical storytelling designed for maximum reach and channel subscriptions.",
            Logo: YouTubeShortsLogo,
            color: "text-[#FF0000]"
        },
        {
            name: "Instagram Reels",
            desc: "High-aesthetic edits focused on brand building and trend integration.",
            Logo: InstagramLogo,
            color: "text-[#E1306C]"
        },
        {
            name: "TikTok",
            desc: "Trend-focused content designed to capture the Gen-Z audience and go viral.",
            Logo: TikTokLogo,
            color: "text-[#010101]"
        }
    ];

    return (
        <section className="relative bg-white py-24 px-4 overflow-hidden border-t border-gray-100">
            {/* Blue Gradient Background - Blob Effect */}
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[550px] bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-20 blur-[100px] rounded-[100%] z-[1] pointer-events-none" />

            {/* Floating Blur Blobs for Depth */}
            <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow z-[1] pointer-events-none" />
            <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-medium animation-delay-2000 z-[1] pointer-events-none" />
            <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-fast animation-delay-4000 z-[1] pointer-events-none" />

            <div className="container relative z-10 mx-auto max-w-7xl">
                {/* Top Header Section */}
                <div className="text-center mb-20">
                    <span className="text-blue-600 font-black uppercase tracking-[0.5em] text-2xl md:text-3xl mb-8 block">
                        WHY SCALEBRANDSLAB
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] mb-8 tracking-tighter leading-[1.1]">
                        Built for scale, <br className="hidden md:block" /> designed for impact.
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        We provide the infrastructure and creative expertise needed to dominate every vertical video platform simultaneously.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-32">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group px-4">
                            <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-sm border border-orange-100/50`}>
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Platform Expertise Header */}
                <div className="text-center mb-16 flex flex-col items-center justify-center">
                    <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] mb-6 tracking-tighter leading-[1.1]">
                        Expertise <span className="text-blue-600">Across</span> All Platforms
                    </h2>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
                        Tailored content strategies that respect the unique culture and algorithm of every major social network.
                    </p>
                </div>

                {/* Platform Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {platforms.map((platform, index) => (
                        <div key={index} className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group flex flex-col items-start text-left hover:border-blue-200">
                            <div className="w-full aspect-[16/10] bg-blue-50/40 rounded-[30px] flex items-center justify-center mb-8 border-2 border-blue-300 group-hover:bg-blue-100/50 group-hover:border-blue-500 transition-all duration-300">
                                <span className={platform.color}>
                                    <platform.Logo />
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{platform.name}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium text-sm">
                                {platform.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
