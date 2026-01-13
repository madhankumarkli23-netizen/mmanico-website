'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Resources', href: '/resources' },
  { name: 'Tools', href: '/tools' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md shadow-sm ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className={`flex items-center justify-between transition-all duration-200 ${isScrolled ? 'h-16' : 'h-20'
          }`}>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="M MANI & CO Home"
          >
            {/* Firm Name with Integrated CA Logo */}
            <div className="flex items-center">
              {/* Logo Icon - Optical scaling to match text CAP-HEIGHT (visual size) not line-height */}
              <div className="relative flex-shrink-0 transition-all duration-200 -mr-1.5 h-[15px] w-[15px] md:h-[18px] md:w-[18px] lg:h-[24px] lg:w-[24px]">
                <Image
                  src="/ca-logo-final.png"
                  alt="CA Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text Branding - Typography sized to match logo height */}
              <div className="flex flex-col -space-y-0.5 md:-space-y-1 justify-center h-full">
                <span
                  className={`text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight transition-all duration-200 text-[#145886] flex items-center`}
                  style={{
                    fontFamily: 'var(--font-serif-pro), serif',
                    height: '100%' // Ensure text container fills height related to logo
                  }}
                >
                  M MANI & CO
                </span>
                <span
                  className={`font-sans font-medium uppercase tracking-[0.15em] mt-1 transition-all duration-200 text-primary-600 ${isScrolled
                    ? 'text-[0.6rem] md:text-[0.65rem]'
                    : 'text-[0.65rem] md:text-xs'
                    }`}
                >
                  Chartered Accountants
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 ${isActive
                    ? 'text-accent border-accent font-semibold'
                    : 'text-primary-900 border-transparent hover:text-accent hover:border-accent'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md transition-colors text-primary-900 hover:bg-neutral-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${isActive
                      ? 'text-primary-700 bg-primary-50 font-semibold'
                      : 'text-neutral-700 hover:text-primary-700 hover:bg-primary-50'
                      }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
