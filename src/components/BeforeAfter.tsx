import { Heart, Play, Frown } from 'lucide-react';

export default function BeforeAfter() {
    return (
        <section className="pt-0 pb-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 pt-24">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">
                        The <span className="text-blue-500">ScaleBrandsLab</span> Effect
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                        We transform average content into high-performance viral assets.
                    </p>
                </div>

                <div className="flex flex-row items-end justify-center gap-3 md:gap-24 max-w-5xl mx-auto px-2 md:px-0">
                    {/* Before Column */}
                    <div className="relative w-[45%] max-w-[150px] md:max-w-[320px] md:flex-1">
                        {/* Hidden Text for screen readers, visual effect removed */}
                        <div className="sr-only">Before</div>
                        <div className="relative w-full aspect-[4/5] rounded-b-xl md:rounded-b-[3rem] border-x-2 border-b-2 md:border-x-[8px] md:border-b-[8px] border-t-0 border-[#1a1a1a] shadow-xl md:shadow-2xl overflow-hidden bg-gray-900 group">
                            <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-transparent to-transparent opacity-10" />
                            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent z-20" />
                            <img
                                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800"
                                alt="Before ScaleBrandsLab"
                                className="w-full h-full object-cover object-bottom opacity-60 grayscale"
                            />
                            {/* Overlay Metrics */}
                            <div className="absolute bottom-2 right-2 md:bottom-10 md:right-6 space-y-1 md:space-y-4 z-30">
                                <div className="flex items-center justify-end gap-1 md:gap-3 text-white">
                                    <Heart className="w-3 h-3 md:w-8 md:h-8 fill-white" />
                                    <span className="text-xs md:text-3xl font-black">24</span>
                                </div>
                                <div className="flex items-center justify-end gap-1 md:gap-3 text-white">
                                    <Play className="w-3 h-3 md:w-8 md:h-8 fill-white" />
                                    <span className="text-xs md:text-3xl font-black">312</span>
                                </div>
                            </div>
                        </div>
                        {/* Sad Face Indicator */}
                        <div className="absolute -bottom-2 -left-2 md:-bottom-6 md:-left-6 w-8 h-8 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center border-2 md:border-4 border-red-500 shadow-md md:shadow-xl rotate-[-12deg] z-40">
                            <Frown className="w-4 h-4 md:w-12 md:h-12 text-red-500" />
                            <div className="absolute -bottom-1 md:-bottom-2 w-3 md:w-12 h-1 bg-red-500 rounded-full" />
                        </div>
                    </div>

                    {/* After Column */}
                    <div className="relative w-[45%] max-w-[150px] md:max-w-[320px] md:flex-1">
                        <div className="sr-only">After</div>
                        <div className="relative w-full aspect-[4/5] rounded-b-xl md:rounded-b-[3rem] border-x-2 border-b-2 md:border-x-[8px] md:border-b-[8px] border-t-0 border-[#1a1a1a] shadow-xl md:shadow-2xl overflow-hidden bg-gray-900 ring-0 group">
                            <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-transparent to-transparent opacity-10" />
                            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent z-20" />
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                                alt="After ScaleBrandsLab"
                                className="w-full h-full object-cover object-bottom"
                            />
                            {/* Overlay Metrics */}
                            <div className="absolute bottom-2 right-2 md:bottom-10 md:right-6 space-y-1 md:space-y-4 z-30">
                                <div className="flex items-center justify-end gap-1 md:gap-3 text-white">
                                    <Heart className="w-3.5 h-3.5 md:w-10 md:h-10 fill-white" />
                                    <span className="text-sm md:text-4xl font-black">141K</span>
                                </div>
                                <div className="relative flex items-center justify-end gap-1 md:gap-3 text-white">
                                    <div className="absolute -inset-1 md:-inset-2 border-2 md:border-4 border-green-500 rounded-full scale-110" />
                                    <Play className="w-3.5 h-3.5 md:w-10 md:h-10 fill-white" />
                                    <span className="text-sm md:text-4xl font-black">1.7M</span>
                                </div>
                            </div>
                        </div>
                        {/* Holy Indicator */}
                        <div className="absolute -bottom-4 -right-4 md:-bottom-10 md:-right-32 rotate-[15deg] z-10 w-max">
                            <span className="text-sm md:text-5xl font-black text-green-500 drop-shadow-sm md:drop-shadow-lg italic">
                                HOLY<br />*%!#
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="mt-20 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-[#1a1a1a] max-w-3xl mx-auto leading-tight">
                        Stop wasting views. <span className="text-blue-500">Start scaling.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
