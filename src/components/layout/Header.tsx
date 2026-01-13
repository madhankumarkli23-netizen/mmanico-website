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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className={`flex items-center justify-between transition-all duration-200 ${isScrolled ? 'h-16' : 'h-20'
          }`}>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4 group"
            aria-label="M MANI & CO Home"
          >
            {/* Firm Name with Integrated CA Logo */}
            <div className="flex items-center gap-2 md:gap-2.5">
              {/* Logo Icon - Properly sized and transparent */}
              <div className={`relative flex-shrink-0 transition-all duration-200 ${isScrolled
                ? 'h-10 w-10 md:h-12 md:w-12'
                : 'h-12 w-12 md:h-16 md:w-16'
                }`}>
                <Image
                  src="/ca-logo-final.png"
                  alt="CA Logo"
                  fill
                  className={`object-contain transition-all duration-200 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'
                    }`}
                  priority
                />
              </div>

              {/* Text Branding - Professional Serif Typography */}
              <div className="flex flex-col">
                <span
                  className={`text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight transition-all duration-200`}
                  style={{
                    fontFamily: 'var(--font-serif-pro), serif',
                    color: isScrolled ? '#145886' : '#FFFFFF'
                  }}
                >
                  M MANI & CO
                </span>
                <span
                  className={`font-sans font-medium uppercase tracking-[0.15em] mt-1 transition-all duration-200 ${isScrolled
                    ? 'text-[0.6rem] md:text-[0.65rem] text-primary-600'
                    : 'text-[0.65rem] md:text-xs text-white/90'
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
                    : isScrolled
                      ? 'text-primary-900 border-transparent hover:text-accent hover:border-accent'
                      : 'text-white/90 border-transparent hover:text-white hover:border-accent'
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
            className={`md:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-primary-900 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
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
