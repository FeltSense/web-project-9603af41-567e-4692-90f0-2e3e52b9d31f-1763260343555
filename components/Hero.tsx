'use client';

import { ArrowRight, Smartphone, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>

      <div className="container mx-auto px-6 z-10 pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <TrendingUp className="text-orange-400" size={20} />
            <span className="text-white text-sm font-medium">Join 10,000+ Restaurants Growing Daily</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Discover Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Next Favorite
            </span>
            Restaurant
          </h1>

          <p className="text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
            Connect food lovers with exceptional dining experiences. Share, discover, and grow your restaurant business through social discovery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#signup"
              className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-5 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20"
            >
              <Smartphone size={20} />
              <span>Download App</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-300 text-sm">Active Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500K+</div>
              <div className="text-gray-300 text-sm">Food Lovers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-gray-300 text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}