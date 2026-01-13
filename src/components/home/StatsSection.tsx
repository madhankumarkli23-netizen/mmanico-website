'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Award, Users, Shield } from 'lucide-react';

const stats = [
  {
    icon: CheckCircle2,
    value: '100+',
    label: 'Engagements Completed',
    sublabel: 'as per internal records',
    color: 'text-primary-700',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-100',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years in Practice',
    sublabel: 'since establishment',
    color: 'text-primary-700',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-100',
  },
  {
    icon: Users,
    value: '50+',
    label: 'Active Client Base',
    sublabel: 'currently engaged',
    color: 'text-primary-700',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-100',
  },
  {
    icon: Shield,
    value: 'Focus',
    label: 'Regulatory Compliance',
    sublabel: 'adherence to standards',
    color: 'text-primary-700',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-100',
  },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-neutral-50 relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 border border-primary-200 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary-800">Our Practice</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Professional Standards
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Service delivery aligned with professional ethics and regulatory requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group relative ${stat.bgColor} rounded-xl p-8 text-center border ${stat.borderColor} hover:shadow-md transition-all duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white border border-primary-200 shadow-sm mb-6">
                    <Icon className={`w-7 h-7 ${stat.color}`} />
                  </div>

                  {/* Value */}
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <p className="text-neutral-900 font-semibold mb-1">
                    {stat.label}
                  </p>

                  {/* Sublabel */}
                  <p className="text-xs text-neutral-500 italic">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Values */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Integrity</h3>
            <p className="text-sm text-neutral-600">Adherence to professional ethics and transparent conduct in all engagements</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Confidentiality</h3>
            <p className="text-sm text-neutral-600">Strict protection of client information in accordance with professional standards</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Due Care</h3>
            <p className="text-sm text-neutral-600">Diligent application of professional knowledge and compliance with applicable standards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
