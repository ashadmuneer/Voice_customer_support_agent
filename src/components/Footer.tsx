import React from 'react';
import { GraduationCap, Mail, Phone, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' }
  ];

  const services = [
    { name: 'College Recommendations', href: '#recommendations' },
    { name: 'Student Mentorship', href: '#mentorship' },
    { name: 'Career Counseling', href: '#counseling' },
    { name: 'Scholarship Assistance', href: '#scholarships' },
    { name: 'Admission Guidance', href: '#admission' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: MessageCircle, href: '#', name: 'WhatsApp' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#28C76F] to-[#20B45F] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Know Your Colleges</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering 12th-pass students across India to make informed decisions about their college and career journey with personalized guidance and real student insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#28C76F] transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#28C76F] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-[#28C76F] transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#28C76F]" />
                <a
                  href="mailto:hello@knowyourcolleges.com"
                  className="text-gray-300 hover:text-[#28C76F] transition-colors duration-200"
                >
                  hello@knowyourcolleges.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#28C76F]" />
                <a
                  href="tel:+918888888888"
                  className="text-gray-300 hover:text-[#28C76F] transition-colors duration-200"
                >
                  +91 88888 88888
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#28C76F]" />
                <span className="text-gray-300">
                  WhatsApp Support Available
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 focus:border-[#28C76F] focus:outline-none text-white placeholder-gray-400"
                />
                <button className="bg-[#28C76F] px-4 py-2 rounded-xl hover:bg-[#20B45F] transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Know Your Colleges. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-[#28C76F] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-[#28C76F] transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-[#28C76F] transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;