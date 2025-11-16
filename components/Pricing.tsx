'use client';

import { Check, Zap, Crown, Rocket } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: 'Free',
      period: 'forever',
      description: 'Perfect for new restaurants testing the waters',
      features: [
        'Basic profile listing',
        'Up to 50 menu items',
        'Customer reviews',
        'Mobile app access',
        'Email support',
      ],
      cta: 'Start Free',
      href: '#signup',
      popular: false,
    },
    {
      name: 'Professional',
      icon: Crown,
      price: '$29',
      period: 'per month',
      description: 'Everything you need to grow your restaurant',
      features: [
        'Everything in Starter',
        'Unlimited menu items',
        'Social discovery features',
        'Advanced analytics dashboard',
        'Location-based marketing',
        'Priority support',
        'Custom branding',
        'Review management tools',
      ],
      cta: 'Get Started',
      href: 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00',
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: Rocket,
      price: 'Custom',
      period: 'contact us',
      description: 'For restaurant chains and large operations',
      features: [
        'Everything in Professional',
        'Multi-location management',
        'API access',
        'White-label solutions',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      href: '#contact',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Choose the perfect plan for your restaurant. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-2xl scale-105 border-4 border-orange-300'
                    : 'bg-white text-gray-900 shadow-lg hover:shadow-xl border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    plan.popular ? 'bg-white/20' : 'bg-gradient-to-br from-orange-500 to-red-600'
                  }`}>
                    <Icon className={plan.popular ? 'text-white' : 'text-white'} size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm ${
                    plan.popular ? 'text-orange-100' : 'text-gray-600'
                  }`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className={`ml-2 ${
                        plan.popular ? 'text-orange-100' : 'text-gray-600'
                      }`}>
                        /{plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className={`mr-3 flex-shrink-0 ${
                        plan.popular ? 'text-orange-200' : 'text-orange-600'
                      }`} size={20} />
                      <span className={plan.popular ? 'text-orange-50' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  className={`block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-orange-600 hover:bg-orange-50 shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-xl hover:scale-105'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center">
              <Check className="text-green-600 mr-2" size={20} />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <Check className="text-green-600 mr-2" size={20} />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <Check className="text-green-600 mr-2" size={20} />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}