'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Info } from 'lucide-react';
import PageHero from '@/components/PageHero';

const tdsSchedule = {
    'Q1': {
        quarter: 'Q1 (April - June)',
        paymentDueDate: '7th of following month',
        returnDueDate: '31st July',
        form: 'Form 24Q / 26Q / 27Q',
    },
    'Q2': {
        quarter: 'Q2 (July - September)',
        paymentDueDate: '7th of following month',
        returnDueDate: '31st October',
        form: 'Form 24Q / 26Q / 27Q',
    },
    'Q3': {
        quarter: 'Q3 (October - December)',
        paymentDueDate: '7th of following month',
        returnDueDate: '31st January',
        form: 'Form 24Q / 26Q / 27Q',
    },
    'Q4': {
        quarter: 'Q4 (January - March)',
        paymentDueDate: '7th of following month (30th April for March)',
        returnDueDate: '31st May',
        form: 'Form 24Q / 26Q / 27Q',
    },
};

const monthlyDueDates = [
    { month: 'April', dueDate: '7th May' },
    { month: 'May', dueDate: '7th June' },
    { month: 'June', dueDate: '7th July' },
    { month: 'July', dueDate: '7th August' },
    { month: 'August', dueDate: '7th September' },
    { month: 'September', dueDate: '7th October' },
    { month: 'October', dueDate: '7th November' },
    { month: 'November', dueDate: '7th December' },
    { month: 'December', dueDate: '7th January' },
    { month: 'January', dueDate: '7th February' },
    { month: 'February', dueDate: '7th March' },
    { month: 'March', dueDate: '30th April' },
];

export default function TDSDueDateCheckerPage() {
    const [selectedQuarter, setSelectedQuarter] = useState<string>('Q1');

    return (
        <div className="bg-neutral-50 min-h-screen">
            <PageHero
                title="TDS Due Date Checker"
                subtitle="Payment and return filing due dates for TDS compliance"
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

            {/* Quarter Selector */}
            <section className="py-12 bg-white">
                <div className="container-custom max-w-5xl">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-4 text-center">Select Quarter</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {Object.keys(tdsSchedule).map((quarter) => (
                                <button
                                    key={quarter}
                                    onClick={() => setSelectedQuarter(quarter)}
                                    className={`px-6 py-4 rounded-lg border-2 transition-all font-semibold ${selectedQuarter === quarter
                                            ? 'border-primary-700 bg-primary-50 text-primary-900'
                                            : 'border-neutral-300 hover:border-neutral-400 text-neutral-700'
                                        }`}
                                >
                                    {quarter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selected Quarter Details */}
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 border-2 border-primary-200 shadow-lg">
                        <h3 className="text-2xl font-bold text-primary-900 mb-6">
                            {tdsSchedule[selectedQuarter as keyof typeof tdsSchedule].quarter}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-center gap-2 mb-2">
                                    <Calendar className="w-5 h-5 text-green-600" />
                                    <h4 className="font-semibold text-neutral-900">Payment Due Date</h4>
                                </div>
                                <p className="text-2xl font-bold text-green-700">
                                    {tdsSchedule[selectedQuarter as keyof typeof tdsSchedule].paymentDueDate}
                                </p>
                                <p className="text-sm text-neutral-600 mt-2">For TDS deducted in the month</p>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-center gap-2 mb-2">
                                    <Calendar className="w-5 h-5 text-blue-600" />
                                    <h4 className="font-semibold text-neutral-900">Return Filing Due Date</h4>
                                </div>
                                <p className="text-2xl font-bold text-blue-700">
                                    {tdsSchedule[selectedQuarter as keyof typeof tdsSchedule].returnDueDate}
                                </p>
                                <p className="text-sm text-neutral-600 mt-2">
                                    {tdsSchedule[selectedQuarter as keyof typeof tdsSchedule].form}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monthly Payment Schedule */}
            <section className="py-12 bg-neutral-50">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">Monthly TDS Payment Schedule</h2>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-primary-900 text-white">
                                    <th className="px-6 py-4 text-left font-semibold">TDS Deducted in Month</th>
                                    <th className="px-6 py-4 text-left font-semibold">Payment Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {monthlyDueDates.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b border-neutral-200 ${index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
                                            } hover:bg-primary-50 transition-colors`}
                                    >
                                        <td className="px-6 py-4 font-medium text-neutral-900">{item.month}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-2 text-primary-700 font-semibold">
                                                <Calendar className="w-4 h-4" />
                                                {item.dueDate}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* TDS Forms Reference */}
            <section className="py-12 bg-white">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">TDS Return Forms</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h3 className="font-bold text-blue-900 mb-2">Form 24Q</h3>
                            <p className="text-sm text-blue-800">TDS on salary payments to employees</p>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h3 className="font-bold text-green-900 mb-2">Form 26Q</h3>
                            <p className="text-sm text-green-800">TDS on payments other than salary (contractors, professionals, etc.)</p>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                            <h3 className="font-bold text-purple-900 mb-2">Form 27Q</h3>
                            <p className="text-sm text-purple-800">TDS on payments to non-residents</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Notes */}
            <section className="py-12 bg-neutral-50">
                <div className="container-custom max-w-4xl">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-blue-900 mb-3">Important Notes</h4>
                                <ul className="text-sm text-blue-800 space-y-2">
                                    <li>• TDS must be deposited by the 7th of the following month (except March - 30th April)</li>
                                    <li>• Late payment attracts interest under Section 201(1A)</li>
                                    <li>• Quarterly returns must be filed by the specified due dates</li>
                                    <li>• Late filing attracts fee under Section 234E (₹200 per day)</li>
                                    <li>• Use Challan 281 for TDS payment</li>
                                    <li>• Ensure correct TAN, assessment year, and section code while depositing</li>
                                    <li>• If due date falls on a holiday, the next working day is the due date</li>
                                    <li>• Form 16/16A must be issued to deductees after filing returns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-12 bg-white border-t border-neutral-200">
                <div className="container-custom max-w-4xl">
                    <div className="bg-white rounded-lg p-8 border border-neutral-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                            Important Disclaimer
                        </h3>
                        <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                            This page provides general information on TDS due dates for payment and return filing. Due dates are subject to amendments and extensions by the government. This should not be relied upon for actual compliance decisions without verification of current provisions.
                        </p>
                        <p className="text-sm text-neutral-500 mb-4">
                            <strong>Last updated:</strong> January 2026
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors font-medium"
                        >
                            Need TDS Compliance Assistance?
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
