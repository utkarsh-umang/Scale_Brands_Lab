import React, { useState, useEffect } from "react";
import { sendSlackNotification } from "../utils/slack";

const deliverables = [
    { icon: "🎣", tag: "PAGE 2", title: "Viral Hook Ideas", desc: "3 scroll-stopping hooks crafted to get more clicks on your podcast clips", color: "#3B5BDB", accent: "#2563eb" },
    { icon: "🤝", tag: "PAGE 3", title: "Podcast Collab List", desc: "Curated list of podcasts in your niche + a plug-and-play outreach template", color: "#1971C2", accent: "#3b82f6" },
    { icon: "🖼️", tag: "PAGE 5", title: "Thumbnail Designs", desc: "Custom sample thumbnails designed specifically for your podcast channel", color: "#2F9E44", accent: "#22c55e" },
    { icon: "🎬", tag: "PAGE 6", title: "Complimentary Video", desc: "A personalized video walkthrough explaining your full audit strategy", color: "#5C3BC0", accent: "#8b5cf6" },
];

function CheckIcon({ color }: { color: string }) {
    return (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.18" />
            <path d="M4.5 8L7 10.5L11.5 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function BeforePhone() {
    return (
        <div className="flex flex-col items-center gap-2.5">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.1em] font-sans bg-slate-100 text-slate-500 border border-slate-200">
                BEFORE
            </div>

            {/* Phone */}
            <div className="w-[130px] h-[272px] rounded-[26px] border-[2.5px] border-slate-300 bg-black relative overflow-hidden shadow-xl">
                {/* Dark screen */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#141414] to-[#0a0a0a]">
                    {/* Faint laptop silhouette */}
                    <div className="absolute bottom-[30%] left-[15%] right-[15%] h-[2px] bg-white/5 rounded-sm" />
                    <div className="absolute bottom-[28%] left-[20%] w-[60%] h-[28px] bg-white/5 rounded-b-sm" />
                    {/* Low stats */}
                    <div className="absolute bottom-[18px] right-[14px] flex flex-col gap-1 items-end">
                        <div className="flex items-center gap-1 text-white text-[13px] font-bold font-sans drop-shadow-md">
                            <span>♥</span><span>24</span>
                        </div>
                        <div className="flex items-center gap-1 text-white text-[13px] font-bold font-sans drop-shadow-md">
                            <span>▶</span><span>312</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sad face + red underline */}
            <div className="relative flex items-center justify-center -mt-2">
                <div className="w-11 h-11 rounded-full border-[2.5px] border-red-500 bg-white shadow-md flex items-center justify-center text-[20px] text-red-500 pb-1 z-10">
                    ☹
                </div>
                <svg className="absolute -bottom-2 -left-1 z-0" width="60" height="14" viewBox="0 0 60 14">
                    <path d="M2 7 Q15 2 30 7 Q45 12 58 7" stroke="#ef4444" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    );
}

function AfterPhone() {
    return (
        <div className="flex flex-col items-center gap-2.5">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.1em] font-sans bg-[#2563eb] text-white shadow-sm">
                AFTER
            </div>

            {/* Phone */}
            <div className="w-[130px] h-[272px] rounded-[26px] border-[2.5px] border-[#60a5fa] bg-black relative overflow-hidden shadow-[0_8px_30px_rgba(37,99,235,0.25),0_0_0_1px_rgba(96,165,250,0.15)]">
                {/* Vibrant warm office scene */}
                <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(170deg, #b8d4e8 0%, #c5d8e0 35%, #d4c090 65%, #d9a860 100%)" }}
                >
                    {/* Window blinds suggestion */}
                    {[0, 1, 2, 3, 4].map(i => (
                        <div key={i} className="absolute left-[5%] w-[45%] h-[10px] bg-white/25 rounded-[1px]" style={{ top: i * 22 }} />
                    ))}
                    {/* Orange gift bags */}
                    {[18, 42, 64, 88, 108].map((x, i) => (
                        <div key={i} className="absolute bottom-[34%] w-[15px] h-[19px] opacity-90 rounded-t-[1px] rounded-b-[3px]"
                            style={{ left: x, background: `linear-gradient(180deg, #f4a030, #e07018)` }}
                        />
                    ))}
                    {/* Table surface */}
                    <div className="absolute bottom-0 left-0 right-0 h-[35%]" style={{ background: "linear-gradient(180deg, rgba(180,130,60,0.3), rgba(160,110,40,0.6))" }} />
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-4 right-3 flex flex-col gap-1.5 items-end">
                    <div className="flex items-center gap-1 text-white text-[13px] font-extrabold font-sans drop-shadow-md">
                        <span>♥</span><span>141K</span>
                    </div>
                    <div className="flex items-center gap-1 text-white text-[13px] font-extrabold font-sans border-[2px] border-green-400 rounded-full px-2 py-0.5 drop-shadow-md shadow-[0_0_12px_rgba(34,197,94,0.5)] bg-black/30 backdrop-blur-sm">
                        <span>▶</span><span>1.7M</span>
                    </div>
                </div>
            </div>

            {/* HOLY *%# */}
            <div className="font-serif font-black text-[18px] leading-[1.1] text-green-600 drop-shadow-[0_2px_10px_rgba(34,197,94,0.25)] -rotate-3 inline-block mt-0.5 text-center">
                HOLY<br />*%!#
            </div>
        </div>
    );
}

export default function PodcastLeadMagnet() {
    const [visible, setVisible] = useState<number[]>([]);
    const [formData, setFormData] = useState({ name: "", podcast: "", email: "", link: "" });
    const [submitted, setSubmitted] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    useEffect(() => {
        deliverables.forEach((_, i) => {
            setTimeout(() => setVisible((v) => [...v, i]), 150 + i * 110);
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.name && formData.email) {
            // Create Slack message
            const slackMessage = `📊 *New Audit Report Request*\n\n` +
                `*Name:* ${formData.name}\n` +
                `*Email:* ${formData.email}\n` +
                `*Podcast:* ${formData.podcast || 'N/A'}\n` +
                `*Link:* ${formData.link || 'N/A'}`;

            await sendSlackNotification('audit', slackMessage);

            // We show the success state regardless to the user
            setSubmitted(true);
        }
    };

    return (
        <div id="audit-report" className="py-24 px-4 md:px-8 relative bg-white overflow-hidden flex items-center justify-center">
            {/* Subtle Background Elements adapted to light theme */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.25]"
                style={{
                    backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
                    backgroundSize: '48px 48px'
                }}
            />

            <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none z-0 opacity-40 translate-x-[30%] -translate-y-[30%]"
                style={{
                    background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 60%)'
                }}
            />

            <div className="grid md:grid-cols-2 max-w-[1280px] w-full mt-8 md:mt-12 bg-white rounded-[24px] border border-slate-200 z-10 overflow-hidden shadow-xl shadow-slate-200/50 relative">

                {/* ——— LEFT PANEL ——— */}
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col bg-white">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                        {/* Left Column: Phones */}
                        <div className="flex flex-col items-center justify-center gap-8 border-b lg:border-b-0 lg:border-r border-slate-100 pb-8 lg:pb-0 lg:pr-8 mx-auto lg:mx-0 shrink-0">
                            <BeforePhone />
                            {/* Optional pointing arrow could go here */}
                            <AfterPhone />
                        </div>

                        {/* Right Column: List */}
                        <div className="flex flex-col pt-2 lg:pt-0">
                            <h2 className="text-slate-900 text-[24px] md:text-[28px] font-extrabold leading-tight mb-2 tracking-tight">
                                Here's everything<br />inside your audit
                            </h2>
                            <p className="text-slate-500 text-[14px] mb-6 leading-relaxed">
                                A personalized 6-page PDF — delivered free within 24 hrs.
                            </p>

                            {/* Deliverables */}
                            <div className="flex flex-col gap-3">
                                {deliverables.map((item, i) => (
                                    <div
                                        key={i}
                                        onMouseEnter={() => setHoveredCard(i)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                        className={`flex gap-3.5 p-3 rounded-xl border transition-all duration-300 ${hoveredCard === i ? 'bg-[#2563eb]/5 border-[#2563eb]/20 shadow-sm' : 'bg-slate-50/50 border-slate-100'
                                            }`}
                                        style={{
                                            opacity: visible.includes(i) ? 1 : 0,
                                            transform: visible.includes(i) ? "translateX(0)" : "translateX(-12px)"
                                        }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-[18px]"
                                            style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                                        >
                                            {item.icon}
                                        </div>
                                        <div className="flex-1 pt-0.5">
                                            <div className="text-slate-900 text-[14px] font-bold mb-0.5">{item.title}</div>
                                            <div className="text-slate-500 text-[12px] leading-relaxed">{item.desc}</div>
                                        </div>
                                        <div className="shrink-0 flex items-center pr-2">
                                            <CheckIcon color={item.accent} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Trust bar */}
                            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-3">
                                <div className="flex">
                                    {["🎙", "🎧", "📻"].map((emoji, i) => (
                                        <div key={i} className={`w-8 h-8 rounded-full bg-slate-50 border-2 border-white flex items-center justify-center text-[13px] ${i !== 0 ? '-ml-2' : ''} shadow-sm z-[${3 - i}]`}>
                                            {emoji}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-slate-500 text-[12px] m-0">
                                    <span className="text-slate-800 font-bold">500+ podcasters</span> already audited
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ——— RIGHT PANEL ——— */}
                <div className="p-8 md:p-14 flex flex-col bg-[#f8fafc] relative overflow-hidden">
                    {/* Subtle glow */}
                    <div className="absolute -bottom-[80px] -right-[60px] w-[400px] h-[400px] pointer-events-none opacity-[0.35]"
                        style={{ background: 'radial-gradient(circle, #bfdbfe 0%, transparent 70%)' }}
                    />

                    <div className="relative z-10 flex flex-col h-full justify-center">
                        {!submitted ? (
                            <>
                                <div className="mb-8 text-center md:text-left">
                                    <h3 className="text-slate-900 text-[28px] md:text-[34px] font-extrabold mb-3 leading-tight tracking-tight">
                                        Get your free audit →
                                    </h3>
                                    <p className="text-slate-600 text-[15px] leading-relaxed">
                                        Fill in the details and we'll send your personalized podcast report within 24 hours.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-slate-500">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Alex Johnson"
                                                required
                                                className="bg-white border text-sm text-slate-900 border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#2563eb]/50 focus:ring-4 focus:ring-[#2563eb]/10 transition-all shadow-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-slate-500">
                                                Podcast Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.podcast}
                                                onChange={(e) => setFormData({ ...formData, podcast: e.target.value })}
                                                placeholder="The Growth Podcast"
                                                className="bg-white border text-sm text-slate-900 border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#2563eb]/50 focus:ring-4 focus:ring-[#2563eb]/10 transition-all shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-slate-500">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="alex@yourpodcast.com"
                                            required
                                            className="bg-white border text-sm text-slate-900 border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#2563eb]/50 focus:ring-4 focus:ring-[#2563eb]/10 transition-all shadow-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1.5 mb-2">
                                        <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-slate-500">
                                            Podcast Link (YouTube / Spotify)
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.link}
                                            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                            placeholder="https://youtube.com/@yourpodcast"
                                            className="bg-white border text-sm text-slate-900 border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#2563eb]/50 focus:ring-4 focus:ring-[#2563eb]/10 transition-all shadow-sm"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#2563eb] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,99,235,0.25)] hover:bg-[#1d4ed8] transition-all duration-200"
                                    >
                                        Send Me the Free Audit Report →
                                    </button>

                                    <p className="text-slate-400 text-[12px] text-center mt-2 flex items-center justify-center gap-1.5 font-medium">
                                        <span className="text-[11px]">🔒</span> No spam. Just your report, within 24 hours.
                                    </p>
                                </form>
                            </>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-center gap-5">
                                <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-green-500 to-green-400 flex items-center justify-center text-white text-[36px] shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                                    ✓
                                </div>
                                <div>
                                    <h3 className="text-slate-900 text-[26px] md:text-[30px] font-extrabold mb-2 tracking-tight">
                                        You're all set, {formData.name.split(" ")[0]}!
                                    </h3>
                                    <p className="text-slate-600 text-[15px] leading-relaxed">
                                        Your personalized podcast audit is being prepared.<br />
                                        Expect it within <strong className="text-slate-900 font-semibold">24 hours</strong>.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-2 px-6 py-2.5 rounded-full border border-slate-200 text-slate-500 text-sm font-semibold hover:bg-slate-50 transition-colors"
                                >
                                    Submit another request
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
