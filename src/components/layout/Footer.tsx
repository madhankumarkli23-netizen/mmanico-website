import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  pages: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Tools', href: '/tools' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary-900 text-neutral-300 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-700/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-800/10 rounded-full blur-3xl"></div>

      <div className="container-custom py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Firm Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* CA India Logo */}
              <div className="relative w-[60px] h-[60px] flex-shrink-0">
                <Image
                  src="/ca-india-logo.png"
                  alt="ICAI Chartered Accountant"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center -space-y-0.5">
                <span className="text-2xl font-bold text-white">
                  M MANI & CO
                </span>
                <span className="text-sm text-neutral-300 font-medium">
                  Chartered Accountants
                </span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">
              Tax, audit, accounting, and compliance support for individuals and businesses.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm">Bengaluru, Karnataka</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neutral-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+919632818089"
                  className="text-sm hover:text-white transition-colors"
                >
                  +91 96328 18089
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neutral-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@mmanico.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  info@mmanico.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="bg-primary-800/50 rounded-lg p-6 mb-8">
            <p className="text-xs text-neutral-300 leading-relaxed">
              <strong className="text-white">Important Notice:</strong> This website is for informational purposes and does not constitute solicitation or advertisement. Professional services will be provided in accordance with applicable laws and the ICAI Code of Ethics.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>
              &copy; {currentYear} M MANI & CO. All rights reserved.
            </p>
            <p className="text-xs">
              Professional services subject to engagement terms
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
