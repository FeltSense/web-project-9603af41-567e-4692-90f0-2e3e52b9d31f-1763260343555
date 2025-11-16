'use client';

import { Users, TrendingUp, MapPin, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Social Discovery',
      description: 'Connect with food enthusiasts and build a loyal community. Share your culinary journey through engaging stories, photos, and reviews that attract new customers.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    },
    {
      icon: TrendingUp,
      title: 'Growth Analytics',
      description: 'Track your restaurant\'s performance with real-time insights. Understand customer preferences, peak hours, and trending dishes to optimize your business strategy.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
    {
      icon: MapPin,
      title: 'Location-Based Marketing',
      description: 'Reach customers in your area with geo-targeted promotions. Increase foot traffic with smart notifications and special offers for nearby food lovers.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    {
      icon: Award,
      title: 'Reputation Management',
      description: 'Build trust with verified reviews and ratings. Respond to feedback, showcase your best dishes, and maintain a stellar reputation in the dining community.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Grow Your Restaurant Business
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to attract customers, build community, and scale your restaurant through the power of social discovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}