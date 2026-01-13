'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, Info } from 'lucide-react';
import PageHero from '@/components/PageHero';

export default function HRACalculatorPage() {
    const [basicSalary, setBasicSalary] = useState('');
    const [hraReceived, setHraReceived] = useState('');
    const [rentPaid, setRentPaid] = useState('');
    const [cityType, setCityType] = useState<'metro' | 'non-metro'>('metro');
    const [result, setResult] = useState<any>(null);

    const calculateHRA = () => {
        const basic = parseFloat(basicSalary) || 0;
        const hra = parseFloat(hraReceived) || 0;
        const rent = parseFloat(rentPaid) || 0;

        // HRA exemption is minimum of:
        // 1. Actual HRA received
        // 2. 50% of basic (metro) or 40% of basic (non-metro)
        // 3. Rent paid minus 10% of basic

        const percentageOfBasic = cityType === 'metro' ? basic * 0.50 : basic * 0.40;
        const rentMinusTenPercent = Math.max(0, rent - (basic * 0.10));

        const exemptHRA = Math.min(hra, percentageOfBasic, rentMinusTenPercent);
        const taxableHRA = hra - exemptHRA;

        setResult({
            actualHRA: hra,
            exemptHRA: Math.round(exemptHRA),
            taxableHRA: Math.round(taxableHRA),
            calculation: {
                option1: hra,
                option2: percentageOfBasic,
                option3: rentMinusTenPercent,
            }
        });
    };

    return (
        <div className="bg-neutral-50 min-h-screen">
            <PageHero
                title="HRA Exemption Calculator"
                subtitle="Calculate tax-exempt portion of House Rent Allowance"
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
                                <label htmlFor="basic" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Basic Salary (Annual) (₹)
                                </label>
                                <input
                                    id="basic"
                                    type="number"
                                    value={basicSalary}
                                    onChange={(e) => setBasicSalary(e.target.value)}
                                    placeholder="e.g., 600000"
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="hra" className="block text-sm font-medium text-neutral-700 mb-2">
                                    HRA Received (Annual) (₹)
                                </label>
                                <input
                                    id="hra"
                                    type="number"
                                    value={hraReceived}
                                    onChange={(e) => setHraReceived(e.target.value)}
                                    placeholder="e.g., 240000"
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="rent" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Rent Paid (Annual) (₹)
                                </label>
                                <input
                                    id="rent"
                                    type="number"
                                    value={rentPaid}
                                    onChange={(e) => setRentPaid(e.target.value)}
                                    placeholder="e.g., 300000"
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">
                                    City Type
                                </label>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setCityType('metro')}
                                        className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${cityType === 'metro'
                                                ? 'border-primary-700 bg-primary-50 text-primary-900 font-semibold'
                                                : 'border-neutral-300 hover:border-neutral-400'
                                            }`}
                                    >
                                        Metro (50%)
                                    </button>
                                    <button
                                        onClick={() => setCityType('non-metro')}
                                        className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${cityType === 'non-metro'
                                                ? 'border-primary-700 bg-primary-50 text-primary-900 font-semibold'
                                                : 'border-neutral-300 hover:border-neutral-400'
                                            }`}
                                    >
                                        Non-Metro (40%)
                                    </button>
                                </div>
                                <p className="text-xs text-neutral-500 mt-2">
                                    Metro cities: Delhi, Mumbai, Kolkata, Chennai
                                </p>
                            </div>

                            <button
                                onClick={calculateHRA}
                                className="w-full px-6 py-4 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-semibold flex items-center justify-center gap-2"
                            >
                                <Calculator className="w-5 h-5" />
                                Calculate HRA Exemption
                            </button>
                        </div>

                        {/* Results */}
                        <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Calculation Result</h3>

                            {result ? (
                                <div className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-neutral-600">Actual HRA Received:</span>
                                            <span className="font-medium">₹{result.actualHRA.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="flex justify-between text-lg pt-3 border-t-2 border-green-200 bg-green-50 -mx-6 px-6 py-3">
                                            <span className="font-bold text-green-900">Exempt HRA:</span>
                                            <span className="font-bold text-green-700">₹{result.exemptHRA.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="flex justify-between text-lg border-t-2 border-red-200 bg-red-50 -mx-6 px-6 py-3">
                                            <span className="font-bold text-red-900">Taxable HRA:</span>
                                            <span className="font-bold text-red-700">₹{result.taxableHRA.toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-neutral-300">
                                        <h4 className="text-sm font-semibold text-neutral-700 mb-3">How it's calculated:</h4>
                                        <p className="text-xs text-neutral-600 mb-2">Exempt HRA is the <strong>minimum</strong> of:</p>
                                        <div className="space-y-2 text-xs">
                                            <div className="flex justify-between">
                                                <span className="text-neutral-600">1. Actual HRA received</span>
                                                <span className="font-medium">₹{Math.round(result.calculation.option1).toLocaleString('en-IN')}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-neutral-600">2. {cityType === 'metro' ? '50%' : '40%'} of basic salary</span>
                                                <span className="font-medium">₹{Math.round(result.calculation.option2).toLocaleString('en-IN')}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-neutral-600">3. Rent - 10% of basic</span>
                                                <span className="font-medium">₹{Math.round(result.calculation.option3).toLocaleString('en-IN')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-neutral-500 text-sm text-center py-8">
                                    Enter your salary and rent details to calculate HRA exemption
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-blue-900 mb-2">Important Notes</h4>
                                <ul className="text-sm text-blue-800 space-y-1">
                                    <li>• HRA exemption is available only if you are living in rented accommodation</li>
                                    <li>• Rent receipts may be required for amounts exceeding ₹1 lakh per annum</li>
                                    <li>• PAN of landlord required if annual rent exceeds ₹1 lakh</li>
                                    <li>• HRA exemption is not available if you own the property where you reside</li>
                                    <li>• This calculation assumes you are not living in your own property</li>
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
                            This calculator provides indicative HRA exemption estimates based on standard formula. It does not account for all individual circumstances or recent regulatory changes. Actual exemption may vary based on specific situations.
                        </p>
                        <p className="text-sm text-neutral-500 mb-4">
                            <strong>Last updated:</strong> January 2026
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors font-medium"
                        >
                            Need Tax Planning Assistance?
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
