'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#services' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Download App', href: '#signup' },
      { name: 'API Documentation', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press Kit', href: '#' },
    ],
    Resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Success Stories', href: '#team' },
      { name: 'Community', href: '#' },
      { name: 'Webinars', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-white">FlavorHub</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering restaurants to grow through social discovery. Connect with food lovers and build your culinary empire.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="text-orange-500" size={20} />
              <span className="text-gray-400">hello@flavorhub.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-orange-500" size={20} />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-orange-500" size={20} />
              <span className="text-gray-400">San Francisco, CA</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} FlavorHub. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}