"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Motion (BGM) */}
            <div className="absolute inset-0 z-0" style={{ backgroundColor: 'rgb(0, 73, 146)' }}>
                {/* Visual texture overlay */}
                <div className="absolute inset-0 opacity-50" style={{
                    background: 'linear-gradient(to bottom right, rgb(0, 73, 146), rgb(0, 73, 146), rgba(212, 175, 55, 0.05))'
                }} />
                <div className="w-full h-full bg-[length:200%_200%] animate-gradient-slow opacity-90" style={{
                    background: 'linear-gradient(to bottom right, rgb(0, 73, 146), rgb(0, 73, 146), rgb(0, 73, 146))'
                }} />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-4 md:space-y-5 animate-fade-in-up">
                    {/* Main Value Statement */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
                        Professional Chartered Accountancy Services in Bengaluru
                    </h1>

                    {/* Service Description */}
                    <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                        Comprehensive tax, audit, accounting, and compliance services for businesses and individuals
                    </p>

                    {/* Service Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto pt-6">
                        <div className="text-center py-2">
                            <p className="text-white font-medium text-xs sm:text-sm md:text-base mb-1">Tax Advisory</p>
                            <p className="text-xs text-white/70">Income Tax, GST & TDS</p>
                        </div>
                        <div className="text-center py-2">
                            <p className="text-white font-medium text-xs sm:text-sm md:text-base mb-1">Audit Services</p>
                            <p className="text-xs text-white/70">Statutory & Internal</p>
                        </div>
                        <div className="text-center py-2">
                            <p className="text-white font-medium text-xs sm:text-sm md:text-base mb-1">Compliance</p>
                            <p className="text-xs text-white/70">ROC & Regulatory</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-5">
                        <Link
                            href="/contact"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Contact Us
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        <Link
                            href="/services"
                            className="btn-secondary"
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-accent rounded-full animate-scroll-down" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
