'use client';

import { X } from 'lucide-react';

const tdsSchedule = [
  { month: 'April 2025', deduction: '7 May 2025', payment: '7 May 2025', return: 'Q1: 31 July 2025' },
  { month: 'May 2025', deduction: '7 June 2025', payment: '7 June 2025', return: 'Q1: 31 July 2025' },
  { month: 'June 2025', deduction: '7 July 2025', payment: '7 July 2025', return: 'Q1: 31 July 2025' },
  { month: 'July 2025', deduction: '7 August 2025', payment: '7 August 2025', return: 'Q2: 31 October 2025' },
  { month: 'August 2025', deduction: '7 September 2025', payment: '7 September 2025', return: 'Q2: 31 October 2025' },
  { month: 'September 2025', deduction: '7 October 2025', payment: '7 October 2025', return: 'Q2: 31 October 2025' },
];

export default function TDSDateChecker({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-neutral-200">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-bold">TDS Due Dates FY 2025-26</h2>
        <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-md"><X className="w-6 h-6" /></button>
      </div>
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="bg-neutral-50"><th className="border p-2 text-left">Month</th><th className="border p-2 text-left">Payment Due</th><th className="border p-2 text-left">Return Filing</th></tr></thead>
            <tbody>
              {tdsSchedule.map((item, i) => (
                <tr key={i} className="hover:bg-neutral-50"><td className="border p-2">{item.month}</td><td className="border p-2 font-medium">{item.payment}</td><td className="border p-2">{item.return}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 bg-neutral-50 rounded-lg p-4 space-y-2">
          <p className="text-sm text-neutral-700"><strong>Payment Due:</strong> 7th of following month (non-government deductors)</p>
          <p className="text-sm text-neutral-700"><strong>Return Filing:</strong> Quarterly - Form 24Q (salary), 26Q (non-salary)</p>
          <p className="text-xs text-neutral-600 mt-3">Note: Due dates may be extended or modified. Government deductors have same-day payment requirements. For specific compliance requirements, consult professional guidance.</p>
        </div>
      </div>
    </div>
  );
}
