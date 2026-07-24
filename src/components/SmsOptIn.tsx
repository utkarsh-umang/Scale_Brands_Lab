import React from 'react';
import { Send } from 'lucide-react';
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

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Get Text Updates</h1>
          <p className="text-slate-600 mb-8">
            Opt in to receive text messages from ScaleBrandsLab about your account, service
            updates, and offers.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold tracking-[0.08em] uppercase text-slate-500">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
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
                  className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#2563eb]/40 focus:ring-4 focus:ring-[#2563eb]/5 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold tracking-[0.08em] uppercase text-slate-500">Mobile Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                required
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#2563eb]/40 focus:ring-4 focus:ring-[#2563eb]/5 transition-all"
              />
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

            {/* Explicit, un-pre-checked consent — required for A2P 10DLC */}
            <label className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 flex-shrink-0 accent-[#2563eb]"
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
              className="mt-1 w-full bg-[#2563eb] text-white font-bold py-3.5 px-7 rounded-xl flex items-center justify-center gap-2.5 hover:-translate-y-0.5 hover:bg-[#1d4ed8] transition-all duration-200"
            >
              Opt In to Text Messages
              <Send className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
