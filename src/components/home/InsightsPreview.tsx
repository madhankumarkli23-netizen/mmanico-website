import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

const insights = [
  {
    title: 'Understanding the basics of income tax return filing in India',
    excerpt: 'A comprehensive overview of the income tax return filing process, applicable forms, and general timelines for different categories of taxpayers.',
    category: 'Income Tax',
    readTime: '5 min read',
    date: '2025-11-20',
    slug: 'understanding-itr-filing-basics',
  },
  {
    title: 'GST input tax credit: Key concepts and reconciliation',
    excerpt: 'An educational guide to input tax credit mechanisms, eligibility conditions, and the importance of regular reconciliation practices.',
    category: 'GST',
    readTime: '6 min read',
    date: '2025-11-15',
    slug: 'gst-input-tax-credit-guide',
  },
  {
    title: 'Annual ROC compliances for private limited companies',
    excerpt: 'Overview of statutory filings required under the Companies Act, including annual returns, financial statements, and board meeting requirements.',
    category: 'Corporate Law',
    readTime: '7 min read',
    date: '2025-11-10',
    slug: 'annual-roc-compliances-overview',
  },
];

const categoryColors: Record<string, string> = {
  'Income Tax': 'bg-blue-100 text-blue-700',
  'GST': 'bg-green-100 text-green-700',
  'Corporate Law': 'bg-purple-100 text-purple-700',
  'Audit': 'bg-orange-100 text-orange-700',
  'Accounting': 'bg-indigo-100 text-indigo-700',
};

export default function InsightsPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Insights & Articles
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Educational content on taxation, compliance, and accounting topics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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

                <h3 className="text-xl font-semibold text-neutral-900 mb-2 line-clamp-2">
                  {insight.title}
                </h3>

                <p className="text-sm text-neutral-600 mb-4 line-clamp-3">
                  {insight.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">
                    {new Date(insight.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
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

        <div className="text-center">
          <Link
            href="/resources?tab=insights"
            className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium"
          >
            View all insights
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
