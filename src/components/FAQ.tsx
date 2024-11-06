import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What happens after I pay?",
    answer: "You will get all the onboarding details and we start the project soon after"
  },
  {
    question: "How do we communicate?",
    answer: "We do all the communication on Slack. Our editors and managers are always ready to answer your questions."
  },
  {
    question: "Can i request custom edits? If yes how do I do that?",
    answer: "Yes! you can request custom edits, just put the request in Slack and our managers will take care of it."
  },
  {
    question: "Do you only do short-form vidoes?",
    answer: "That's what we do the best but our video artists can get any job done. Book a call for custom requirements."
  },
  {
    question: "Is there a guarantee for my growth?",
    answer: "There is no refund guarantee but with our track record in mind, we will beat your existing results by a huge margin."
  },
  {
    question: "If I cancel do I get a refund?",
    answer: "Once you are onboarded and the process is started you are not eligible for refunds for the existing month but we will pause your subscription when the month ends until you want to start again."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 text-left">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border border-gray-100 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Book a Free Call
          </button>
        </div>
      </div>
    </section>
  );
}