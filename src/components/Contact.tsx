import React from 'react';
import { Send } from 'lucide-react';
import { sendSlackNotification } from '../utils/slack';
import {
  validateEmail,
  validateName,
  validateMessage,
  isLikelyBot,
  sanitizeForSlack,
} from '../utils/formValidation';
import Footer from './Footer';

type FormField = 'firstName' | 'lastName' | 'email' | 'service' | 'message';
type FormErrors = Partial<Record<FormField, string>>;

const EMPTY_FORM = { firstName: '', lastName: '', email: '', service: '', message: '' };

function validateForm(data: typeof EMPTY_FORM): FormErrors {
  const errors: FormErrors = {};
  const firstName = validateName(data.firstName, 'First name');
  const lastName = validateName(data.lastName, 'Last name');
  const email = validateEmail(data.email);
  const message = validateMessage(data.message);
  if (firstName) errors.firstName = firstName;
  if (lastName) errors.lastName = lastName;
  if (email) errors.email = email;
  if (!data.service) errors.service = 'Please select a service.';
  if (message) errors.message = message;
  return errors;
}

export default function ContactPage() {
  const [formData, setFormData] = React.useState(EMPTY_FORM);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [submitting, setSubmitting] = React.useState(false);
  // Spam traps: hidden honeypot field + time since form was rendered
  const [honeypot, setHoneypot] = React.useState('');
  const formLoadedAt = React.useRef(Date.now());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as FormField;
    setFormData({
      ...formData,
      [name]: e.target.value
    });
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    // Silently drop bot submissions — pretend success so bots don't adapt
    if (isLikelyBot(honeypot, formLoadedAt.current)) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData(EMPTY_FORM);
      return;
    }

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Create Slack message
    const slackMessage = `🚀 *New Contact Form Submission*\n\n` +
      `*Name:* ${sanitizeForSlack(formData.firstName)} ${sanitizeForSlack(formData.lastName)}\n` +
      `*Email:* ${sanitizeForSlack(formData.email)}\n` +
      `*Service:* ${sanitizeForSlack(formData.service)}\n` +
      `*Message:* ${sanitizeForSlack(formData.message)}`;

    setSubmitting(true);
    const success = await sendSlackNotification('contact', slackMessage);
    setSubmitting(false);

    if (success) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData(EMPTY_FORM);
      formLoadedAt.current = Date.now();
    } else {
      alert('Something went wrong sending your message. Please try again, or book a call using the link below.');
    }
  };

  const fieldClass = (field: FormField) =>
    `bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:ring-4 transition-all ${
      errors[field]
        ? 'border-red-400 focus:border-red-400 focus:ring-red-500/10'
        : 'border-slate-200 focus:border-[#2563eb]/40 focus:ring-[#2563eb]/5'
    }`;

  const fieldError = (field: FormField) =>
    errors[field] ? <p className="text-[12px] text-red-500">{errors[field]}</p> : null;

  return (
    <>
      <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative bg-[#f8fafc] overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Background glow */}
        <div
          className="absolute -top-[30%] -right-[10%] w-[600px] h-[600px] pointer-events-none z-0 opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)'
          }}
        />

        <div className="max-w-[1280px] w-full mx-auto mt-8 md:mt-12 relative z-10 bg-white border border-slate-200 rounded-[24px] overflow-hidden grid md:grid-cols-2 shadow-xl shadow-slate-200/50">

          {/* LEFT: Contact Form */}
          <div className="bg-white p-8 md:p-14 flex flex-col gap-8">
            <div>
              <h1 className="text-[clamp(2rem,3vw,2.6rem)] font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-2">
                Let's build<br />something <span className="text-[#2563eb]">great.</span>
              </h1>
            </div>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 flex-1">
              {/* Honeypot: hidden from humans, bots tend to fill it */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] w-px h-px opacity-0"
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold tracking-[0.08em] uppercase text-slate-500">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Alex"
                    maxLength={50}
                    autoComplete="given-name"
                    aria-invalid={!!errors.firstName}
                    className={fieldClass('firstName')}
                  />
                  {fieldError('firstName')}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold tracking-[0.08em] uppercase text-slate-500">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Morgan"
                    maxLength={50}
                    autoComplete="family-name"
                    aria-invalid={!!errors.lastName}
                    className={fieldClass('lastName')}
                  />
                  {fieldError('lastName')}
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
                  maxLength={254}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  className={fieldClass('email')}
                />
                {fieldError('email')}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold tracking-[0.08em] uppercase text-slate-500">I'm looking for</label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    aria-invalid={!!errors.service}
                    className={`w-full appearance-none cursor-pointer ${fieldClass('service')}`}
                  >
                    <option value="" disabled>Select a service…</option>
                    <option value="Content Production and Marketing">Content Production and Marketing</option>
                    <option value="AI Software Solution">AI Software Solution</option>
                    <option value="Email Marketing">Email Marketing</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                {fieldError('service')}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold tracking-[0.08em] uppercase text-slate-500">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, timeline, and goals…"
                  maxLength={3000}
                  aria-invalid={!!errors.message}
                  className={`min-h-[110px] resize-none ${fieldClass('message')}`}
                />
                {fieldError('message')}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 w-full bg-[#2563eb] text-white font-bold py-3.5 px-7 rounded-xl flex items-center justify-center gap-2.5 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,99,235,0.25)] hover:bg-[#1d4ed8] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {submitting ? 'Sending…' : 'Send Message'}
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
              <h2 className="text-[clamp(1.5rem,2.2vw,1.9rem)] font-extrabold text-slate-900 leading-tight">
                How we work with you
              </h2>
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
      <Footer />
    </>
  );
}
