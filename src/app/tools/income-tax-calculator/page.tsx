'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calculator, Info } from 'lucide-react';
import PageHero from '@/components/PageHero';

export default function IncomeTaxCalculatorPage() {
    const [regime, setRegime] = useState<'old' | 'new'>('new');
    const [income, setIncome] = useState('');
    const [standardDeduction, setStandardDeduction] = useState('75000');
    const [section80C, setSection80C] = useState('');
    const [section80D, setSection80D] = useState('');
    const [homeLoanInterest, setHomeLoanInterest] = useState('');
    const [result, setResult] = useState<any>(null);

    const calculateTax = () => {
        const grossIncome = parseFloat(income) || 0;
        const std = regime === 'new' ? parseFloat(standardDeduction) : 50000;
        const deduction80C = regime === 'old' ? (parseFloat(section80C) || 0) : 0;
        const deduction80D = regime === 'old' ? (parseFloat(section80D) || 0) : 0;
        const homeLoan = regime === 'old' ? (parseFloat(homeLoanInterest) || 0) : 0;

        let taxableIncome = grossIncome - std - deduction80C - deduction80D - homeLoan;
        taxableIncome = Math.max(0, taxableIncome);

        let tax = 0;
        let rebate = 0;

        if (regime === 'new') {
            // New Regime FY 2025-26 (Budget 2025)
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
            // Old Regime (unchanged)
            if (taxableIncome <= 250000) tax = 0;
            else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
            else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20;
            else tax = 112500 + (taxableIncome - 1000000) * 0.30;
        }

        // Apply rebate
        const taxAfterRebate = Math.max(0, tax - rebate);

        // Add 4% cess
        const cess = taxAfterRebate * 0.04;
        const totalTax = taxAfterRebate + cess;

        setResult({
            grossIncome,
            totalDeductions: std + deduction80C + deduction80D + homeLoan,
            taxableIncome,
            taxBeforeCess: tax,
            rebate,
            taxAfterRebate,
            cess,
            totalTax: Math.round(totalTax),
        });
    };

    return (
        <div className="bg-neutral-50 min-h-screen">
            <PageHero
                title="Income Tax Calculator"
                subtitle="FY 2025-26 (AY 2026-27) - Indicative tax estimation for salaried individuals"
                parentLink={{
                    href: "/tools",
                    label: "Back to Tools"
                }}
            />

            {/* Privacy Notice */}
            <section className="relative z-30 -mt-10 px-4">
                <div className="container-custom">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-6 text-left max-w-3xl mx-auto text-neutral-200">
                        <p className="text-sm">
                            <strong className="font-semibold text-accent">Privacy Notice:</strong> All calculations are performed locally in your browser. No data is transmitted or stored.
                        </p>
                    </div>
                </div>
            </section>

            {/* Calculator */}
            <section className="py-12 bg-white">
                <div className="container-custom max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Input Form */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">
                                    Tax Regime
                                </label>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setRegime('new')}
                                        className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${regime === 'new'
                                            ? 'border-primary-700 bg-primary-50 text-primary-900 font-semibold'
                                            : 'border-neutral-300 hover:border-neutral-400'
                                            }`}
                                    >
                                        New Regime
                                    </button>
                                    <button
                                        onClick={() => setRegime('old')}
                                        className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${regime === 'old'
                                            ? 'border-primary-700 bg-primary-50 text-primary-900 font-semibold'
                                            : 'border-neutral-300 hover:border-neutral-400'
                                            }`}
                                    >
                                        Old Regime
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="income" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Gross Annual Income (₹)
                                </label>
                                <input
                                    id="income"
                                    type="number"
                                    value={income}
                                    onChange={(e) => setIncome(e.target.value)}
                                    placeholder="e.g., 1200000"
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                                />
                            </div>

                            {regime === 'old' && (
                                <>
                                    <div>
                                        <label htmlFor="80c" className="block text-sm font-medium text-neutral-700 mb-2">
                                            Section 80C Deductions (₹)
                                        </label>
                                        <input
                                            id="80c"
                                            type="number"
                                            value={section80C}
                                            onChange={(e) => setSection80C(e.target.value)}
                                            placeholder="Max 150000"
                                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                                        />
                                        <p className="text-xs text-neutral-500 mt-1">PPF, ELSS, Life Insurance, etc.</p>
                                    </div>

                                    <div>
                                        <label htmlFor="80d" className="block text-sm font-medium text-neutral-700 mb-2">
                                            Section 80D Deductions (₹)
                                        </label>
                                        <input
                                            id="80d"
                                            type="number"
                                            value={section80D}
                                            onChange={(e) => setSection80D(e.target.value)}
                                            placeholder="Max 25000/50000"
                                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                                        />
                                        <p className="text-xs text-neutral-500 mt-1">Health insurance premiums</p>
                                    </div>

                                    <div>
                                        <label htmlFor="homeloan" className="block text-sm font-medium text-neutral-700 mb-2">
                                            Home Loan Interest (₹)
                                        </label>
                                        <input
                                            id="homeloan"
                                            type="number"
                                            value={homeLoanInterest}
                                            onChange={(e) => setHomeLoanInterest(e.target.value)}
                                            placeholder="Max 200000"
                                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                                        />
                                        <p className="text-xs text-neutral-500 mt-1">Section 24(b)</p>
                                    </div>
                                </>
                            )}

                            <button
                                onClick={calculateTax}
                                className="w-full px-6 py-4 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-semibold flex items-center justify-center gap-2"
                            >
                                <Calculator className="w-5 h-5" />
                                Calculate Tax
                            </button>
                        </div>

                        {/* Results */}
                        <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Tax Calculation</h3>

                            {result ? (
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-neutral-600">Gross Income:</span>
                                        <span className="font-medium">₹{result.grossIncome.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-neutral-600">Total Deductions:</span>
                                        <span className="font-medium text-green-600">-₹{result.totalDeductions.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between text-sm pt-2 border-t border-neutral-300">
                                        <span className="text-neutral-600">Taxable Income:</span>
                                        <span className="font-semibold">₹{result.taxableIncome.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-neutral-600">Tax (before rebate):</span>
                                        <span className="font-medium">₹{Math.round(result.taxBeforeCess).toLocaleString('en-IN')}</span>
                                    </div>
                                    {result.rebate > 0 && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-neutral-600">Section 87A Rebate:</span>
                                            <span className="font-medium text-green-600">-₹{Math.round(result.rebate).toLocaleString('en-IN')}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-sm">
                                        <span className="text-neutral-600">Health & Education Cess (4%):</span>
                                        <span className="font-medium">₹{Math.round(result.cess).toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between text-lg pt-3 border-t-2 border-neutral-400">
                                        <span className="font-bold text-neutral-900">Total Tax Liability:</span>
                                        <span className="font-bold text-primary-700">₹{result.totalTax.toLocaleString('en-IN')}</span>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-neutral-500 text-sm text-center py-8">
                                    Enter your income details and click Calculate Tax to see results
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Assumptions */}
                    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-blue-900 mb-2">Assumptions & Limitations</h4>
                                <ul className="text-sm text-blue-800 space-y-1">
                                    <li>• Standard deduction: ₹75,000 for salaried (new regime), ₹50,000 (old regime)</li>
                                    <li>• New regime: Section 87A rebate of ₹60,000 for taxable income up to ₹12 lakh</li>
                                    <li>• Effective tax-free income: ₹12.75 lakh for salaried in new regime</li>
                                    <li>• New regime does not allow most deductions (80C, 80D, home loan interest)</li>
                                    <li>• Old regime: Section 80C max ₹1.5 lakh, 80D ₹25k-₹50k (age-based)</li>
                                    <li>• Surcharge not included (applicable for income above ₹50 lakhs)</li>
                                    <li>• This is a simplified calculator for indicative purposes only</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-12 bg-neutral-50 border-t border-neutral-200">
                <div className="container-custom max-w-4xl">
                    <div className="bg-white rounded-lg p-8 border border-neutral-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                            Important Disclaimer
                        </h3>
                        <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                            This calculator provides indicative tax estimates based on simplified assumptions and general provisions. It does not account for all deductions, exemptions, rebates, surcharges, or individual circumstances. Tax laws are subject to frequent amendments.
                        </p>
                        <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                            Results should not be relied upon for actual tax computation, planning, or filing decisions. For accurate tax calculation and personalized advice, professional consultation is recommended.
                        </p>
                        <p className="text-sm text-neutral-500">
                            <strong>Last updated:</strong> January 2026
                        </p>
                        <div className="mt-6">
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-6 py-3 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors font-medium"
                            >
                                Need Professional Tax Planning?
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
