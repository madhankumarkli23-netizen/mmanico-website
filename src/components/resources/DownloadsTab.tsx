import { Download, FileText, Calendar } from 'lucide-react';

const downloads = [
  {
    icon: FileText,
    title: 'Income Tax Return Filing Checklist',
    description: 'Comprehensive checklist of documents and information required for ITR filing across various forms.',
    fileType: 'PDF',
    fileSize: '245 KB',
  },
  {
    icon: FileText,
    title: 'GST Return Filing Checklist',
    description: 'Document checklist for GSTR-1, GSTR-3B, and annual return filing with reconciliation points.',
    fileType: 'PDF',
    fileSize: '198 KB',
  },
  {
    icon: Calendar,
    title: 'TDS Due Date Calendar FY 2025-26',
    description: 'Complete calendar of TDS deduction, payment, and return filing due dates for the financial year.',
    fileType: 'PDF',
    fileSize: '156 KB',
  },
  {
    icon: FileText,
    title: 'Annual ROC Compliance Checklist',
    description: 'Year-end compliance checklist for private limited companies covering MCA filings and board procedures.',
    fileType: 'PDF',
    fileSize: '221 KB',
  },
  {
    icon: Calendar,
    title: 'GST Compliance Calendar FY 2025-26',
    description: 'Monthly due dates for GST returns, annual return, and other GST compliance requirements.',
    fileType: 'PDF',
    fileSize: '142 KB',
  },
];

const isPost2026 = process.env.NEXT_PUBLIC_POST_2026_RULES === 'true';

export default function DownloadsTab() {
  return (
    <div className="space-y-6">
      <p className="text-neutral-600">
        Downloadable resources and checklists for tax and compliance planning. {!isPost2026 && 'No email or registration required.'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {downloads.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-neutral-50 rounded-lg p-6 border border-neutral-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary-700" aria-hidden="true" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">
                      {item.fileType} • {item.fileSize}
                    </span>
                    <button
                      onClick={() => alert('Download functionality will be implemented with actual PDF files.')}
                      className="inline-flex items-center text-sm text-primary-700 hover:text-primary-800 font-medium"
                    >
                      <Download className="w-4 h-4 mr-1" aria-hidden="true" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!isPost2026 && (
        <div className="mt-8 bg-neutral-100 rounded-lg p-6">
          <p className="text-sm text-neutral-700">
            <strong>Note:</strong> These resources are provided for general informational purposes. They do not constitute professional advice and should not be relied upon for specific compliance decisions. For personalized guidance, please contact us.
          </p>
        </div>
      )}
    </div>
  );
}
