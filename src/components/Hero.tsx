import React from 'react';
import { ArrowRight, Users, Award, BookOpen, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#28C76F]/10 via-white to-[#28C76F]/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Find Your Perfect
              <span className="text-[#28C76F] block">College Match</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Get personalized college recommendations, real student mentorship, and career guidance designed for 12th-pass students across India.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-[#28C76F] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#20B45F] hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Start Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-[#28C76F] text-[#28C76F] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#28C76F] hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
                Book Mentorship
                <Users className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#28C76F]" />
                <span>10,000+ Students Guided</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#28C76F]" />
                <span>500+ Colleges Listed</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#28C76F]" />
                <span>100+ Courses Covered</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl bg-gradient-to-br from-[#28C76F]/20 via-blue-50 to-purple-50 flex items-center justify-center overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-[#28C76F]/20 rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-blue-400/20 rounded-full"></div>
              <div className="absolute top-1/3 right-4 w-8 h-8 bg-purple-400/20 rounded-full"></div>
              
              {/* Central Illustration */}
              <div className="text-center">
                <div className="w-32 h-32 bg-[#28C76F]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <GraduationCap className="w-16 h-16 text-[#28C76F]" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-[#28C76F]/30 rounded-full w-24 mx-auto"></div>
                  <div className="h-3 bg-blue-400/30 rounded-full w-32 mx-auto"></div>
                  <div className="h-3 bg-purple-400/30 rounded-full w-20 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;