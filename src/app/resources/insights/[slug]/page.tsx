import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import PageHero from '@/components/PageHero';

interface PageProps {
  params: {
    slug: string;
  };
}

// Sample articles data (in production, this would come from a CMS or markdown files)
const articles: Record<string, any> = {
  'understanding-itr-filing-basics': {
    title: 'Understanding the basics of income tax return filing in India',
    category: 'Income Tax',
    date: '2025-11-20',
    readTime: '5 min read',
    content: `
      <p>Income tax return (ITR) filing is an annual compliance requirement for individuals and entities earning income in India. This article provides an educational overview of the ITR filing process, applicable forms, and general procedures.</p>

      <h2>Who Must File ITR?</h2>
      <p>Income tax returns must generally be filed by:</p>
      <ul>
        <li>Individuals whose total income exceeds the basic exemption limit</li>
        <li>Companies and firms, regardless of profit or loss</li>
        <li>Persons claiming refunds</li>
        <li>Individuals with foreign assets or income</li>
        <li>Certain other specified categories under income tax law</li>
      </ul>

      <h2>Common ITR Forms</h2>
      <p>Different ITR forms apply to different categories of taxpayers:</p>

      <h3>ITR-1 (Sahaj)</h3>
      <p>For resident individuals having income from salary, one house property, and other sources (with conditions).</p>

      <h3>ITR-2</h3>
      <p>For individuals and HUFs not having income from business or profession.</p>

      <h3>ITR-3</h3>
      <p>For individuals and HUFs having income from business or profession.</p>

      <h3>ITR-4 (Sugam)</h3>
      <p>For presumptive income from business and profession under sections 44AD, 44ADA, or 44AE.</p>

      <h2>General Filing Process</h2>
      <ol>
        <li><strong>Gather Documents:</strong> Form 16, Form 26AS, investment proofs, bank statements, and other relevant documents</li>
        <li><strong>Compute Income:</strong> Calculate total income from all sources and applicable deductions</li>
        <li><strong>Select Form:</strong> Choose the appropriate ITR form based on income sources</li>
        <li><strong>Fill Details:</strong> Complete the form with accurate information</li>
        <li><strong>Verify Tax:</strong> Check pre-filled information and reconcile TDS credits</li>
        <li><strong>File Return:</strong> Submit electronically on the income tax portal</li>
        <li><strong>E-Verify:</strong> Complete e-verification within specified timelines</li>
      </ol>

      <h2>Due Dates (General)</h2>
      <p>For most individual taxpayers not requiring audit:</p>
      <ul>
        <li>31st July of the assessment year (subject to extensions)</li>
      </ul>
      <p>For taxpayers requiring audit, due dates differ and should be verified with current provisions.</p>

      <h2>Important Considerations</h2>
      <ul>
        <li>Accuracy of information is essential</li>
        <li>Late filing may attract fees under Section 234F</li>
        <li>Verification is mandatory to complete the filing process</li>
        <li>Keep supporting documents for a reasonable period</li>
        <li>Check Form 26AS and AIS for pre-filled information accuracy</li>
      </ul>

      <h2>Professional Assistance</h2>
      <p>Given the complexity of tax laws and individual circumstances, professional guidance is often beneficial for:</p>
      <ul>
        <li>Identifying applicable deductions and exemptions</li>
        <li>Ensuring compliance with all requirements</li>
        <li>Optimizing tax liability within legal frameworks</li>
        <li>Handling complex income sources or transactions</li>
      </ul>

      <p><em>Note: This article is for educational purposes and provides general information only. Tax laws change frequently, and individual circumstances vary. For specific tax planning or filing assistance, professional consultation is recommended.</em></p>
    `,
  },
  'gst-input-tax-credit-guide': {
    title: 'GST input tax credit: Key concepts and reconciliation',
    category: 'GST',
    date: '2025-11-15',
    readTime: '6 min read',
    content: `
      <p>Input Tax Credit (ITC) is a fundamental mechanism under the Goods and Services Tax (GST) system. This guide explains basic concepts, eligibility, and the importance of reconciliation.</p>

      <h2>What is Input Tax Credit?</h2>
      <p>Input Tax Credit allows taxpayers to reduce the GST paid on purchases (inputs) from the GST collected on sales (outputs). This prevents cascading taxation and ensures tax is levied only on value addition.</p>

      <h2>Eligibility for ITC</h2>
      <p>To claim input tax credit, the following conditions generally apply:</p>
      <ul>
        <li>Possession of a valid tax invoice or debit note</li>
        <li>Receipt of goods or services</li>
        <li>Tax payment by the supplier to the government</li>
        <li>Filing of GST returns</li>
        <li>Use of inputs for business purposes</li>
      </ul>

      <h2>Blocked Credits</h2>
      <p>Certain inputs and services do not qualify for ITC under Section 17(5), including:</p>
      <ul>
        <li>Motor vehicles (with exceptions)</li>
        <li>Food and beverages</li>
        <li>Membership of clubs and health centers</li>
        <li>Personal consumption items</li>
      </ul>

      <h2>ITC Reconciliation</h2>
      <p>Reconciliation ensures that ITC claimed matches with:</p>
      <ul>
        <li>Supplier's GSTR-1 (outward supplies)</li>
        <li>GSTR-2B auto-populated statement</li>
        <li>Purchase records and books of accounts</li>
      </ul>

      <h2>Reconciliation Process</h2>
      <ol>
        <li><strong>Download GSTR-2B:</strong> Monthly auto-drafted statement showing eligible ITC</li>
        <li><strong>Match with Books:</strong> Compare GSTR-2B with purchase register</li>
        <li><strong>Identify Mismatches:</strong> Note invoices appearing in books but not in 2B, and vice versa</li>
        <li><strong>Follow Up:</strong> Contact suppliers for missing or incorrect reporting</li>
        <li><strong>Adjust Claims:</strong> Claim only eligible and matched ITC</li>
      </ol>

      <h2>Common Reconciliation Issues</h2>
      <ul>
        <li>Supplier filed GSTR-1 late or incorrectly</li>
        <li>GSTIN errors in invoices</li>
        <li>Rate or amount mismatches</li>
        <li>Blocked credit items claimed inadvertently</li>
      </ul>

      <h2>Time Limits</h2>
      <p>ITC must generally be claimed:</p>
      <ul>
        <li>Before filing return for September following the financial year, OR</li>
        <li>Before filing annual return, whichever is earlier</li>
      </ul>

      <h2>Reversal of ITC</h2>
      <p>ITC may need to be reversed in cases such as:</p>
      <ul>
        <li>Non-payment to supplier within 180 days</li>
        <li>Proportionate reversal for exempt supplies (if applicable)</li>
        <li>Goods or services used for non-business purposes</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Maintain proper documentation and invoices</li>
        <li>Reconcile monthly before filing returns</li>
        <li>Verify GSTR-2B regularly</li>
        <li>Ensure timely communication with suppliers</li>
        <li>Keep separate records of blocked credit items</li>
      </ul>

      <p><em>Note: GST provisions are subject to amendments and clarifications. This article provides general educational information and should not be relied upon for specific compliance decisions. Professional advice should be sought for ITC claims and reconciliation.</em></p>
    `,
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = articles[params.slug];

  if (!article) {
    return {
      title: 'Article Not Found - M MANI & CO',
    };
  }

  return {
    title: `${article.title} - M MANI & CO`,
    description: article.title,
  };
}

export default function InsightArticlePage({ params }: PageProps) {
  const article = articles[params.slug];

  if (!article) {
    return (
      <div className="pt-20 min-h-screen bg-white">
        <div className="container-custom max-w-4xl py-20 text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Article Not Found</h1>
          <p className="text-neutral-600 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/resources?tab=insights" className="text-primary-700 hover:text-primary-800 font-medium">
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero */}
      <PageHero
        title={article.title}
        subtitle={`${article.category} • ${article.readTime} • ${new Date(article.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`}
        parentLink={{
          href: "/resources?tab=insights",
          label: "Back to Insights"
        }}
      />

      {/* Content */}
      <article className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <div
            className="prose prose-lg prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Need Professional Assistance?
          </h2>
          <p className="text-neutral-600 mb-6">
            For personalized guidance on {article.category.toLowerCase()} matters, you may reach out to us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
