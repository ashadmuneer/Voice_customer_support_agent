import React from 'react';
import { Check, Star, Zap, Crown, Users } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic College Recommendation',
      price: 'Free',
      description: 'Perfect for getting started with college exploration',
      features: [
        'Basic college recommendations',
        'Course compatibility check',
        'General admission requirements',
        'Email support',
        'Access to college database'
      ],
      cta: 'Start Free',
      popular: false,
      icon: Star
    },
    {
      name: 'Premium Recommendation',
      price: '₹499',
      originalPrice: '₹999',
      description: 'Comprehensive analysis for serious college seekers',
      features: [
        'Detailed college analysis',
        'Personalized course recommendations',
        'Admission probability calculator',
        'Fee structure comparison',
        'Placement statistics',
        'Priority support'
      ],
      cta: 'Get Premium',
      popular: true,
      icon: Zap
    },
    {
      name: 'Mentorship Session',
      price: '₹299',
      duration: '/session',
      description: 'One-on-one guidance from current students',
      features: [
        '15-20 minute session',
        'Current student mentor',
        'College insider insights',
        'Course experience sharing',
        'Campus life guidance',
        'Flexible scheduling'
      ],
      cta: 'Book Session',
      popular: false,
      icon: Users
    },
    {
      name: 'Career Counseling',
      price: '₹499',
      duration: '/session',
      description: 'Professional career guidance for long-term success',
      features: [
        '30-minute expert session',
        'Career path mapping',
        'Industry insights',
        'Skill requirement analysis',
        'Job market trends',
        'Personalized roadmap'
      ],
      cta: 'Book Counseling',
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start with our free plan and upgrade as you need more personalized guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border-2 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-[#28C76F] ring-4 ring-[#28C76F]/10' 
                    : 'border-gray-100 hover:border-[#28C76F]/30'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#28C76F] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#28C76F] to-[#20B45F] rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-3xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.duration && (
                      <span className="text-gray-600">{plan.duration}</span>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-[#28C76F] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button 
                  className={`w-full py-3 rounded-2xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-[#28C76F] text-white hover:bg-[#20B45F] hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'border-2 border-[#28C76F] text-[#28C76F] hover:bg-[#28C76F] hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which plan is right for you?
          </p>
          <button className="text-[#28C76F] font-semibold hover:underline">
            Schedule a free consultation call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;