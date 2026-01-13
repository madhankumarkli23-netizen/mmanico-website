import { Metadata } from 'next';
import { Shield, Clock, Users, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About Us - M MANI & CO',
  description: 'Professional chartered accountancy services in Bengaluru with focus on integrity, confidentiality, and due care.',
};

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Adherence to professional ethics and transparent conduct in all engagements.',
  },
  {
    icon: CheckCircle2,
    title: 'Confidentiality',
    description: 'Strict protection of client information and data security measures.',
  },
  {
    icon: Clock,
    title: 'Due Care',
    description: 'Diligent application of professional knowledge and adherence to standards.',
  },
  {
    icon: Users,
    title: 'Responsiveness',
    description: 'Timely communication and attention to client requirements.',
  },
];

const serviceAreas = [
  'Direct taxation compliance and advisory',
  'Indirect taxation (GST) services',
  'Statutory and internal audit',
  'Accounting and financial reporting',
  'ROC and corporate law compliance',
  'Payroll and TDS management',
  'Business advisory and planning',
  'Internal control assessments',
];

export default function AboutPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="About M MANI & CO"
        subtitle="Professional chartered accountancy services in Bengaluru"
      />

      {/* Firm Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Firm Overview
            </h2>

            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
              <p>
                M MANI & CO provides professional services in the areas of taxation, audit, accounting, and regulatory compliance. The firm serves individuals, businesses, and organizations requiring support in meeting their statutory and financial obligations.
              </p>

              <p>
                Our practice encompasses direct tax matters including income tax compliance and advisory, indirect tax services focused on GST, various categories of audit and assurance work, accounting and bookkeeping support, corporate law compliances under the Companies Act and other statutes, payroll administration, and business advisory services.
              </p>

              <p>
                The firm operates from Bengaluru and undertakes engagements across Karnataka and other parts of India. Services are rendered in accordance with applicable professional standards and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Values */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Professional Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our approach to professional practice is guided by these core principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-sm border border-neutral-200"
                >
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-700" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Areas of Practice
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-neutral-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Geographic Reach
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Based in Bengaluru, Karnataka, we serve clients locally and undertake remote engagements across India. Our practice model accommodates both in-person and virtual service delivery, depending on client requirements and engagement nature.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Standards Notice */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-neutral-50 rounded-lg p-8 border border-neutral-200">
            <p className="text-sm text-neutral-600 leading-relaxed">
              <strong className="text-neutral-900">Professional Standards:</strong> All services are provided subject to acceptance of engagement terms and in accordance with applicable professional standards, including those prescribed by the Institute of Chartered Accountants of India (ICAI). Engagement acceptance is at the firm&apos;s discretion based on competence, independence, and conflict assessment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
