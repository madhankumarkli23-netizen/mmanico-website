import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const insights = [
  {
    title: 'Understanding the basics of income tax return filing in India',
    excerpt: 'A comprehensive overview of the income tax return filing process, applicable forms, and general timelines for different categories of taxpayers. Learn about the various ITR forms, when they apply, and the standard procedures for filing.',
    category: 'Income Tax',
    readTime: '5 min read',
    date: '2025-11-20',
    slug: 'understanding-itr-filing-basics',
  },
  {
    title: 'GST input tax credit: Key concepts and reconciliation',
    excerpt: 'An educational guide to input tax credit mechanisms, eligibility conditions, and the importance of regular reconciliation practices. Understand how ITC works under GST law and common reconciliation procedures.',
    category: 'GST',
    readTime: '6 min read',
    date: '2025-11-15',
    slug: 'gst-input-tax-credit-guide',
  },
  {
    title: 'Annual ROC compliances for private limited companies',
    excerpt: 'Overview of statutory filings required under the Companies Act, including annual returns, financial statements, and board meeting requirements. A timeline-based guide to annual compliance for private companies.',
    category: 'Corporate Law',
    readTime: '7 min read',
    date: '2025-11-10',
    slug: 'annual-roc-compliances-overview',
  },
  {
    title: 'TDS compliance: A primer for employers',
    excerpt: 'Understanding tax deduction at source obligations for employers, including monthly deduction procedures, quarterly return filing, and annual Form 16 issuance.',
    category: 'Income Tax',
    readTime: '6 min read',
    date: '2025-11-05',
    slug: 'tds-compliance-primer',
  },
  {
    title: 'Introduction to statutory audit requirements',
    excerpt: 'An overview of when statutory audits are mandated, what they cover, and the general process involved. Applicable to companies, LLPs, and other entities under various laws.',
    category: 'Audit',
    readTime: '5 min read',
    date: '2025-10-28',
    slug: 'statutory-audit-introduction',
  },
  {
    title: 'Accounting standards for small businesses',
    excerpt: 'A guide to applicable accounting standards for small and medium enterprises, including AS and Ind AS frameworks and when they apply.',
    category: 'Accounting',
    readTime: '8 min read',
    date: '2025-10-20',
    slug: 'accounting-standards-sme',
  },
];

const categoryColors: Record<string, string> = {
  'Income Tax': 'bg-blue-100 text-blue-700',
  'GST': 'bg-green-100 text-green-700',
  'Corporate Law': 'bg-purple-100 text-purple-700',
  'Audit': 'bg-orange-100 text-orange-700',
  'Accounting': 'bg-indigo-100 text-indigo-700',
};

export default function InsightsTab() {
  return (
    <div className="space-y-6">
      <p className="text-neutral-600">
        Educational articles on taxation, compliance, and accounting topics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((insight, index) => (
          <article
            key={index}
            className="bg-neutral-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-neutral-200"
          >
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[insight.category] || 'bg-neutral-100 text-neutral-700'}`}>
                  {insight.category}
                </span>
                <span className="flex items-center text-xs text-neutral-500">
                  <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
                  {insight.readTime}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {insight.title}
              </h3>

              <p className="text-sm text-neutral-600 mb-4 line-clamp-3">
                {insight.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500">
                  {new Date(insight.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <Link
                  href={`/resources/insights/${insight.slug}`}
                  className="text-sm text-primary-700 hover:text-primary-800 font-medium inline-flex items-center"
                >
                  Read more
                  <ArrowRight className="ml-1 w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
