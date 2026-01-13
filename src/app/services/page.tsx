import { Metadata } from 'next';
import ServiceAccordion from '@/components/services/ServiceAccordion';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Professional Services - M MANI & CO',
  description: 'Comprehensive tax, audit, accounting, and compliance services for individuals and businesses.',
};

export default function ServicesPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <PageHero
        title="Professional Services"
        subtitle="Comprehensive support across taxation, audit, accounting, and regulatory compliance"
      />

      {/* Services Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <ServiceAccordion />
        </div>
      </section>

      {/* Engagement Notice */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 border border-neutral-200 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              Engagement Process
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Professional services are provided subject to formal engagement acceptance. Each engagement is assessed for competence, independence, and conflict considerations prior to acceptance. Service scope, timelines, and professional fees are determined on a case-by-case basis.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              For enquiries regarding any service listed above, you may reach out through our contact page. Preliminary discussions do not constitute engagement acceptance or create any professional relationship.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
