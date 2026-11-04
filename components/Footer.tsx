import Link from 'next/link';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import {
  SITE_NAME,
  FOOTER_GUIDES,
  FOOTER_COMPANY,
  OFFICIAL_MIB_CHECK_URL,
  OFFICIAL_DVLA_CHECK_URL,
} from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#102A43] text-slate-300 border-t border-[#16324F] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          {/* Brand & Purpose */}
          <div className="space-y-4 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-white font-extrabold text-xl tracking-tight"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F5D547] flex items-center justify-center text-[#102A43]">
                <ShieldCheck className="w-5 h-5 text-[#102A43]" strokeWidth={2.5} />
              </div>
              <span>{SITE_NAME}</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              Clear, independent guidance on checking your UK car insurance status.
              We format your vehicle registration and provide direct navigation to
              the official Motor Insurers&apos; Bureau (MIB) public database.
            </p>
            <div className="text-xs text-slate-400">
              Target region: United Kingdom (GB)
            </div>
          </div>

          {/* Insurance Guides */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5D547] mb-4">
              Insurance Guides
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_GUIDES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5D547] mb-4">
              Official UK Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={OFFICIAL_MIB_CHECK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:underline transition-colors block py-0.5"
                >
                  <span>Official MIB Vehicle Checker</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_DVLA_CHECK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:underline transition-colors block py-0.5"
                >
                  <span>DVLA Vehicle Information</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.uk/vehicle-insurance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:underline transition-colors block py-0.5"
                >
                  <span>GOV.UK Vehicle Insurance Rules</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 shrink-0" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5D547] mb-4">
              Information & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Independent Service Disclaimer */}
        <div className="pt-8 text-xs leading-relaxed text-slate-400 space-y-3">
          <p className="font-semibold text-slate-300">
            Independent Third-Party Information Notice:
          </p>
          <p>
            {SITE_NAME} is an independent informational and registration-formatting
            tool. This website is NOT owned, operated, endorsed, or affiliated
            with the Motor Insurers&apos; Bureau (MIB), Driver and Vehicle Licensing
            Agency (DVLA), the UK Government, First Alternative, or any commercial
            motor insurance provider.
          </p>
          <p>
            We do not have direct access to the Motor Insurance Database (MID) or
            the Navigate platform. Live vehicle insurance checks are carried out
            solely on the official MIB website. We do not store, log, or transmit
            your registration numbers to private servers.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-slate-500 gap-2 border-t border-slate-800">
            <p>&copy; <span suppressHydrationWarning>{currentYear}</span> {SITE_NAME}. All rights reserved.</p>
            <p>Written in British English for UK motorists.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
