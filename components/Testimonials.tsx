'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Head Chef & Owner',
      restaurant: 'Sabor Latino',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      quote: 'FlavorHub transformed our business. We\'ve seen a 300% increase in new customers through social discovery. The platform is intuitive and our community loves it!',
    },
    {
      name: 'James Chen',
      role: 'Restaurant Manager',
      restaurant: 'Urban Bites',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      quote: 'The analytics dashboard helped us understand our customers better. We optimized our menu based on trending dishes and doubled our revenue in 6 months.',
    },
    {
      name: 'Sophie Anderson',
      role: 'Co-Founder',
      restaurant: 'The Green Kitchen',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'As a new restaurant, building visibility was challenging. FlavorHub\'s social features helped us build a loyal community from day one. Highly recommended!',
    },
    {
      name: 'David Kim',
      role: 'Executive Chef',
      restaurant: 'Fusion Delights',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote: 'The location-based marketing brought customers right to our door. Our lunch rush increased by 150% after implementing targeted promotions.',
    },
    {
      name: 'Emma Thompson',
      role: 'Owner & Sommelier',
      restaurant: 'Wine & Dine',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'Managing reviews and customer feedback has never been easier. The reputation management tools helped us maintain our 5-star rating consistently.',
    },
    {
      name: 'Carlos Martinez',
      role: 'Head of Operations',
      restaurant: 'Taco Fiesta',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      quote: 'FlavorHub is more than a platform—it\'s a growth partner. The team support is exceptional, and the features keep getting better. Worth every penny!',
    },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
            <Star className="text-orange-600" size={20} fill="currentColor" />
            <span className="text-orange-600 font-semibold">Trusted by Top Restaurants</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Hear from restaurant owners who transformed their businesses with FlavorHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <Quote className="text-orange-600" size={20} />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-orange-500" size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{member.quote}"</p>
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.restaurant}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}