import React from 'react';
import { Search, Users, Compass, DollarSign, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'College Recommendations',
      description: 'Get personalized college suggestions based on your academic performance, preferences, and career goals. Free basic recommendations or detailed premium analysis.',
      features: ['AI-powered matching', 'Course compatibility', 'Location preferences', 'Fee structure analysis'],
      cta: 'Get Recommendations'
    },
    {
      icon: Users,
      title: 'Real Student Mentorship',
      description: 'Connect with current students from your target colleges through 15-20 minute chat or video sessions to get authentic insights about college life.',
      features: ['Current student mentors', '15-20 min sessions', 'College insider tips', 'Course experience sharing'],
      cta: 'Book Mentorship'
    },
    {
      icon: Compass,
      title: 'Career & Course Counseling',
      description: 'Receive personalized 30-minute career guidance sessions to align your course choice with your long-term career aspirations and market trends.',
      features: ['Career path mapping', 'Industry insights', 'Skill requirement analysis', 'Job market trends'],
      cta: 'Book Counseling'
    },
    {
      icon: DollarSign,
      title: 'Scholarship Assistance',
      description: 'Get expert help with scholarship applications including NSP, PM Scholarship, and state-level aid programs to reduce your education costs.',
      features: ['Application guidance', 'Document preparation', 'Deadline tracking', 'Eligibility assessment'],
      cta: 'Learn More'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support for your college journey, from selection to admission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#28C76F] to-[#20B45F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#28C76F] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full border-2 border-[#28C76F] text-[#28C76F] py-3 rounded-2xl font-semibold hover:bg-[#28C76F] hover:text-white transition-all duration-200 flex items-center justify-center gap-2 group-hover:gap-3">
                  {service.cta}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;