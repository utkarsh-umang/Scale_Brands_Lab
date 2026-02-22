import { Zap, Users, ShieldCheck, Volume2, PlayCircle, Clapperboard, Music2, ArrowRight } from 'lucide-react';

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
            icon: Volume2
        },
        {
            name: "YouTube Shorts",
            desc: "Vertical storytelling designed for maximum reach and channel subscriptions.",
            icon: PlayCircle
        },
        {
            name: "Instagram Reels",
            desc: "High-aesthetic edits focused on brand building and trend integration.",
            icon: Clapperboard
        },
        {
            name: "TikTok",
            desc: "Trend-focused content designed to capture the Gen-Z audience and go viral.",
            icon: Music2
        }
    ];

    return (
        <section className="bg-white py-24 px-4 overflow-hidden border-t border-gray-100">
            <div className="container mx-auto max-w-7xl">
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
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-black text-[#1a1a1a] mb-3 tracking-tighter">
                            Expertise Across All Platforms
                        </h2>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed">
                            Tailored content strategies that respect the unique culture and algorithm of every major social network.
                        </p>
                    </div>
                    <a href="/clips" className="text-blue-600 font-bold flex items-center hover:translate-x-1 transition-transform group text-sm uppercase tracking-wider">
                        View All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:ml-3 transition-all" />
                    </a>
                </div>

                {/* Platform Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {platforms.map((platform, index) => (
                        <div key={index} className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group flex flex-col items-start text-left hover:border-blue-100">
                            <div className="w-full aspect-[16/10] bg-gray-50 rounded-[30px] flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-blue-50/50 transition-colors">
                                <platform.icon className="w-10 h-10 text-gray-400 group-hover:text-blue-400 transition-colors duration-500" />
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
