import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

const updates = [
  {
    title: 'Extension of due date for filing Income Tax Returns for AY 2025-26',
    source: 'CBDT',
    date: '2025-12-20',
    excerpt: 'The Central Board of Direct Taxes has extended the due date for filing income tax returns for assessment year 2025-26 for certain categories of taxpayers.',
    link: 'https://www.incometax.gov.in',
    category: 'Income Tax',
  },
  {
    title: 'GST Council Meeting: Key decisions on rate rationalization',
    source: 'GST Council',
    date: '2025-12-15',
    excerpt: 'The 54th GST Council meeting concluded with important decisions regarding rate structures and compliance simplification measures.',
    link: 'https://www.gst.gov.in',
    category: 'GST',
  },
  {
    title: 'MCA notifies amendments to Companies (Appointment and Remuneration) Rules',
    source: 'MCA',
    date: '2025-12-10',
    excerpt: 'The Ministry of Corporate Affairs has introduced amendments to streamline appointment procedures for key managerial personnel.',
    link: 'https://www.mca.gov.in',
    category: 'MCA',
  },
  {
    title: 'RBI revises KYC norms for financial institutions',
    source: 'RBI',
    date: '2025-12-05',
    excerpt: 'Reserve Bank of India has issued updated Know Your Customer guidelines for improved customer due diligence processes.',
    link: 'https://www.rbi.org.in',
    category: 'RBI',
  },
  {
    title: 'SEBI enhances disclosure requirements for listed entities',
    source: 'SEBI',
    date: '2025-12-01',
    excerpt: 'Securities and Exchange Board of India mandates additional disclosure norms for better investor protection and transparency.',
    link: 'https://www.sebi.gov.in',
    category: 'SEBI',
  },
  {
    title: 'ICAI releases revised exposure draft on accounting standards',
    source: 'ICAI',
    date: '2025-11-28',
    excerpt: 'The Institute of Chartered Accountants of India has issued an exposure draft for public consultation on proposed accounting standard changes.',
    link: 'https://www.icai.org',
    category: 'ICAI',
  },
];

const sourceColors: Record<string, string> = {
  'CBDT': 'bg-blue-100 text-blue-700',
  'GST Council': 'bg-green-100 text-green-700',
  'MCA': 'bg-purple-100 text-purple-700',
  'RBI': 'bg-orange-100 text-orange-700',
  'SEBI': 'bg-red-100 text-red-700',
  'ICAI': 'bg-indigo-100 text-indigo-700',
};

export default function UpdatesPreview() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Regulatory Updates
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Recent developments from income tax, GST, corporate law, and other regulatory authorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {updates.map((update, index) => (
            <article
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-neutral-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${sourceColors[update.source] || 'bg-neutral-100 text-neutral-700'}`}>
                  {update.source}
                </span>
                <span className="text-xs text-neutral-500">
                  {new Date(update.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2">
                {update.title}
              </h3>

              <p className="text-sm text-neutral-600 mb-4 line-clamp-3">
                {update.excerpt}
              </p>

              <a
                href={update.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary-700 hover:text-primary-800 font-medium"
              >
                View official source
                <ExternalLink className="ml-1 w-4 h-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/resources?tab=updates"
            className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium"
          >
            View all updates
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
