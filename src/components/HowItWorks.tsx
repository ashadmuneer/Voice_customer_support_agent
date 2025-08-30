import React from 'react';
import { User, Search, Users, FileCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      title: 'Profile Assessment',
      description: 'Enter your marks, preferences, and interests to create your personalized profile.',
      step: '01'
    },
    {
      icon: Search,
      title: 'College Recommendations',
      description: 'Get curated college and course suggestions based on your profile and goals.',
      step: '02'
    },
    {
      icon: Users,
      title: 'Real Student Mentorship',
      description: 'Connect with current students from your target colleges for insider insights.',
      step: '03'
    },
    {
      icon: FileCheck,
      title: 'Admission Guidance',
      description: 'Receive step-by-step support through the application and admission process.',
      step: '04'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our simple 4-step process helps you find the perfect college and course for your future career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Connector Line (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-6 h-0.5 bg-gradient-to-r from-[#28C76F] to-[#28C76F]/30 transform translate-x-2"></div>
                )}
                
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                  {/* Step Number */}
                  <div className="text-[#28C76F]/20 text-6xl font-bold absolute top-4 right-6">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#28C76F] to-[#20B45F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;