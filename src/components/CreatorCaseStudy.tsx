import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';
import { getCreator } from '../data/creators';

export default function CreatorCaseStudy() {
    const { creatorId } = useParams();
    const creator = getCreator(creatorId);

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
