'use client';

import { useState } from 'react';
import { Search, ExternalLink, Filter } from 'lucide-react';

const allUpdates = [
  { title: 'Extension of due date for filing Income Tax Returns for AY 2025-26', source: 'CBDT', date: '2025-12-20', excerpt: 'The Central Board of Direct Taxes has extended the due date for filing income tax returns for assessment year 2025-26 for certain categories of taxpayers.', link: 'https://www.incometax.gov.in', category: 'Income Tax' },
  { title: 'GST Council Meeting: Key decisions on rate rationalization', source: 'GST Council', date: '2025-12-15', excerpt: 'The 54th GST Council meeting concluded with important decisions regarding rate structures and compliance simplification measures.', link: 'https://www.gst.gov.in', category: 'GST' },
  { title: 'MCA notifies amendments to Companies (Appointment and Remuneration) Rules', source: 'MCA', date: '2025-12-10', excerpt: 'The Ministry of Corporate Affairs has introduced amendments to streamline appointment procedures for key managerial personnel.', link: 'https://www.mca.gov.in', category: 'MCA' },
  { title: 'RBI revises KYC norms for financial institutions', source: 'RBI', date: '2025-12-05', excerpt: 'Reserve Bank of India has issued updated Know Your Customer guidelines for improved customer due diligence processes.', link: 'https://www.rbi.org.in', category: 'RBI' },
  { title: 'SEBI enhances disclosure requirements for listed entities', source: 'SEBI', date: '2025-12-01', excerpt: 'Securities and Exchange Board of India mandates additional disclosure norms for better investor protection and transparency.', link: 'https://www.sebi.gov.in', category: 'SEBI' },
  { title: 'ICAI releases revised exposure draft on accounting standards', source: 'ICAI', date: '2025-11-28', excerpt: 'The Institute of Chartered Accountants of India has issued an exposure draft for public consultation on proposed accounting standard changes.', link: 'https://www.icai.org', category: 'ICAI' },
  { title: 'New income tax portal enhancements announced', source: 'CBDT', date: '2025-11-25', excerpt: 'Additional features and improvements to the income tax e-filing portal have been announced to enhance user experience.', link: 'https://www.incometax.gov.in', category: 'Income Tax' },
  { title: 'GST amnesty scheme for pending returns', source: 'CBIC', date: '2025-11-20', excerpt: 'Central Board of Indirect Taxes and Customs announces conditional amnesty for taxpayers with pending GST return filings.', link: 'https://www.cbic.gov.in', category: 'GST' },
];

const sources = ['All', 'CBDT', 'CBIC', 'MCA', 'RBI', 'SEBI', 'ICAI'];

const sourceColors: Record<string, string> = {
  'CBDT': 'bg-blue-100 text-blue-700',
  'CBIC': 'bg-green-100 text-green-700',
  'GST Council': 'bg-green-100 text-green-700',
  'MCA': 'bg-purple-100 text-purple-700',
  'RBI': 'bg-orange-100 text-orange-700',
  'SEBI': 'bg-red-100 text-red-700',
  'ICAI': 'bg-indigo-100 text-indigo-700',
};

export default function UpdatesTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSource, setSelectedSource] = useState('All');

  const filteredUpdates = allUpdates.filter(update => {
    const matchesSearch = update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         update.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSource = selectedSource === 'All' || update.source === selectedSource;
    return matchesSearch && matchesSource;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search updates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-neutral-600" aria-hidden="true" />
          <select
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
            className="px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
          >
            {sources.map(source => (
              <option key={source} value={source}>{source}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-neutral-600">
        Showing {filteredUpdates.length} update{filteredUpdates.length !== 1 ? 's' : ''}
      </p>

      {/* Updates List */}
      <div className="space-y-4">
        {filteredUpdates.map((update, index) => (
          <article
            key={index}
            className="bg-neutral-50 rounded-lg p-6 border border-neutral-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${sourceColors[update.source] || 'bg-neutral-100 text-neutral-700'}`}>
                {update.source}
              </span>
              <span className="text-xs text-neutral-500">
                {new Date(update.date).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              {update.title}
            </h3>

            <p className="text-neutral-700 mb-4">
              {update.excerpt}
            </p>

            <a
              href={update.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium"
            >
              View official source
              <ExternalLink className="ml-1 w-4 h-4" aria-hidden="true" />
            </a>
          </article>
        ))}

        {filteredUpdates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600">No updates found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
