import { useParams, Link } from 'react-router-dom';
import { Play, Download, TrendingUp, Users } from 'lucide-react';
import Footer from './Footer';

const caseStudiesData = {
    'katie-melissa': {
        name: 'Katie Melissa',
        handle: '@katiemelissa',
        followers: '240k+ Followers',
        image: 'https://scale-brands.s3.ap-south-1.amazonaws.com/katie_melissa.jpg',
        stats: [
            { label: 'Total Views', value: '15M+', icon: Play },
            { label: 'Follower Growth', value: '85k+', icon: Users },
            { label: 'Engagement Rate', value: '12.4%', icon: TrendingUp },
            { label: 'Course Sales', value: '$45k+', icon: Download },
        ],
        videoResults: [
            { id: 1, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/1.mp4', title: 'Viral Strategy #1' },
            { id: 2, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/2.mp4', title: 'Viral Strategy #2' },
        ],
        description: "Katie Melissa needed a way to transform her expertise into high-retention short-form content. We implemented a hook-first strategy that lead to a massive spike in her organic reach and course conversions."
    },
    'mind-hustler': {
        name: 'Mind Hustler',
        handle: '@mindhustler',
        followers: '350k+ Followers',
        image: 'https://scale-brands.s3.ap-south-1.amazonaws.com/mind_hustler.jpg',
        stats: [
            { label: 'Total Views', value: '28M+', icon: Play },
            { label: 'Follower Growth', value: '120k+', icon: Users },
            { label: 'Engagement Rate', value: '15.2%', icon: TrendingUp },
            { label: 'Sponsorships', value: '12+', icon: Download },
        ],
        videoResults: [
            { id: 3, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/3.mp4', title: 'Mindset Hook #1' },
            { id: 4, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/4.mp4', title: 'Growth Series' },
        ],
        description: "Mind Hustler's brand was stagnant until we introduced cinematic storytelling to their daily motivation clips. The transformation resulted in multiple sponsorship deals and a 3x increase in average views per reel."
    },
    'nutty-productions': {
        name: 'Nutty Productions',
        handle: '@nuttyproductions',
        followers: '600k+ Subs',
        image: 'https://scale-brands.s3.ap-south-1.amazonaws.com/nutty_productions.jpg',
        stats: [
            { label: 'Total Views', value: '50M+', icon: Play },
            { label: 'Sub Growth', value: '200k+', icon: Users },
            { label: 'Engagement Rate', value: '18.9%', icon: TrendingUp },
            { label: 'Ad Revenue', value: '5x Increase', icon: Download },
        ],
        videoResults: [
            { id: 5, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/5.mp4', title: 'Cinematic Edit #1' },
            { id: 6, url: 'https://scale-brands.s3.ap-south-1.amazonaws.com/6.mp4', title: 'Cinematic Edit #2' },
        ],
        description: "Nutty Productions handles large-scale video assets, but they lacked the capacity for high-volume short-form distribution. We became their dedicated 'viral engine', repurposing long-form content into gold-standard reels."
    }
};

export default function CreatorCaseStudy() {
    const { creatorId } = useParams();
    const creator = caseStudiesData[creatorId as keyof typeof caseStudiesData];

    if (!creator) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Creator Not Found</h1>
                    <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header Space for Navbar */}
            <div className="h-16 md:h-20" />

            <main className="container mx-auto px-4 pt-12 pb-4">
                <div className="relative mb-20">
                    {/* Creator Info Header */}
                    <div className="flex flex-col md:flex-row gap-8 items-stretch">
                        <div className="w-full md:w-1/4 max-w-[280px]">
                            <div className="rounded-[30px] overflow-hidden shadow-xl border-[6px] border-white ring-1 ring-gray-100 h-full">
                                <img src={creator.image} alt={creator.name} className="w-full h-full object-cover aspect-[4/5]" />
                            </div>
                        </div>
                        <div className="w-full md:w-3/4 flex flex-col justify-between py-2">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-3 tracking-tighter uppercase">
                                    {creator.name}
                                </h1>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-blue-600 font-bold text-base">{creator.handle}</span>
                                    <span className="bg-blue-50 text-blue-600 px-3 py-0.5 rounded-full font-bold text-xs">
                                        {creator.followers}
                                    </span>
                                </div>
                                <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-2xl mb-6">
                                    {creator.description}
                                </p>
                            </div>

                            {/* Stats as tags parallel to the bottom of the image */}
                            <div className="flex flex-wrap gap-3 mt-auto">
                                {creator.stats.map((stat, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-gray-50 px-4 py-2.5 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300">
                                        <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0">
                                            <stat.icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <div className="text-lg font-black text-[#1a1a1a] leading-tight">{stat.value}</div>
                                            <div className="text-gray-500 font-bold uppercase text-[9px] tracking-widest">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Results */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-8 text-center uppercase tracking-tight">
                        The Viral <span className="text-blue-600">Assets</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
                        {creator.videoResults.map((video) => (
                            <div key={video.id} className="group w-full max-w-[260px]">
                                <div className="relative aspect-[9/16] bg-black rounded-[30px] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-gray-100 group-hover:scale-[1.02] transition-transform duration-500">
                                    <video
                                        className="w-full h-full object-cover"
                                        controls
                                        playsInline
                                    >
                                        <source src={video.url} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-xl font-bold text-[#1a1a1a]">{video.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-[#1a1a1a] rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight uppercase">
                            Ready to <span className="text-blue-500">Scale</span> Like {creator.name}?
                        </h2>
                        <Link to="/contact" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all">
                            Book Your Growth Call
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
