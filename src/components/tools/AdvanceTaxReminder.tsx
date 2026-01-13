'use client';

import { X } from 'lucide-react';

const dueDates = [
  { installment: '1st', dueDate: '15 June 2025', percentage: '15%', cumulative: '15%' },
  { installment: '2nd', dueDate: '15 September 2025', percentage: '45%', cumulative: '60%' },
  { installment: '3rd', dueDate: '15 December 2025', percentage: '75%', cumulative: '100%' },
  { installment: '4th', dueDate: '15 March 2026', percentage: '100%', cumulative: '100%' },
];

export default function AdvanceTaxReminder({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-neutral-200">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-bold">Advance Tax Due Dates FY 2025-26</h2>
        <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-md"><X className="w-6 h-6" /></button>
      </div>
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead><tr className="bg-neutral-50"><th className="border p-3 text-left">Installment</th><th className="border p-3 text-left">Due Date</th><th className="border p-3 text-left">Tax Payable (%)</th></tr></thead>
            <tbody>
              {dueDates.map((item, i) => (
                <tr key={i} className="hover:bg-neutral-50"><td className="border p-3">{item.installment}</td><td className="border p-3 font-medium">{item.dueDate}</td><td className="border p-3">{item.percentage} of estimated tax</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 bg-neutral-50 rounded-lg p-4">
          <p className="text-sm text-neutral-700 mb-2"><strong>Note:</strong> These are standard advance tax due dates for non-corporate taxpayers.</p>
          <p className="text-xs text-neutral-600">Advance tax is payable if total tax liability exceeds ₹10,000 for the year. Interest under Section 234B and 234C applies for shortfall or delay. For precise calculations and compliance, professional consultation is recommended.</p>
        </div>
      </div>
    </div>
  );
}
