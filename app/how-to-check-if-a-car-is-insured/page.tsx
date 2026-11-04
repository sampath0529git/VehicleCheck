import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import VehicleChecker from '@/components/VehicleChecker';
import { constructMetadata } from '@/lib/seo';
import { ExternalLink, AlertCircle, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_MIB_CHECK_URL } from '@/lib/config';
import { getHowToJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = constructMetadata({
  title: 'How to Check If a Car Is Insured in the UK – Step-by-Step Guide',
  description:
    'Learn how to check if a car is insured in the UK using the official MIB vehicle checker. Step-by-step instructions, legal requirements, and database sync times.',
  path: '/how-to-check-if-a-car-is-insured/',
  ogImage: '/images/how-to-check.jpg',
  ogTag: 'Step-by-Step Guide',
  keywords: [
    'how to check if a car is insured',
    'check if a car is insured UK',
    'how to check car insurance online',
    'motor insurance database guide',
    'MIB check steps',
  ],
});

export default function HowToCheckPage() {
  const howToSchema = getHowToJsonLd();

  return (
    <div className="bg-[#F6F8FA] min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Breadcrumbs items={[{ name: 'How to Check If a Car Is Insured', url: '/how-to-check-if-a-car-is-insured/' }]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-3">
            Official Verification Procedure · UK Motorist Guide
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight [text-wrap:balance]">
            How to Check If a Car Is Insured in the UK
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Checking whether your car is recorded as insured on the UK central Motor Insurance Database (MID)
            is free, fast, and does not require policy paperwork. Follow this complete step-by-step guide.
          </p>
        </div>

        {/* Featured Snippet Quick Answer Box */}
        <div className="bg-blue-50/80 border-2 border-[#16324F]/20 rounded-2xl p-6 mb-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16324F] mb-2">
            <CheckCircle2 className="w-4 h-4 text-[#16324F]" />
            <span>Quick Answer (Summary)</span>
          </div>
          <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
            To check if a car is insured in the UK for free, enter your vehicle registration number on the official <strong>Motor Insurers&apos; Bureau (MIB)</strong> portal at <em>mib.org.uk</em>. Confirm you own or have permission to drive the vehicle to view its live status on the Motor Insurance Database (MID) instantly.
          </p>
        </div>

        <div className="mb-12">
          <VehicleChecker />
        </div>

        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs space-y-10 text-slate-700 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#102A43]">
              The Official 4-Step Process on the MIB Service
            </h2>
            <div className="space-y-6 pt-2">
              <div id="step-1" className="flex gap-4 scroll-mt-24">
                <span className="w-8 h-8 rounded-full bg-[#16324F] text-[#F5D547] font-bold text-sm flex items-center justify-center shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-[#102A43] text-lg">Format and Prepare Your Registration Number</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Locate your vehicle&apos;s registration plate (VRN). Verify that letters and numbers are correct, ensuring you do not confuse numbers &apos;0&apos; or &apos;1&apos; with letters &apos;O&apos; or &apos;I&apos;.
                  </p>
                </div>
              </div>

              <div id="step-2" className="flex gap-4 scroll-mt-24">
                <span className="w-8 h-8 rounded-full bg-[#16324F] text-[#F5D547] font-bold text-sm flex items-center justify-center shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-[#102A43] text-lg">Navigate to the Official Motor Insurers&apos; Bureau Checker</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Access the official MIB vehicle enquiry portal at{' '}
                    <a href={OFFICIAL_MIB_CHECK_URL} target="_blank" rel="noopener noreferrer" className="text-[#16324F] font-semibold underline inline-flex items-center gap-1">
                      mib.org.uk/check-your-vehicle <ExternalLink className="w-3.5 h-3.5" />
                    </a>.
                  </p>
                </div>
              </div>

              <div id="step-3" className="flex gap-4 scroll-mt-24">
                <span className="w-8 h-8 rounded-full bg-[#16324F] text-[#F5D547] font-bold text-sm flex items-center justify-center shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-[#102A43] text-lg">Confirm Your Legal Right to Check the Vehicle</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    The free public service legally requires you to declare that the vehicle is registered to you, or that you are an authorised driver, employer, or motor trader with permission. Tick the confirmation box to proceed.
                  </p>
                </div>
              </div>

              <div id="step-4" className="flex gap-4 scroll-mt-24">
                <span className="w-8 h-8 rounded-full bg-[#16324F] text-[#F5D547] font-bold text-sm flex items-center justify-center shrink-0">4</span>
                <div>
                  <h3 className="font-bold text-[#102A43] text-lg">Review Your Insurance Record Result</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    The MIB system queries the central database in real-time. If an active policy is linked to the registration, a confirmation result is displayed alongside the make and model of the car.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#102A43]">
              What If the Result Shows &apos;Uninsured&apos;?
            </h2>
            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl space-y-3 text-sm text-amber-950">
              <div className="flex items-center gap-2 font-bold text-base text-amber-900">
                <AlertCircle className="w-5 h-5 text-amber-700" />
                <span>Immediate Checklist If Your Car Appears Uninsured:</span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 leading-relaxed">
                <li><strong>Did you just buy or renew the policy?</strong> Underwriters typically upload records within 24 to 48 hours, but processing can take up to 7 working days during peak periods.</li>
                <li><strong>Check your Certificate of Motor Insurance:</strong> If your certificate is in date and shows the exact registration, you are legally covered to drive. Keep a copy in your vehicle.</li>
                <li><strong>Contact your insurance company:</strong> Request that your broker or insurer checks their MID feed and resubmits your vehicle details with an expedited upload.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
