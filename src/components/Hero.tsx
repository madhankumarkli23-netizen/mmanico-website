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

                {/* Abstract animated shapes - iOS compatible */}
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full animate-pulse"
                    style={{
                        filter: 'blur(60px)',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform, opacity',
                        WebkitTransform: 'translate3d(0, 0, 0)',
                        opacity: 0.7
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full animate-pulse"
                    style={{
                        filter: 'blur(60px)',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform, opacity',
                        WebkitTransform: 'translate3d(0, 0, 0)',
                        animationDelay: '1s',
                        opacity: 0.7
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4">
                        M MANI & CO
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl text-accent font-light italic mb-6 tracking-wide">
                        Financial & Legal
                    </p>
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-3">
                        Chartered Accountants
                    </p>
                    <p className="text-lg md:text-xl text-white/90 font-light mb-6">
                        Bengaluru, Karnataka
                    </p>
                    <div className="h-px w-24 bg-white/30 mx-auto my-6"></div>
                    <p className="text-base md:text-lg text-neutral-200 max-w-3xl mx-auto font-light leading-relaxed mb-8">
                        Professional CA firm in Bengaluru providing comprehensive services including income tax compliance and planning, GST advisory and returns, statutory audits, accounting and bookkeeping, company law compliance, and regulatory filings for businesses and individuals.
                    </p>

                    {/* Service Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
                        <div className="text-center">
                            <p className="text-white font-medium mb-1">Tax Advisory</p>
                            <p className="text-sm text-white/70">Income Tax, GST & TDS</p>
                        </div>
                        <div className="text-center">
                            <p className="text-white font-medium mb-1">Audit Services</p>
                            <p className="text-sm text-white/70">Statutory & Internal Audit</p>
                        </div>
                        <div className="text-center">
                            <p className="text-white font-medium mb-1">Compliance</p>
                            <p className="text-sm text-white/70">ROC & Regulatory Filings</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-accent hover:bg-accent-light text-primary-950 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/50 flex items-center gap-2"
                        >
                            Contact Us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/services"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 transition-all duration-300"
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
