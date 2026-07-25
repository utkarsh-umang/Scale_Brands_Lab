import React from 'react';
import { Send, Bell, MessageSquare, Tag, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sendSlackNotification } from '../utils/slack';
import Footer from './Footer';

export default function SmsOptIn() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const [consent, setConsent] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!consent) {
      setError('Please check the consent box to opt in to text messages.');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Please enter a valid mobile phone number.');
      return;
    }

    const slackMessage =
      `📲 *New SMS Opt-In*\n\n` +
      `*Name:* ${formData.firstName} ${formData.lastName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Consent:* YES — explicitly opted in via /sms-opt-in`;

    const webhookUrl = import.meta.env.VITE_SLACK_CONTACT_WEBHOOK_URL;
    await sendSlackNotification(slackMessage, webhookUrl);

    alert('Thank you! You have opted in to receive text messages from ScaleBrandsLab. Reply STOP at any time to unsubscribe.');
    setFormData({ firstName: '', lastName: '', phone: '', email: '' });
    setConsent(false);
  };

  const inputClass =
    'bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#2563eb]/40 focus:ring-4 focus:ring-[#2563eb]/5 transition-all';
  const labelClass =
    'text-[12px] font-semibold tracking-[0.08em] uppercase text-slate-500';

  const perks = [
    { icon: Bell, title: 'Account alerts', desc: 'Timely notifications about your account and orders.' },
    { icon: MessageSquare, title: 'Service updates', desc: 'Important changes and progress on your projects.' },
    { icon: Tag, title: 'Offers you opted into', desc: 'Occasional promotions — only if you agree to them.' },
  ];

  return (
    <>
      <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative bg-[#f8fafc] overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Background glow */}
        <div
          className="absolute -top-[30%] -right-[10%] w-[600px] h-[600px] pointer-events-none z-0 opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
        />

        <div className="max-w-[1080px] w-full mx-auto mt-8 md:mt-12 relative z-10 bg-white border border-slate-200 rounded-[24px] overflow-hidden grid md:grid-cols-[1.1fr_0.9fr] shadow-xl shadow-slate-200/50">

          {/* LEFT: Opt-in form */}
          <div className="bg-white p-8 md:p-12 flex flex-col gap-7">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/50 text-[11px] font-bold uppercase tracking-wider text-[#2563eb] mb-4">
                <MessageSquare className="w-3 h-3" strokeWidth={2.5} /> SMS Updates
              </span>
              <h1 className="text-[clamp(1.9rem,3vw,2.4rem)] font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-2">
                Get text updates
              </h1>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Opt in to receive text messages from ScaleBrandsLab about your account,
                service updates, and offers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Alex" required className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Morgan" className={inputClass} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Mobile Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" required className={inputClass} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="hello@company.com" className={inputClass} />
              </div>

              {/* Explicit, un-pre-checked consent — required for A2P 10DLC */}
              <label className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-slate-300 transition-colors">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#2563eb]"
                />
                <span className="text-[13px] leading-relaxed text-slate-600">
                  By checking this box, I agree to receive recurring text messages (SMS) from
                  ScaleBrandsLab at the mobile number provided. Message frequency varies. Message
                  and data rates may apply. Reply <strong>STOP</strong> to unsubscribe or{' '}
                  <strong>HELP</strong> for help. Consent is not a condition of purchase. See our{' '}
                  <Link to="/privacy-policy" className="text-[#2563eb] underline">Privacy Policy</Link> and{' '}
                  <Link to="/terms-of-service" className="text-[#2563eb] underline">Terms of Service</Link>.
                </span>
              </label>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                className="mt-1 w-full bg-[#2563eb] text-white font-bold py-3.5 px-7 rounded-xl flex items-center justify-center gap-2.5 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,99,235,0.25)] hover:bg-[#1d4ed8] transition-all duration-200"
              >
                Opt In to Text Messages
                <Send className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </form>
          </div>

          {/* RIGHT: What to expect panel */}
          <div className="bg-[#f1f5f9] p-8 md:p-12 flex flex-col gap-8 relative overflow-hidden border-l border-slate-200">
            <div
              className="absolute -bottom-[80px] -left-[60px] w-[340px] h-[340px] pointer-events-none opacity-30"
              style={{ background: 'radial-gradient(circle, #bfdbfe 0%, transparent 70%)' }}
            />

            <div className="relative z-10">
              <h2 className="text-[clamp(1.3rem,2vw,1.6rem)] font-extrabold text-slate-900 leading-tight">
                What you'll get
              </h2>
            </div>

            <div className="relative z-10 flex flex-col gap-5">
              {perks.map((perk) => (
                <div key={perk.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#2563eb]/15 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <perk.icon className="w-[18px] h-[18px] text-[#2563eb]" strokeWidth={2} />
                  </div>
                  <div className="pt-0.5">
                    <div className="text-[15px] font-bold text-slate-900">{perk.title}</div>
                    <div className="text-[13px] text-slate-600 leading-relaxed">{perk.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-auto flex items-start gap-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <p className="text-[13px] text-slate-600 leading-relaxed">
                Your number stays private. We never sell or share it, and you can text{' '}
                <strong>STOP</strong> to unsubscribe at any time.
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
