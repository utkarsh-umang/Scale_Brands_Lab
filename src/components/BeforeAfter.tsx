import { Heart, Play, Frown } from 'lucide-react';

export default function BeforeAfter() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">
                        The <span className="text-[#2563eb]">ScaleBrandsLab</span> Effect
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                        We transform average content into high-performance viral assets.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 max-w-5xl mx-auto">
                    {/* Before Column */}
                    <div className="relative">
                        <div className="text-center mb-6">
                            <span className="bg-gray-100 text-gray-500 px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm">Before</span>
                        </div>
                        <div className="relative w-[280px] md:w-[320px] aspect-[9/16] rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden bg-gray-900 group">
                            <img
                                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800"
                                alt="Before ScaleBrandsLab"
                                className="w-full h-full object-cover opacity-60 grayscale"
                            />
                            {/* Overlay Metrics */}
                            <div className="absolute bottom-10 right-6 space-y-4">
                                <div className="flex items-center gap-3 text-white">
                                    <Heart className="w-8 h-8 fill-white" />
                                    <span className="text-3xl font-black">24</span>
                                </div>
                                <div className="flex items-center gap-3 text-white">
                                    <Play className="w-8 h-8 fill-white" />
                                    <span className="text-3xl font-black">312</span>
                                </div>
                            </div>
                        </div>
                        {/* Sad Face Indicator */}
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-red-500 shadow-xl rotate-[-12deg]">
                            <Frown className="w-12 h-12 text-red-500" />
                            <div className="absolute -bottom-2 w-12 h-1 bg-red-500 rounded-full" />
                        </div>
                    </div>

                    {/* After Column */}
                    <div className="relative">
                        <div className="text-center mb-6">
                            <span className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg shadow-blue-200">After</span>
                        </div>
                        <div className="relative w-[280px] md:w-[320px] aspect-[9/16] rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden bg-gray-900 ring-4 ring-blue-500/20">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                                alt="After ScaleBrandsLab"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Metrics */}
                            <div className="absolute bottom-10 right-6 space-y-4">
                                <div className="flex items-center gap-3 text-white">
                                    <Heart className="w-10 h-10 fill-white" />
                                    <span className="text-4xl font-black">141K</span>
                                </div>
                                <div className="relative flex items-center gap-3 text-white">
                                    <div className="absolute -inset-2 border-4 border-green-500 rounded-full scale-110" />
                                    <Play className="w-10 h-10 fill-white" />
                                    <span className="text-4xl font-black">1.7M</span>
                                </div>
                            </div>
                        </div>
                        {/* Holy Indicator */}
                        <div className="absolute -bottom-10 -right-24 md:-right-32 rotate-[15deg]">
                            <span className="text-4xl md:text-5xl font-black text-green-500 drop-shadow-lg italic">
                                HOLY<br />*%!#
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="mt-20 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-[#1a1a1a] max-w-3xl mx-auto leading-tight">
                        Stop wasting views. <span className="text-[#2563eb]">Start scaling.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
