import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import VehicleChecker from '@/components/VehicleChecker';
import { constructMetadata } from '@/lib/seo';
import { FileSearch, HelpCircle, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Check Car Insurance by Registration UK – Number Plate Verification',
  description:
    'Check UK car insurance by registration number. Understand number plate formats, personalized plates, and how to verify insurance records via the official MIB database.',
  path: '/check-car-insurance-by-registration/',
  ogTag: 'Number Plate Checker',
  keywords: [
    'check car insurance by registration',
    'check insurance on car',
    'check car insurance number plate',
    'car insurance checker by reg',
    'VRN insurance check UK',
  ],
});

export default function CheckByRegistrationPage() {
  return (
    <div className="bg-[#F6F8FA] min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'Check by Registration', url: '/check-car-insurance-by-registration/' }]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-3">
            UK Registration Number Plates · Verification Guide
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight [text-wrap:balance]">
            Check Car Insurance by Registration
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            In Great Britain and Northern Ireland, your vehicle registration number (VRN) serves as
            the primary key identifying your vehicle on the Motor Insurance Database. Discover how
            different plate styles and registrations are validated.
          </p>
        </div>

        <div className="mb-12">
          <VehicleChecker />
        </div>

        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs space-y-10 text-slate-700 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#102A43]">
              UK Registration Number Formats Explained
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              When entering your registration into any checker, the format of the characters determines how the system recognises the vehicle:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-[#102A43] text-sm">1. Current Format (2001 to Present) – e.g. AB12 CDE</div>
                <p className="text-xs text-slate-600 mt-1">
                  Two letters indicating DVLA local memory tag, two digits representing the year of issue (e.g., 24 for early 2024, 74 for late 2024), followed by three random letters.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-[#102A43] text-sm">2. Prefix Format (1983 to 2001) – e.g. A123 BCD</div>
                <p className="text-xs text-slate-600 mt-1">
                  A single letter identifying the registration year, 1 to 3 numbers, and three letters.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-[#102A43] text-sm">3. Suffix Format (1963 to 1983) – e.g. ABC 123A</div>
                <p className="text-xs text-slate-600 mt-1">
                  Three letters, 1 to 3 numbers, and a single letter indicating the registration year at the end.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-[#102A43] text-sm">4. Cherished / Dateless / Northern Ireland – e.g. 1 ABC, ABC 1, 1234 AB</div>
                <p className="text-xs text-slate-600 mt-1">
                  Often used on classic cars or transferred as personalized number plates. Consists of combinations of 1 to 4 digits and 1 to 3 letters.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#102A43]">
              What If You Recently Changed or Transferred a Cherished Plate?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              If you have assigned a private or cherished plate to your vehicle, remember that the DVLA and your insurer must both update their systems. Your insurer must issue an updated Certificate of Motor Insurance reflecting the new registration and transmit this amendment to the MIB. During the transfer period (usually 3 to 7 working days), the insurance check may still reflect the previous registration mark.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
