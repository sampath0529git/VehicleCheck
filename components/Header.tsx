'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, SITE_NAME } from '@/lib/config';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#102A43] border-b border-[#16324F]/80 text-white shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Single Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5D547] rounded-md"
            aria-label={`${SITE_NAME} Homepage`}
          >
            <div className="w-8 h-8 rounded-lg bg-[#F5D547] flex items-center justify-center text-[#102A43] shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#102A43]" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              {SITE_NAME}
            </span>
          </Link>

          {/* Zone 2: 4-5 Clean Single-Line Nav Links */}
          <nav
            className="hidden lg:flex items-center gap-6 text-sm font-medium"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 text-sm ${
                    isActive
                      ? 'border-[#F5D547] text-[#F5D547] font-semibold'
                      : 'border-transparent text-slate-200 hover:text-white hover:border-slate-400'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/#checker"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wide uppercase text-[#102A43] bg-[#F5D547] rounded-lg hover:bg-[#ebd040] active:scale-[0.98] transition-all whitespace-nowrap shadow-sm min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Check Registration
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5D547] min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#102A43] border-t border-[#16324F] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 rounded-md text-base font-medium min-h-[44px] ${
                    isActive
                      ? 'bg-[#16324F] text-[#F5D547] font-semibold'
                      : 'text-slate-100 hover:bg-[#16324F]/60'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
              );
            })}

            <div className="pt-3">
              <Link
                href="/#checker"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#102A43] bg-[#F5D547] rounded-lg shadow-sm min-h-[44px]"
              >
                Check Registration
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
