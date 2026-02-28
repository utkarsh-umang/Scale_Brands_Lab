import React from 'react';
import { Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative bg-[#f8fafc] overflow-hidden">
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Background glow */}
      <div className="fixed -top-[30%] -right-[10%] w-[600px] h-[600px] pointer-events-none z-0 opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-[1100px] mx-auto relative z-10 bg-white border border-slate-200 rounded-[24px] overflow-hidden grid md:grid-cols-2 shadow-xl shadow-slate-200/50">

        {/* LEFT: Contact Form */}
        <div className="bg-white p-8 md:p-14 flex flex-col gap-8">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#2563eb] px-3.5 py-1.5 border border-[#2563eb]/20 rounded-full bg-blue-50">
              <span className="w-1.5 h-1.5 bg-[#2563eb] rounded-full shadow-[0_0_8px_#2563eb]" />
              Get In Touch
            </span>
          </div>

          <div>
            <h1 className="text-[clamp(2rem,3vw,2.6rem)] font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-2">
              Let's build<br />something <span className="text-[#2563eb]">great.</span>
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold tracking-[0.08em] uppercase text-slate-500">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Alex"
                  className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#2563eb]/40 focus:ring-4 focus:ring-[#2563eb]/5 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold tracking-[0.08em] uppercase text-slate-500">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Morgan"
                  className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#2563eb]/40 focus:ring-4 focus:ring-[#2563eb]/5 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold tracking-[0.08em] uppercase text-slate-500">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@company.com"
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#2563eb]/40 focus:ring-4 focus:ring-[#2563eb]/5 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold tracking-[0.08em] uppercase text-slate-500">I'm looking for</label>
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#2563eb]/40 focus:ring-4 focus:ring-[#2563eb]/5 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a service…</option>
                  <option value="Web Design & Development">Web Design & Development</option>
                  <option value="Brand Identity">Brand Identity</option>
                  <option value="Product Strategy">Product Strategy</option>
                  <option value="Consulting">Consulting</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold tracking-[0.08em] uppercase text-slate-500">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, timeline, and goals…"
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#2563eb]/40 focus:ring-4 focus:ring-[#2563eb]/5 transition-all min-h-[110px] resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-[#2563eb] text-white font-bold py-3.5 px-7 rounded-xl flex items-center justify-center gap-2.5 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,99,235,0.25)] hover:bg-[#1d4ed8] transition-all duration-200"
            >
              Send Message
              <Send className="w-4 h-4" strokeWidth={2.5} />
            </button>

            <div className="flex flex-col items-center gap-2 mt-2">
              <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">or</span>
              <a
                href="https://calendly.com/scale-brands-lab/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563eb] font-semibold hover:text-[#1d4ed8] hover:underline transition-colors"
              >
                Book the call yourself here
              </a>
            </div>
          </form>
        </div>

        {/* RIGHT: Workflow Panel */}
        <div className="bg-[#f1f5f9] p-8 md:p-14 flex flex-col gap-10 relative overflow-hidden border-l border-slate-200">
          {/* Subtle glow */}
          <div className="absolute -bottom-[80px] -left-[60px] w-[340px] h-[340px] pointer-events-none opacity-30"
            style={{ background: 'radial-gradient(circle, #bfdbfe 0%, transparent 70%)' }}
          />

          <div className="relative z-10 flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#2563eb] px-3.5 py-1.5 border border-[#2563eb]/10 rounded-full w-fit bg-blue-100/50">
              Our Process
            </span>
            <h2 className="text-[clamp(1.5rem,2.2vw,1.9rem)] font-extrabold text-slate-900 leading-tight">
              How we work<br />with you
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-[320px]">
              From first hello to final launch — a clear, collaborative process at every step.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-0">
            {[
              { id: '01', icon: '🔍', title: 'Discovery Call', desc: 'We start with a focused session to understand your goals, users, and constraints — no templates, just listening.', badge: '15 mins' },
              { id: '02', icon: '🧩', title: 'Strategy & Planning', desc: 'We map out the scope, timelines, and deliverables in a shared roadmap you can track in real time.', badge: '3–5 days' },
              { id: '03', icon: '⚡', title: 'Design & Build', desc: "Iterative sprints with regular check-ins so you're always in the loop — no black-box surprises.", badge: '2–6 weeks' },
              { id: '04', icon: '🚀', title: 'Launch & Support', desc: 'We handle deployment, QA, and stay on hand for 30 days post-launch to make sure everything holds.', badge: 'Ongoing' },
            ].map((step, idx) => (
              <div
                key={step.id}
                className="group flex gap-5 pb-8 last:pb-0 relative animate-slide-in"
                style={{ animationDelay: `${0.1 + idx * 0.12}s`, opacity: 0 }}
              >
                {/* Vertical Connector */}
                {idx !== 3 && (
                  <div className="absolute top-[44px] left-[19px] w-[2px] h-[calc(100%-12px)] bg-gradient-to-b from-[#2563eb]/20 to-[#2563eb]/5" />
                )}

                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#2563eb]/15 flex items-center justify-center text-[18px] group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all shadow-sm">
                    {step.icon}
                  </div>
                  <span className="absolute -top-1 -right-1.5 w-[18px] h-[18px] rounded-full bg-white border border-[#2563eb] text-[9px] font-bold text-[#2563eb] flex items-center justify-center">
                    {step.id}
                  </span>
                </div>

                <div className="pt-1.5 flex flex-col gap-1">
                  <div className="text-[15px] font-bold text-slate-900">{step.title}</div>
                  <div className="text-[13px] text-slate-600 leading-relaxed">{step.desc}</div>
                  <span className="mt-2 w-fit px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/50 text-[10px] font-bold uppercase tracking-wider text-[#2563eb]">
                    {step.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-auto grid grid-cols-3 bg-slate-200/50 border border-slate-200/50 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-white p-4 text-center border-r border-slate-200/50">
              <div className="text-[1.4rem] font-extrabold text-[#2563eb]">98%</div>
              <div className="text-[11px] text-slate-500">On-time delivery</div>
            </div>
            <div className="bg-white p-4 text-center border-r border-slate-200/50">
              <div className="text-[1.4rem] font-extrabold text-[#2563eb]">200+</div>
              <div className="text-[11px] text-slate-500">Projects shipped</div>
            </div>
            <div className="bg-white p-4 text-center">
              <div className="text-[1.4rem] font-extrabold text-[#2563eb]">48h</div>
              <div className="text-[11px] text-slate-500">Response time</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
