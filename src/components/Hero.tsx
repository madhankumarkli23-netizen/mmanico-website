"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Motion (BGM) */}
            <div className="absolute inset-0 z-0 bg-[#004992]">
                {/* Visual texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#004992] via-[#004992] to-accent/5 opacity-50" />
                <div className="w-full h-full bg-[length:200%_200%] bg-gradient-to-br from-[#004992] via-[#004992] to-[#004992] animate-gradient-slow opacity-90" />

                {/* Abstract animated shapes - iOS compatible */}
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full animate-pulse"
                    style={{
                        filter: 'blur(80px)',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform, opacity',
                        WebkitTransform: 'translate3d(0, 0, 0)'
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full animate-pulse"
                    style={{
                        filter: 'blur(80px)',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform, opacity',
                        WebkitTransform: 'translate3d(0, 0, 0)',
                        animationDelay: '1s'
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                        Excellence in <span className="text-accent italic">Financial</span> & <span className="text-accent italic">Legal</span> Strategy
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed">
                        M MANI & CO delivers premium chartered accountancy, audit, and tax compliances tailored for modern businesses and individuals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-accent hover:bg-accent-light text-primary-950 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/50 flex items-center gap-2"
                        >
                            Consult an Expert
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/services"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 transition-all duration-300"
                        >
                            Explore Services
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
