"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    parentLink?: {
        href: string;
        label: string;
    };
}

const PageHero = ({ title, subtitle, parentLink }: PageHeroProps) => {
    return (
        <section className="relative w-full overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
            {/* Background Motion (BGM) */}
            <div className="absolute inset-0 z-0 bg-[#004992]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
                <div className="w-full h-full bg-gradient-to-br from-[#004992] via-[#004992] to-[#004992] animate-gradient-slow" />

                {/* Abstract animated shapes - iOS compatible */}
                <div
                    className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full animate-pulse"
                    style={{
                        filter: 'blur(80px)',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform, opacity',
                        WebkitTransform: 'translate3d(0, 0, 0)'
                    }}
                />
                <div
                    className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-500/10 rounded-full animate-pulse"
                    style={{
                        filter: 'blur(80px)',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform, opacity',
                        WebkitTransform: 'translate3d(0, 0, 0)',
                        animationDelay: '0.7s'
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 container-custom text-center">
                {parentLink && (
                    <Link
                        href={parentLink.href}
                        className="inline-flex items-center text-accent hover:text-white mb-6 transition-colors duration-300 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        {parentLink.label}
                    </Link>
                )}

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif tracking-tight animate-fade-in-up">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in delay-100">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
