'use client';

import { useState } from 'react';
import { ChevronDown, FileText, Send } from 'lucide-react';
import Link from 'next/link';

interface ServiceDetail {
  name: string;
  description: string;
  coverage: string[];
  outputs: string[];
  requirements: string[];
}

interface ServiceCategory {
  title: string;
  services: ServiceDetail[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Direct Tax',
    services: [
      {
        name: 'Income Tax Return Filing',
        description: 'Preparation and filing of income tax returns for individuals, firms, companies, and other entities.',
        coverage: [
          'Selection of appropriate ITR form based on income sources',
          'Computation of taxable income and tax liability',
          'Claiming of applicable deductions and exemptions',
          'Filing of returns within statutory timelines',
        ],
        outputs: [
          'Filed income tax return',
          'Computation worksheets',
          'ITR-V acknowledgment',
        ],
        requirements: [
          'Form 16 / Form 16A (if applicable)',
          'Bank statements and interest certificates',
          'Investment proofs and documents',
          'Capital gains transaction details',
          'Previous year return copies',
          'Business books of accounts (for business income)',
        ],
      },
      {
        name: 'Tax Planning & Advisory',
        description: 'Advisory on tax-efficient structuring of income, investments, and transactions.',
        coverage: [
          'Assessment of tax position and planning opportunities',
          'Investment planning for tax optimization',
          'Guidance on applicable exemptions and deductions',
          'Advance tax and TDS compliance advisory',
        ],
        outputs: [
          'Tax planning recommendations',
          'Computation notes',
          'Advisory documentation',
        ],
        requirements: [
          'Income and expense projections',
          'Existing investment portfolio details',
          'Transaction documentation (for specific advisory)',
          'Previous tax returns',
        ],
      },
      {
        name: 'Tax Assessments & Appeals',
        description: 'Representation in tax assessment proceedings, appeals, and dispute resolution.',
        coverage: [
          'Response to assessment notices',
          'Preparation of submissions and replies',
          'Representation before tax authorities',
          'Filing of appeals and applications',
        ],
        outputs: [
          'Written submissions',
          'Appeal documents',
          'Representation records',
        ],
        requirements: [
          'Assessment notices and communication from department',
          'Original return filed and supporting documents',
          'Evidence and supporting records',
          'Authorization for representation',
        ],
      },
    ],
  },
  {
    title: 'Indirect Tax (GST)',
    services: [
      {
        name: 'GST Registration',
        description: 'Obtaining GST registration for businesses liable to register under GST law.',
        coverage: [
          'Applicability assessment',
          'Preparation and filing of registration application',
          'Liaison with GST authorities',
          'Obtaining GSTIN',
        ],
        outputs: [
          'GST registration certificate',
          'GSTIN',
        ],
        requirements: [
          'PAN of business / proprietor / partners / directors',
          'Proof of business place',
          'Bank account details',
          'Digital signature (for companies)',
          'Board resolution / authorization',
        ],
      },
      {
        name: 'GST Return Filing',
        description: 'Preparation and filing of periodic GST returns (GSTR-1, GSTR-3B, and others).',
        coverage: [
          'Compilation of sales and purchase data',
          'Reconciliation with books of accounts',
          'Computation of GST liability',
          'Filing of returns within due dates',
        ],
        outputs: [
          'Filed GST returns',
          'Payment challans',
          'Reconciliation statements',
        ],
        requirements: [
          'Sales and purchase invoices',
          'E-way bills (if applicable)',
          'Credit and debit notes',
          'Bank statements for payment verification',
          'Previous period return data',
        ],
      },
      {
        name: 'GST Advisory & Compliance',
        description: 'Advisory on GST implications, compliance requirements, and procedural matters.',
        coverage: [
          'GST applicability and classification advisory',
          'Input tax credit eligibility assessment',
          'Compliance calendar and due date tracking',
          'Advisory on specific transactions',
        ],
        outputs: [
          'Advisory notes',
          'Compliance checklists',
          'Transaction-specific opinions',
        ],
        requirements: [
          'Business nature and transaction details',
          'Invoices and agreements (for specific advisory)',
          'Current GST compliance status',
        ],
      },
    ],
  },
  {
    title: 'Audit & Assurance',
    services: [
      {
        name: 'Statutory Audit',
        description: 'Audit of financial statements as required under the Companies Act, partnership laws, or other statutes.',
        coverage: [
          'Examination of books of accounts',
          'Verification of financial statements',
          'Compliance with applicable accounting standards',
          'Issuance of audit report',
        ],
        outputs: [
          'Audited financial statements',
          'Audit report',
          'Management letter (if applicable)',
        ],
        requirements: [
          'Books of accounts and financial records',
          'Bank statements and reconciliations',
          'Fixed asset registers',
          'Loan agreements and investment documents',
          'Statutory registers and minutes',
        ],
      },
      {
        name: 'Tax Audit',
        description: 'Audit under Section 44AB of the Income Tax Act for businesses exceeding prescribed turnover limits.',
        coverage: [
          'Examination of accounts for tax audit purposes',
          'Verification of tax compliance',
          'Preparation of Form 3CA/3CB and 3CD',
          'Filing of tax audit report',
        ],
        outputs: [
          'Tax audit report (Form 3CA/3CB)',
          'Statement of particulars (Form 3CD)',
        ],
        requirements: [
          'Audited or unaudited financial statements',
          'Books of accounts',
          'Tax deduction and collection certificates',
          'Details of specified transactions',
        ],
      },
      {
        name: 'Internal Audit',
        description: 'Independent evaluation of internal controls, processes, and compliance as per organizational requirements.',
        coverage: [
          'Review of internal control systems',
          'Process evaluation and risk assessment',
          'Compliance verification',
          'Recommendations for improvement',
        ],
        outputs: [
          'Internal audit report',
          'Observation and recommendation memorandum',
        ],
        requirements: [
          'Scope definition and audit plan approval',
          'Access to records and systems',
          'Process documentation',
        ],
      },
    ],
  },
  {
    title: 'Accounting & Compliance',
    services: [
      {
        name: 'Bookkeeping & Accounting',
        description: 'Maintenance of books of accounts, recording of transactions, and preparation of financial statements.',
        coverage: [
          'Recording of day-to-day transactions',
          'Bank reconciliation',
          'Preparation of trial balance',
          'Financial statement preparation',
        ],
        outputs: [
          'Books of accounts (ledgers, journals)',
          'Financial statements (P&L, Balance Sheet)',
          'Trial balance and schedules',
        ],
        requirements: [
          'Transaction documents (invoices, bills, receipts)',
          'Bank statements',
          'Expense vouchers',
          'Previous period accounts (if applicable)',
        ],
      },
      {
        name: 'Management Information Systems (MIS)',
        description: 'Preparation of management reports for internal decision-making and monitoring.',
        coverage: [
          'Periodic financial and operational reports',
          'Variance analysis',
          'KPI tracking and dashboards',
          'Custom report formats',
        ],
        outputs: [
          'MIS reports (monthly/quarterly)',
          'Variance analysis reports',
          'Dashboard summaries',
        ],
        requirements: [
          'Accounting data and books',
          'Budget and targets (for variance analysis)',
          'Report format requirements',
        ],
      },
    ],
  },
  {
    title: 'Corporate / ROC Compliance',
    services: [
      {
        name: 'Company Incorporation',
        description: 'Incorporation of private limited companies, LLPs, and other corporate entities.',
        coverage: [
          'Name reservation',
          'Preparation of incorporation documents',
          'Filing with Registrar of Companies',
          'Obtaining Certificate of Incorporation',
        ],
        outputs: [
          'Certificate of Incorporation',
          'PAN and TAN',
          'Memorandum and Articles of Association',
        ],
        requirements: [
          'Proposed name options',
          'Details of directors/partners and shareholders',
          'Registered office address proof',
          'Digital signatures',
        ],
      },
      {
        name: 'Annual ROC Filings',
        description: 'Filing of annual returns, financial statements, and other periodic compliances with the Ministry of Corporate Affairs.',
        coverage: [
          'Preparation of annual return (Form MGT-7/LLP Form 11)',
          'Filing of financial statements (Form AOC-4/LLP Form 8)',
          'Board meeting and AGM compliances',
          'Director KYC and other forms',
        ],
        outputs: [
          'Filed annual return and financial statements',
          'Compliance certificates',
        ],
        requirements: [
          'Audited financial statements',
          'Minutes of board and general meetings',
          'Statutory registers',
          'Director and shareholder details',
        ],
      },
      {
        name: 'Event-Based ROC Filings',
        description: 'Filings related to changes in directors, share capital, registered office, and other company particulars.',
        coverage: [
          'Appointment and resignation of directors',
          'Changes in share capital',
          'Alteration of MOA/AOA',
          'Registered office changes',
        ],
        outputs: [
          'Filed forms and approvals',
          'Updated incorporation documents',
        ],
        requirements: [
          'Board resolutions and notices',
          'Consent letters from directors',
          'Supporting documents for the change',
        ],
      },
    ],
  },
  {
    title: 'Advisory',
    services: [
      {
        name: 'Business Advisory',
        description: 'Guidance on financial planning, budgeting, and business structuring.',
        coverage: [
          'Financial planning and projections',
          'Budgeting and cost management',
          'Business structure evaluation',
          'Operational efficiency advisory',
        ],
        outputs: [
          'Financial projections',
          'Budget templates',
          'Advisory reports',
        ],
        requirements: [
          'Business plan and objectives',
          'Historical financial data',
          'Market and operational assumptions',
        ],
      },
      {
        name: 'Payroll & TDS Compliance',
        description: 'Payroll processing, TDS computation, and filing of TDS returns.',
        coverage: [
          'Monthly payroll computation',
          'TDS deduction and deposit',
          'Issuance of Form 16',
          'Filing of quarterly TDS returns',
        ],
        outputs: [
          'Salary statements',
          'TDS certificates (Form 16)',
          'Filed TDS returns',
        ],
        requirements: [
          'Employee salary structure and attendance',
          'Investment declarations',
          'Previous TDS return data',
        ],
      },
    ],
  },
];

export default function ServiceAccordion() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openService, setOpenService] = useState<{ categoryIndex: number; serviceIndex: number } | null>(null);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenService(null);
  };

  const toggleService = (categoryIndex: number, serviceIndex: number) => {
    if (
      openService?.categoryIndex === categoryIndex &&
      openService?.serviceIndex === serviceIndex
    ) {
      setOpenService(null);
    } else {
      setOpenService({ categoryIndex, serviceIndex });
    }
  };

  return (
    <div className="space-y-6">
      {serviceCategories.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className="rounded-2xl overflow-hidden bg-white border border-neutral-200 transition-all duration-300 hover:shadow-lg"
        >
          {/* Category Header */}
          <button
            onClick={() => toggleCategory(categoryIndex)}
            className={`w-full px-8 py-6 flex items-center justify-between transition-colors text-left ${openCategory === categoryIndex
                ? 'bg-primary-900 text-white'
                : 'bg-white hover:bg-neutral-50 text-neutral-900'
              }`}
            aria-expanded={openCategory === categoryIndex}
          >
            <h2 className="text-xl md:text-2xl font-bold font-serif">
              {category.title}
            </h2>
            <ChevronDown
              className={`w-6 h-6 transition-transform ${openCategory === categoryIndex ? 'rotate-180 text-accent' : 'text-neutral-400'
                }`}
              aria-hidden="true"
            />
          </button>

          {/* Category Content */}
          {openCategory === categoryIndex && (
            <div className="border-t border-neutral-200">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="border-b border-neutral-200 last:border-b-0"
                >
                  {/* Service Header */}
                  <button
                    onClick={() => toggleService(categoryIndex, serviceIndex)}
                    className="w-full px-6 py-4 flex items-start justify-between hover:bg-neutral-50 transition-colors text-left"
                    aria-expanded={
                      openService?.categoryIndex === categoryIndex &&
                      openService?.serviceIndex === serviceIndex
                    }
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-neutral-600">
                        {service.description}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-600 transition-transform flex-shrink-0 ml-4 mt-1 ${openService?.categoryIndex === categoryIndex &&
                          openService?.serviceIndex === serviceIndex
                          ? 'rotate-180'
                          : ''
                        }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Service Details */}
                  {openService?.categoryIndex === categoryIndex &&
                    openService?.serviceIndex === serviceIndex && (
                      <div className="px-6 pb-6 bg-neutral-50/50">
                        <div className="space-y-6">
                          {/* Coverage */}
                          <div>
                            <h4 className="font-semibold text-neutral-900 mb-2 flex items-center">
                              <FileText className="w-4 h-4 mr-2 text-primary-700" aria-hidden="true" />
                              What this covers
                            </h4>
                            <ul className="space-y-1 ml-6">
                              {service.coverage.map((item, idx) => (
                                <li key={idx} className="text-sm text-neutral-700">
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Outputs */}
                          <div>
                            <h4 className="font-semibold text-neutral-900 mb-2">
                              Typical outputs
                            </h4>
                            <ul className="space-y-1 ml-6">
                              {service.outputs.map((item, idx) => (
                                <li key={idx} className="text-sm text-neutral-700">
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h4 className="font-semibold text-neutral-900 mb-2">
                              Information/documents generally required
                            </h4>
                            <ul className="space-y-1 ml-6">
                              {service.requirements.map((item, idx) => (
                                <li key={idx} className="text-sm text-neutral-700">
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Enquiry Link */}
                          <div className="pt-4 border-t border-neutral-200">
                            <Link
                              href={`/contact?service=${encodeURIComponent(category.title)}`}
                              className="inline-flex items-center text-sm text-primary-700 hover:text-primary-800 font-medium"
                            >
                              <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                              Send an enquiry for this service
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
