import { Metadata } from 'next';
import ToolsGrid from '@/components/tools/ToolsGrid';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Tax & Compliance Tools - M MANI & CO',
  description: 'Privacy-first calculators and tools for income tax, GST, TDS, and compliance planning. All calculations happen locally in your browser.',
};

export default function ToolsPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <PageHero
        title="Tax & Compliance Tools"
        subtitle="Privacy-first calculators for indicative tax and compliance estimates"
      />

      {/* Privacy Notice - Floating overlap */}
      <section className="relative z-30 -mt-10 px-4">
        <div className="container-custom">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-6 text-left max-w-3xl mx-auto text-neutral-200">
            <p className="text-sm">
              <strong className="font-semibold text-accent">Privacy Notice:</strong> All calculations are performed locally in your browser. No data is transmitted to any server or stored anywhere. These tools provide indicative estimates only and do not constitute professional advice.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <ToolsGrid />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 border border-neutral-200 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              Important Disclaimer
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              These tools provide indicative information based on general provisions and standard assumptions. They do not account for specific individual circumstances, exemptions, or recent regulatory changes. Results should not be relied upon for actual tax computation or compliance decisions.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              If you require assistance in interpreting these results or need professional support for tax planning, compliance, or filing, you may send an enquiry through our contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
