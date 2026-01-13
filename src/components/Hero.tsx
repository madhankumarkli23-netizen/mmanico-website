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
                <div className="max-w-4xl mx-auto space-y-3 animate-fade-in-up">
                    {/* Firm Name - Premium serif font */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight">
                        M MANI & CO
                    </h1>

                    {/* Tagline - Elegant small-caps */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-accent font-light tracking-[0.15em] uppercase mt-3" style={{ fontVariant: 'small-caps' }}>
                        Financial & Legal
                    </p>

                    {/* Profession - Clear */}
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium tracking-wide mt-4">
                        Chartered Accountants
                    </p>

                    {/* Location - Refined uppercase */}
                    <p className="text-sm sm:text-base md:text-lg text-white/95 font-normal tracking-wider mt-2">
                        BENGALURU, KARNATAKA
                    </p>

                    {/* Divider */}
                    <div className="h-px w-20 bg-accent/50 mx-auto my-5"></div>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-base lg:text-lg text-white/90 max-w-3xl mx-auto font-normal leading-relaxed px-4 mt-4">
                        Professional CA firm in Bengaluru providing comprehensive services including income tax compliance and planning, GST advisory and returns, statutory audits, accounting and bookkeeping, company law compliance, and regulatory filings for businesses and individuals.
                    </p>

                    {/* Service Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto pt-6 pb-3 px-4">
                        <div className="text-center py-2">
                            <p className="text-white font-semibold mb-1 text-sm md:text-base tracking-wide uppercase" style={{ letterSpacing: '0.05em' }}>Tax Advisory</p>
                            <p className="text-xs md:text-sm text-white/75 font-normal">Income Tax, GST & TDS</p>
                        </div>
                        <div className="text-center py-2">
                            <p className="text-white font-semibold mb-1 text-sm md:text-base tracking-wide uppercase" style={{ letterSpacing: '0.05em' }}>Audit Services</p>
                            <p className="text-xs md:text-sm text-white/75 font-normal">Statutory & Internal Audit</p>
                        </div>
                        <div className="text-center py-2">
                            <p className="text-white font-semibold mb-1 text-sm md:text-base tracking-wide uppercase" style={{ letterSpacing: '0.05em' }}>Compliance</p>
                            <p className="text-xs md:text-sm text-white/75 font-normal">ROC & Regulatory Filings</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-5">
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
