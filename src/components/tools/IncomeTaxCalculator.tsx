'use client';

import { useState } from 'react';
import { X, Send } from 'lucide-react';
import Link from 'next/link';

interface Props {
  onClose: () => void;
}

export default function IncomeTaxCalculator({ onClose }: Props) {
  const [income, setIncome] = useState('');
  const [regime, setRegime] = useState<'old' | 'new'>('new');
  const [deductions, setDeductions] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateTax = () => {
    const totalIncome = parseFloat(income) || 0;
    const totalDeductions = regime === 'old' ? (parseFloat(deductions) || 0) : 0;

    // Standard deduction: ₹75k for new regime, ₹50k for old regime
    const standardDeduction = regime === 'new' ? 75000 : 50000;
    const taxableIncome = Math.max(0, totalIncome - standardDeduction - totalDeductions);

    let tax = 0;
    let rebate = 0;

    if (regime === 'new') {
      // New tax regime FY 2025-26 (Budget 2025)
      if (taxableIncome <= 400000) tax = 0;
      else if (taxableIncome <= 800000) tax = (taxableIncome - 400000) * 0.05;
      else if (taxableIncome <= 1200000) tax = 20000 + (taxableIncome - 800000) * 0.10;
      else if (taxableIncome <= 1600000) tax = 60000 + (taxableIncome - 1200000) * 0.15;
      else if (taxableIncome <= 2000000) tax = 120000 + (taxableIncome - 1600000) * 0.20;
      else if (taxableIncome <= 2400000) tax = 200000 + (taxableIncome - 2000000) * 0.25;
      else tax = 300000 + (taxableIncome - 2400000) * 0.30;

      // Section 87A rebate: ₹60,000 for taxable income up to ₹12 lakh
      if (taxableIncome <= 1200000) {
        rebate = Math.min(tax, 60000);
      }
    } else {
      // Old tax regime (unchanged)
      if (taxableIncome <= 250000) tax = 0;
      else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
      else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20;
      else tax = 112500 + (taxableIncome - 1000000) * 0.30;
    }

    // Apply rebate
    const taxAfterRebate = Math.max(0, tax - rebate);

    // Add 4% cess
    tax = taxAfterRebate * 1.04;

    setResult(Math.round(tax));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-neutral-200">
      <div className="flex items-center justify-between p-6 border-b border-neutral-200">
        <h2 className="text-2xl font-bold text-neutral-900">Income Tax Estimator</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-neutral-100 rounded-md transition-colors"
          aria-label="Close calculator"
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Tax Regime
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="new"
                checked={regime === 'new'}
                onChange={(e) => setRegime(e.target.value as 'new')}
                className="mr-2"
              />
              <span className="text-sm">New Regime (FY 2025-26)</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="old"
                checked={regime === 'old'}
                onChange={(e) => setRegime(e.target.value as 'old')}
                className="mr-2"
              />
              <span className="text-sm">Old Regime</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Total Annual Income (₹)
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
            placeholder="Enter total income"
          />
        </div>

        {regime === 'old' && (
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Total Deductions (₹) - 80C, 80D, etc.
            </label>
            <input
              type="number"
              value={deductions}
              onChange={(e) => setDeductions(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
              placeholder="Enter total deductions"
            />
          </div>
        )}

        <button
          onClick={calculateTax}
          className="w-full bg-primary-700 text-white py-3 rounded-md hover:bg-primary-800 transition-colors font-medium"
        >
          Calculate Tax
        </button>

        {result !== null && (
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
            <p className="text-sm text-primary-900 mb-2">Estimated Tax Liability</p>
            <p className="text-3xl font-bold text-primary-700">₹ {result.toLocaleString('en-IN')}</p>
            <p className="text-xs text-primary-800 mt-2">
              (Including 4% cess, excludes surcharge if applicable)
            </p>
          </div>
        )}

        <div className="bg-neutral-50 rounded-lg p-4">
          <p className="text-xs text-neutral-600 leading-relaxed mb-3">
            This calculator uses FY 2025-26 tax rules with ₹75,000 standard deduction for new regime and ₹50,000 for old regime. Section 87A rebate of ₹60,000 is applied for taxable income up to ₹12 lakh in new regime. Results are indicative. For accurate tax planning and filing, professional consultation is recommended.
          </p>
          <Link
            href="/contact?service=Direct%20Tax"
            className="inline-flex items-center text-sm text-primary-700 hover:text-primary-800 font-medium"
          >
            <Send className="w-4 h-4 mr-2" aria-hidden="true" />
            Get professional assistance
          </Link>
        </div>
      </div>
    </div>
  );
}
