import React from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
}

const ServiceCard = ({ title, description, icon: Icon, href }: ServiceCardProps) => {
    return (
        <Link
            href={href}
            className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-900/20 flex flex-col items-start gap-4 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative p-3 bg-primary-50 rounded-xl group-hover:bg-accent group-hover:text-primary-950 transition-colors duration-300">
                <Icon className="w-8 h-8 text-primary-900 group-hover:text-primary-950" />
            </div>

            <h3 className="relative text-xl font-bold text-primary-950 group-hover:text-primary-700 transition-colors">
                {title}
            </h3>

            <p className="relative text-neutral-600 leading-relaxed">
                {description}
            </p>

            <div className="relative mt-auto pt-4 flex items-center text-primary-600 group-hover:text-accent-dark font-medium text-sm">
                Learn More
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
        </Link>
    );
};

export default ServiceCard;
