'use client';

import { Metadata } from 'next';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import UpdatesTab from '@/components/resources/UpdatesTab';
import InsightsTab from '@/components/resources/InsightsTab';
import DownloadsTab from '@/components/resources/DownloadsTab';
import PageHero from '@/components/PageHero';

const tabs = [
  { id: 'updates', name: 'Tax & Regulatory Updates' },
  { id: 'insights', name: 'Insights' },
  { id: 'downloads', name: 'Downloads' },
];

function ResourcesContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || 'updates');

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Resources"
        subtitle="Updates, insights, and downloadable resources for tax and compliance matters"
      />

      {/* Tabs */}
      <section className="bg-white border-b border-neutral-200 sticky top-20 z-10">
        <div className="container-custom">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.id
                    ? 'border-primary-700 text-primary-700'
                    : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12 bg-white min-h-screen">
        <div className="container-custom">
          {activeTab === 'updates' && <UpdatesTab />}
          {activeTab === 'insights' && <InsightsTab />}
          {activeTab === 'downloads' && <DownloadsTab />}
        </div>
      </section>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense fallback={<div className="pt-20 min-h-screen bg-white"></div>}>
      <ResourcesContent />
    </Suspense>
  );
}
