import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does the college recommendation system work?',
      answer: 'Our AI-powered system analyzes your academic performance, preferences, location, budget, and career goals to suggest the most suitable colleges and courses. The free version provides basic recommendations, while the premium version offers detailed analysis including admission probability, fee comparison, and placement statistics.'
    },
    {
      question: 'What makes your mentorship different from other platforms?',
      answer: 'Our mentors are current students from the colleges you\'re interested in, not just career counselors. They provide authentic, real-time insights about college life, academics, campus culture, and practical tips that you won\'t find in brochures or websites.'
    },
    {
      question: 'Is the free college recommendation really free? Any hidden charges?',
      answer: 'Yes, our basic college recommendation service is completely free with no hidden charges. You get access to our college database, basic recommendations, and course compatibility checks without paying anything. Premium features require payment for enhanced analysis.'
    },
    {
      question: 'How quickly can I get mentorship sessions scheduled?',
      answer: 'Most mentorship sessions can be scheduled within 24-48 hours based on mentor availability. We have a network of student mentors across different colleges and time zones to accommodate your schedule, including evenings and weekends.'
    },
    {
      question: 'Do you cover colleges across all states in India?',
      answer: 'Yes, we cover colleges across all states and union territories in India, including central universities, state universities, private institutions, and deemed universities. Our database includes over 500+ colleges across various streams like Engineering, Medical, Commerce, Arts, and more.'
    },
    {
      question: 'What if I\'m not satisfied with the recommendations or mentorship?',
      answer: 'We offer a satisfaction guarantee. If you\'re not happy with our premium recommendations within 7 days, we provide a full refund. For mentorship sessions, if you\'re not satisfied, we\'ll connect you with another mentor at no additional cost.'
    }
  ];

  return (
    <section id="faqs" className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Everything you need to know about our services and how we can help you.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 lg:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-[#28C76F] transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-6 lg:px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-[#28C76F]/10 to-[#28C76F]/5 rounded-3xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you make the right decision for your future.
          </p>
          <button className="bg-[#28C76F] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#20B45F] hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;