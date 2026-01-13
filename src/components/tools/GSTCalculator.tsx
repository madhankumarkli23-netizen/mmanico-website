'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function GSTCalculator({ onClose }: { onClose: () => void }) {
  const [taxAmount, setTaxAmount] = useState('');
  const [daysLate, setDaysLate] = useState('');
  const [result, setResult] = useState<{ interest: number; lateFee: number } | null>(null);

  const calculate = () => {
    const tax = parseFloat(taxAmount) || 0;
    const days = parseInt(daysLate) || 0;
    const interest = (tax * 18 * days) / (100 * 365);
    const lateFee = days > 0 ? Math.min(days * 50, 5000) : 0;
    setResult({ interest: Math.round(interest), lateFee });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-neutral-200">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-bold">GST Interest & Late Fee Calculator</h2>
        <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-md"><X className="w-6 h-6" /></button>
      </div>
      <div className="p-6 space-y-6">
        <div><label className="block text-sm font-medium mb-2">GST Tax Amount (₹)</label><input type="number" value={taxAmount} onChange={(e) => setTaxAmount(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-600" /></div>
        <div><label className="block text-sm font-medium mb-2">Days Late</label><input type="number" value={daysLate} onChange={(e) => setDaysLate(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-600" /></div>
        <button onClick={calculate} className="w-full bg-primary-700 text-white py-3 rounded-md hover:bg-primary-800 font-medium">Calculate</button>
        {result && (
          <div className="space-y-3">
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4"><p className="text-sm text-primary-900">Interest (18% p.a.)</p><p className="text-2xl font-bold text-primary-700">₹ {result.interest.toLocaleString('en-IN')}</p></div>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4"><p className="text-sm text-primary-900">Late Fee</p><p className="text-2xl font-bold text-primary-700">₹ {result.lateFee.toLocaleString('en-IN')}</p></div>
          </div>
        )}
        <p className="text-xs text-neutral-600">Indicative calculation. Actual interest and late fee may vary based on specific circumstances and GST provisions.</p>
      </div>
    </div>
  );
}
