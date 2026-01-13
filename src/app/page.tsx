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

      {/* How Engagement Works */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary-100 border border-primary-200 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary-800">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              How Engagement Works
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              A structured, transparent approach to professional service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Initial Enquiry
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Submit your enquiry through our contact form, email, or WhatsApp. Share basic details about your requirements.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Preliminary Discussion
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We assess the scope, our competence, independence, and any conflict considerations before proceeding.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Engagement Letter
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Upon acceptance, we provide a formal engagement letter outlining scope, timeline, deliverables, and fee structure.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Service Delivery
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Work is performed with regular communication, quality checks, and timely delivery of agreed outputs.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-600 max-w-3xl mx-auto">
              <strong>Note:</strong> Preliminary discussions or website enquiries do not constitute engagement acceptance or create any professional relationship. Services are provided subject to formal engagement terms.
            </p>
          </div>
        </div>
      </section>

      {/* Document Security & Confidentiality */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 border border-primary-200 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
                  Document Security & Confidentiality
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  All client information and documents are handled with strict confidentiality protocols in accordance with professional standards and ICAI guidelines.
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-neutral-700">
              <div className="flex items-start gap-2">
                <span className="text-primary-700 font-bold">•</span>
                <p>Access to client data is limited to engagement team members on a need-to-know basis</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-700 font-bold">•</span>
                <p>Physical and digital documents are stored securely with appropriate access controls</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-700 font-bold">•</span>
                <p>Confidentiality obligations continue beyond the term of engagement</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-700 font-bold">•</span>
                <p>We maintain professional standards for data security and client privacy</p>
              </div>
            </div>
          </div>
        </div>
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
