'use client';

import { useState } from 'react';
import { X, Send } from 'lucide-react';
import Link from 'next/link';

interface Props {
  onClose: () => void;
}

export default function HRACalculator({ onClose }: Props) {
  const [salary, setSalary] = useState('');
  const [hra, setHra] = useState('');
  const [rent, setRent] = useState('');
  const [metro, setMetro] = useState(true);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const basicSalary = parseFloat(salary) || 0;
    const hraReceived = parseFloat(hra) || 0;
    const rentPaid = parseFloat(rent) || 0;

    const metroPercent = metro ? 0.5 : 0.4;
    const tenPercent = basicSalary * 0.1;

    const exemption = Math.min(
      hraReceived,
      basicSalary * metroPercent,
      Math.max(0, rentPaid - tenPercent)
    );

    setResult(Math.round(exemption));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-neutral-200">
      <div className="flex items-center justify-between p-6 border-b border-neutral-200">
        <h2 className="text-2xl font-bold text-neutral-900">HRA Exemption Calculator</h2>
        <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-md" aria-label="Close"><X className="w-6 h-6" /></button>
      </div>
      <div className="p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">Basic Salary (Annual) (₹)</label>
          <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-600" />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">HRA Received (Annual) (₹)</label>
          <input type="number" value={hra} onChange={(e) => setHra(e.target.value)} className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-600" />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">Rent Paid (Annual) (₹)</label>
          <input type="number" value={rent} onChange={(e) => setRent(e.target.value)} className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-600" />
        </div>
        <div>
          <label className="flex items-center">
            <input type="checkbox" checked={metro} onChange={(e) => setMetro(e.target.checked)} className="mr-2" />
            <span className="text-sm">Living in metro city (Mumbai, Delhi, Kolkata, Chennai)</span>
          </label>
        </div>
        <button onClick={calculate} className="w-full bg-primary-700 text-white py-3 rounded-md hover:bg-primary-800 font-medium">Calculate Exemption</button>
        {result !== null && (
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
            <p className="text-sm text-primary-900 mb-2">Estimated HRA Exemption</p>
            <p className="text-3xl font-bold text-primary-700">₹ {result.toLocaleString('en-IN')}</p>
          </div>
        )}
        <div className="bg-neutral-50 rounded-lg p-4">
          <p className="text-xs text-neutral-600 mb-3">Indicative calculation only. Actual exemption may vary based on specific circumstances.</p>
          <Link href="/contact?service=Direct%20Tax" className="inline-flex items-center text-sm text-primary-700 font-medium"><Send className="w-4 h-4 mr-2" />Get professional assistance</Link>
        </div>
      </div>
    </div>
  );
}
