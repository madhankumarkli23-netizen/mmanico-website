'use client';

import Link from 'next/link';
import { Calendar, Download, Info } from 'lucide-react';
import PageHero from '@/components/PageHero';

const advanceTaxSchedule = [
    {
        installment: '1st Installment',
        dueDate: '15th June',
        percentage: '15%',
        cumulativePercentage: '15%',
        applicableTo: 'Estimated tax liability for the year',
    },
    {
        installment: '2nd Installment',
        dueDate: '15th September',
        percentage: '45%',
        cumulativePercentage: '60%',
        applicableTo: 'Cumulative 60% of estimated tax',
    },
    {
        installment: '3rd Installment',
        dueDate: '15th December',
        percentage: '75%',
        cumulativePercentage: '75%',
        applicableTo: 'Cumulative 75% of estimated tax',
    },
    {
        installment: '4th Installment',
        dueDate: '15th March',
        percentage: '100%',
        cumulativePercentage: '100%',
        applicableTo: 'Full estimated tax liability',
    },
];

export default function AdvanceTaxReminderPage() {
    const downloadReminder = () => {
        // Create a simple text file with advance tax dates
        const content = `ADVANCE TAX PAYMENT REMINDER - FY 2025-26

1st Installment: 15th June 2025 - 15% of estimated tax
2nd Installment: 15th September 2025 - 45% (cumulative 60%)
3rd Installment: 15th December 2025 - 75% (cumulative 75%)
4th Installment: 15th March 2026 - 100% (full tax)

Note: These are general due dates. Please verify with current provisions.

Generated from: M MANI & CO Tax Tools
Website: https://mmanico-website.vercel.app
`;

        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'advance-tax-reminder-fy2025-26.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-neutral-50 min-h-screen">
            <PageHero
                title="Advance Tax Reminder"
                subtitle="Due dates and installment schedule for advance tax payments"
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
                            <strong className="font-semibold text-accent">Privacy Notice:</strong> All information is displayed locally. No data is collected or transmitted.
                        </p>
                    </div>
                </div>
            </section>

            {/* Schedule Table */}
            <section className="py-12 bg-white">
                <div className="container-custom max-w-5xl">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Advance Tax Payment Schedule</h2>
                        <p className="text-neutral-600">For Financial Year 2025-26 (Assessment Year 2026-27)</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-primary-900 text-white">
                                    <th className="px-6 py-4 text-left font-semibold">Installment</th>
                                    <th className="px-6 py-4 text-left font-semibold">Due Date</th>
                                    <th className="px-6 py-4 text-left font-semibold">Amount to Pay</th>
                                    <th className="px-6 py-4 text-left font-semibold">Cumulative %</th>
                                </tr>
                            </thead>
                            <tbody>
                                {advanceTaxSchedule.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b border-neutral-200 ${index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
                                            } hover:bg-primary-50 transition-colors`}
                                    >
                                        <td className="px-6 py-4 font-medium text-neutral-900">{item.installment}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-primary-700" />
                                                <span className="font-semibold text-primary-700">{item.dueDate}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-neutral-700">{item.applicableTo}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                                                {item.cumulativePercentage}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 text-center">
                        <button
                            onClick={downloadReminder}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-medium"
                        >
                            <Download className="w-5 h-5" />
                            Download Reminder (Text File)
                        </button>
                    </div>
                </div>
            </section>

            {/* Who Must Pay */}
            <section className="py-12 bg-neutral-50">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">Who Must Pay Advance Tax?</h2>
                    <div className="bg-white rounded-lg p-6 border border-neutral-200 space-y-4">
                        <p className="text-neutral-700">
                            Advance tax is payable by taxpayers whose estimated tax liability for the year exceeds <strong>₹10,000</strong> after considering TDS/TCS.
                        </p>
                        <h3 className="font-semibold text-neutral-900 mt-4">Applicable to:</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Salaried individuals with income from other sources (business, capital gains, etc.)</li>
                            <li>Self-employed professionals and business owners</li>
                            <li>Individuals with capital gains from property or investments</li>
                            <li>Companies and firms</li>
                        </ul>
                        <h3 className="font-semibold text-neutral-900 mt-4">Exemptions:</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Senior citizens (60 years and above) with no business income</li>
                            <li>Taxpayers opting for presumptive taxation under Section 44AD/44ADA (4th installment only)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Important Notes */}
            <section className="py-12 bg-white">
                <div className="container-custom max-w-4xl">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-blue-900 mb-3">Important Notes</h4>
                                <ul className="text-sm text-blue-800 space-y-2">
                                    <li>• Interest under Section 234B applies for shortfall in advance tax payment</li>
                                    <li>• Interest under Section 234C applies for deferment of advance tax installments</li>
                                    <li>• Advance tax can be paid online through the Income Tax e-filing portal</li>
                                    <li>• Use Challan 280 for advance tax payment</li>
                                    <li>• Ensure correct assessment year and PAN while making payment</li>
                                    <li>• Keep payment challans for record and ITR filing</li>
                                    <li>• If 15th falls on a holiday, the next working day is the due date</li>
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
                            This page provides general information on advance tax due dates and installment schedules. Due dates and provisions are subject to amendments and extensions by the government. This should not be relied upon for actual tax planning or payment decisions without verification of current provisions.
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
