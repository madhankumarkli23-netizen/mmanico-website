'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Award, Users, Shield } from 'lucide-react';

const stats = [
  {
    icon: CheckCircle2,
    value: '100+',
    label: 'Successful Engagements',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years of Service',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Users,
    value: '50+',
    label: 'Satisfied Clients',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Compliance Focus',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
  },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary-700">Our Commitment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Professional Excellence
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Delivering quality service with integrity and professional competence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group relative ${stat.bgColor} rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                } border-2 border-transparent hover:border-white`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                  </div>

                  {/* Value */}
                  <div className={`text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-3`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <p className="text-neutral-700 font-semibold">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Values */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Integrity</h3>
            <p className="text-sm text-neutral-600">Adherence to professional ethics and transparent conduct</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Confidentiality</h3>
            <p className="text-sm text-neutral-600">Strict protection of client information and data security</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Due Care</h3>
            <p className="text-sm text-neutral-600">Diligent application of professional knowledge and standards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
