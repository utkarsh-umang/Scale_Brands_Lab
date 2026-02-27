import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: "Can you post my content too?",
    answer: "Yes. We have the ability to post for you on YouTube, Instagram, Facebook TikTok, Rumble and X (formerly Twitter)."
  },
  {
    question: "What's the next step once I decide on a package?",
    answer: "Once you choose a package, you'll be directed to a checkout page. After payment, you'll receive an onboarding email to join your dedicated Slack channel."
  },
  {
    question: "What's my ROI?",
    answer: "Our clients typically see a 3-5x increase in engagement and reach, which translates to more leads, sponsorship opportunities, and brand authority."
  },
  {
    question: "How do I cancel if I don't like it?",
    answer: "You can cancel anytime through your dashboard or by notifying your account manager in Slack. We offer a no-questions-asked cancellation policy."
  },
  {
    question: "Why would I choose ScaleBrandsLab over someone else?",
    answer: "We don't just edit videos; we build viral content machines. Our editors are trained in high-retention storytelling specifically for short-form platforms."
  },
  {
    question: "Why wouldn't I just hire my own editors?",
    answer: "Hiring internally involves overhead, management, and quality control. With us, you get a vetted team, a dedicated manager, and a proven system for a fraction of the cost."
  },
  {
    question: "How long does it take to edit a video?",
    answer: "Our standard turnaround time is 48 hours for short-form clips. Complex projects may take slightly longer, but we prioritize speed without compromising quality."
  },
  {
    question: "What's the onboarding process like?",
    answer: "It's simple: Join Slack, fill out a brief creative questionnaire, and upload your raw footage. We'll match you with the perfect editor and start within 24 hours."
  },
  {
    question: "Will you help me do my YouTube videos and all of my post production too? (Thumbnails, Titles etc)",
    answer: "Yes! Depending on your plan, we handle everything from basic editing to high-CTR thumbnails, SEO-optimized titles, and full platform distribution."
  },
  {
    question: "What if I need or want to make changes to a video?",
    answer: "We offer revisions on every video. Just leave a comment in the delivery thread on Slack, and your editor will make the adjustments promptly."
  },
  {
    question: "How do you get my content to edit it?",
    answer: "You can share your raw files via Google Drive, Dropbox, or Frame.io. We provide clear instructions on the best way to organize your footage for us."
  },
  {
    question: "Do you guarantee me growth?",
    answer: "While we can't control the algorithms, we guarantee that our high-retention editing techniques will significantly improve your chances of going viral."
  },
  {
    question: "Can I try it for 1 month only?",
    answer: "Absolutely. We don't enforce long-term contracts. You can try our service for a single month and see the results for yourself before committing further."
  },
  {
    question: "Do you only do shorts?",
    answer: "Short-form is our focus because of its viral potential, but we also handle long-form YouTube editing, podcast highlights, and course content."
  },
  {
    question: "What if I don't like the videos?",
    answer: "We strive for perfection. If a video doesn't meet your expectations, we’ll work through revisions until you’re 100% satisfied with the final result."
  },
  {
    question: "Do I have to tell you what to cut from my footage?",
    answer: "Nope! Our editors are trained to identify the most engaging parts of your footage. You just provide the raw file, and we do the \"hook\" discovery for you."
  },
  {
    question: "Do you cut samples?",
    answer: "Yes, we can provide a sample edit for qualified clients to demonstrate our style and quality before you commit to a full package."
  },
  {
    question: "What do the \"hour blocks\" mean in the pricing structure?",
    answer: "Hour blocks represent the amount of raw footage processed per month. This allows for flexibility across different content types and lengths."
  },
  {
    question: "Can I post my own content if I want to?",
    answer: "Of course! We can provide you with the final files for manual posting, or we can handle the entire distribution process for you—whichever you prefer."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftColumnFaqs = faqs.slice(0, 9);
  const rightColumnFaqs = faqs.slice(9);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft glow to maintain consistency with Hero/Services */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">
            Commonly Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Everything you need to know about scaling your content with ScaleBrandsLab.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-8 max-w-[1200px] mx-auto items-start">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumnFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-[12px] overflow-hidden transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-md hover:bg-gray-100/50`}
                >
                  <button
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className={`text-lg md:text-[20px] font-bold text-[#1a1a1a] leading-[1.2]`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 ml-4 transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-400'}`}>
                      {isOpen ? (
                        <X className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6 mt-[-4px]">
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumnFaqs.map((faq, index) => {
              const actualIndex = index + 9;
              const isOpen = openIndex === actualIndex;
              return (
                <div
                  key={actualIndex}
                  className={`bg-gray-50 rounded-[12px] overflow-hidden transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-md hover:bg-gray-100/50`}
                >
                  <button
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : actualIndex)}
                  >
                    <span className={`text-lg md:text-[20px] font-bold text-[#1a1a1a] leading-[1.2]`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 ml-4 transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-400'}`}>
                      {isOpen ? (
                        <X className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6 mt-[-4px]">
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}