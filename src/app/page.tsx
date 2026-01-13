import Link from 'next/link';
import Image from 'next/image';
import {
  FileText,
  ReceiptIndianRupee,
  ShieldCheck,
  Calculator,
  Building2,
  Users,
  TrendingUp,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import UpdatesPreview from '@/components/home/UpdatesPreview';
import InsightsPreview from '@/components/home/InsightsPreview';
import StatsSection from '@/components/home/StatsSection';

const practiceAreas = [
  {
    icon: FileText,
    title: 'Income-tax compliance & advisory',
    description: 'Comprehensive tax planning, return filing, and advisory services for individuals and entities.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: ReceiptIndianRupee,
    title: 'GST compliance',
    description: 'Registration, return filing, reconciliation, and advisory for goods and services tax matters.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: ShieldCheck,
    title: 'Audit & assurance',
    description: 'Statutory, tax, and internal audit services maintaining professional standards.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Calculator,
    title: 'Accounting & MIS',
    description: 'Bookkeeping, financial statements, and management information system support.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Building2,
    title: 'ROC / Company law compliances',
    description: 'Incorporation, annual filings, and ongoing corporate regulatory compliance.',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: Users,
    title: 'Payroll & TDS compliance',
    description: 'Payroll processing, tax deduction at source computation, and filing requirements.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'Business advisory',
    description: 'Financial planning, budgeting, and strategic business guidance.',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Internal controls & process review',
    description: 'Assessment and enhancement of internal control systems and operational processes.',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Hero />

      {/* Practice Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 border border-primary-200 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary-800">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Practice Areas
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Professional support across multiple domains of accounting, taxation, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <ServiceCard
                key={index}
                title={area.title}
                description={area.description}
                icon={area.icon}
                href="/services"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="group inline-flex items-center px-8 py-4 bg-primary-700 text-white rounded-lg hover:bg-primary-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              View all services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <StatsSection />
      </section>

      {/* Regulatory Updates Preview */}
      <UpdatesPreview />

      {/* Insights Preview */}
      <InsightsPreview />

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 bg-primary-900 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-800/20 rounded-full blur-3xl"></div>

        <div className="container-custom text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-semibold text-white">Let&apos;s Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Professional Assistance?
          </h2>
          <p className="text-xl text-neutral-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            For enquiries regarding tax, audit, accounting, or compliance matters, you may reach out to us.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-10 py-5 bg-white text-primary-900 rounded-lg hover:bg-neutral-100 transition-all font-bold text-lg shadow-2xl"
          >
            Get in Touch
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
