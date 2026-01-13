'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, Info } from 'lucide-react';
import PageHero from '@/components/PageHero';

export default function GSTCalculatorPage() {
    const [taxAmount, setTaxAmount] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [result, setResult] = useState<any>(null);

    const calculateGST = () => {
        const tax = parseFloat(taxAmount) || 0;
        const due = new Date(dueDate);
        const payment = new Date(paymentDate);

        if (!dueDate || !paymentDate || payment < due) {
            setResult({ error: 'Please enter valid dates. Payment date should be after due date.' });
            return;
        }

        // Calculate number of days delayed
        const diffTime = Math.abs(payment.getTime() - due.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Interest: 18% per annum (1.5% per month or part thereof)
        const months = Math.ceil(diffDays / 30);
        const interest = tax * 0.015 * months;

        // Late fee: ₹50 per day (max ₹5000) for GSTR-3B
        // Simplified: ₹100 per day for both CGST and SGST
        const lateFeePerDay = 100;
        const lateFee = Math.min(diffDays * lateFeePerDay, 10000); // Max ₹10,000 (₹5000 each for CGST/SGST)

        const total = interest + lateFee;

        setResult({
            taxAmount: tax,
            daysDelayed: diffDays,
            months,
            interest: Math.round(interest),
            lateFee,
            total: Math.round(total),
        });
    };

    return (
        <div className="bg-neutral-50 min-h-screen">
            <PageHero
                title="GST Interest & Late Fee Calculator"
                subtitle="Calculate interest and late fee for delayed GST payment"
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
                                <label htmlFor="tax" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Tax Amount (₹)
                                </label>
                                <input
                                    id="tax"
                                    type="number"
                                    value={taxAmount}
                                    onChange={(e) => setTaxAmount(e.target.value)}
                                    placeholder="e.g., 50000"
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="due" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Due Date
                                </label>
                                <input
                                    id="due"
                                    type="date"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="payment" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Actual Payment Date
                                </label>
                                <input
                                    id="payment"
                                    type="date"
                                    value={paymentDate}
                                    onChange={(e) => setPaymentDate(e.target.value)}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                                />
                            </div>

                            <button
                                onClick={calculateGST}
                                className="w-full px-6 py-4 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-semibold flex items-center justify-center gap-2"
                            >
                                <Calculator className="w-5 h-5" />
                                Calculate Interest & Late Fee
                            </button>
                        </div>

                        {/* Results */}
                        <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Calculation Result</h3>

                            {result ? (
                                result.error ? (
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                        <p className="text-sm text-red-800">{result.error}</p>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-neutral-600">Tax Amount:</span>
                                            <span className="font-medium">₹{result.taxAmount.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-neutral-600">Days Delayed:</span>
                                            <span className="font-medium">{result.daysDelayed} days ({result.months} month{result.months > 1 ? 's' : ''})</span>
                                        </div>
                                        <div className="flex justify-between text-sm pt-2 border-t border-neutral-300">
                                            <span className="text-neutral-600">Interest (18% p.a.):</span>
                                            <span className="font-medium text-orange-600">₹{result.interest.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-neutral-600">Late Fee:</span>
                                            <span className="font-medium text-orange-600">₹{result.lateFee.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="flex justify-between text-lg pt-3 border-t-2 border-neutral-400">
                                            <span className="font-bold text-neutral-900">Total Penalty:</span>
                                            <span className="font-bold text-red-700">₹{result.total.toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>
                                )
                            ) : (
                                <p className="text-neutral-500 text-sm text-center py-8">
                                    Enter tax amount and dates to calculate interest and late fee
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Assumptions */}
                    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-blue-900 mb-2">Assumptions & Notes</h4>
                                <ul className="text-sm text-blue-800 space-y-1">
                                    <li>• Interest calculated at 18% per annum (1.5% per month or part thereof)</li>
                                    <li>• Late fee: ₹100 per day (₹50 each for CGST and SGST)</li>
                                    <li>• Maximum late fee capped at ₹10,000 (₹5,000 each for CGST/SGST)</li>
                                    <li>• This calculation is for GSTR-3B late filing/payment</li>
                                    <li>• Different rates may apply for other GST returns</li>
                                    <li>• Interest is calculated on a monthly basis (part of month = full month)</li>
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
                            This calculator provides indicative estimates of GST interest and late fee based on standard provisions. Actual liability may vary based on specific circumstances, return type, and amendments to GST law. This should not be relied upon for actual compliance or payment decisions.
                        </p>
                        <p className="text-sm text-neutral-500 mb-4">
                            <strong>Last updated:</strong> January 2026
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors font-medium"
                        >
                            Need GST Compliance Assistance?
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
