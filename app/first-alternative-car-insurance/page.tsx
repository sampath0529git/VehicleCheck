import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import VehicleChecker from '@/components/VehicleChecker';
import { constructMetadata } from '@/lib/seo';
import { ExternalLink, ShieldCheck, FileText, Phone, HelpCircle, CheckCircle } from 'lucide-react';
import { OFFICIAL_FIRST_ALTERNATIVE_URL, OFFICIAL_MIB_CHECK_URL } from '@/lib/config';

export const metadata: Metadata = constructMetadata({
  title: 'First Alternative Car Insurance UK – Policy Guide',
  description:
    'Comprehensive UK guide to First Alternative car insurance. Explore policy features, underwriting details, claims, and how to verify your status on the MIB database.',
  path: '/first-alternative-car-insurance/',
  keywords: [
    'First Alternative Car Insurance',
    'first alternative car insurance uk',
    'first alternative policy check',
    'first alternative motor insurance',
    'is first alternative on MID',
  ],
});

export default function FirstAlternativePage() {
  return (
    <div className="bg-[#F6F8FA] min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'First Alternative Car Insurance', url: '/first-alternative-car-insurance/' }]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        {/* Header */}
        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-3">
            UK Insurance Brand Guide · Informational Overview
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight [text-wrap:balance]">
            First Alternative Car Insurance – UK Guide
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            A comprehensive, independent guide for UK drivers researching First Alternative motor insurance.
            Learn about policy tiers, underwriting structure, and how to verify that your vehicle is properly registered on the Motor Insurance Database.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 border-t border-slate-100 pt-4">
            <span>Last Reviewed: November 2026</span>
            <span aria-hidden="true">·</span>
            <span>Independent Consumer Guide</span>
            <span aria-hidden="true">·</span>
            <span>Target: UK Registered Vehicles</span>
          </div>
        </div>

        {/* Feature Image & Checker Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-7 bg-white border border-[#E4EAF0] rounded-2xl overflow-hidden shadow-xs">
            <div className="relative h-64 sm:h-80 w-full">
              <Image
                src="/images/first-alternative.jpg"
                alt="Contemporary family car parked on paved UK driveway"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#102A43] mb-2">
                Have you recently taken out a First Alternative policy?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Use our free registration formatting tool to prepare your number plate before visiting the official MIB checker to confirm that your First Alternative cover is active.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <VehicleChecker />
          </div>
        </div>

        {/* In-Depth Editorial Guide */}
        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs space-y-10 text-slate-700 leading-relaxed">
          {/* Section 1 & 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#102A43]">
              1. Introduction to First Alternative
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              First Alternative is a UK motor insurance specialist that was originally established to cater to drivers seeking competitive direct car insurance premiums. Often appealing to experienced motorists and lower-risk drivers, First Alternative operates primarily online, allowing customers to obtain quotations, retrieve documentation, and adjust policy details digitally.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#102A43]">
              2. Who Provides First Alternative Car Insurance?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              When taking out a motor insurance policy in the UK, it is important to understand the regulatory entity arranging the cover versus the insurer underwriting the financial risk:
            </p>
            <div className="bg-[#F6F8FA] border border-[#E4EAF0] rounded-xl p-5 space-y-3 text-sm">
              <p>
                <strong>Arranged and Administered by:</strong> Europa Group Limited (trading as First Alternative), which is authorised and regulated by the Financial Conduct Authority (FCA Register No. 309794). Europa Group handles customer servicing, document issuance, and payment processing.
              </p>
              <p>
                <strong>Underwritten by:</strong> Underwriting partners including Southern Rock Insurance Company Limited and other authorised UK and European insurance underwriters specified on your personal Certificate of Motor Insurance.
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Note: Regulatory registrations and insurer panels can change. Always consult your policy schedule to confirm your exact underwriter.
            </p>
          </section>

          {/* Section 3 & 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#102A43]">
              3. Policy Types & Cover Options
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              First Alternative typically focuses on Comprehensive car insurance policies, which provide the broadest level of financial protection on UK roads. Depending on availability, they may also offer Third Party, Fire and Theft (TPFT):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                <h3 className="font-bold text-[#102A43] mb-1">Comprehensive Cover</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Protects against accidental damage to your own vehicle, fire, theft, and third-party liabilities (injuries to others and property damage).
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                <h3 className="font-bold text-[#102A43] mb-1">Third Party, Fire & Theft</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Covers injuries and damages caused to third parties, plus theft of your vehicle or damage resulting directly from fire.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Standard Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#102A43]">
              4. Standard Features of Comprehensive Policies
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Standard Comprehensive policies issued through First Alternative commonly include the following core protections (subject to policy wording and excess levels):
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Courtesy car provision while yours is repaired by an approved repairer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Windscreen and glass repair/replacement cover</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Personal belongings cover (up to specified policy limits)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Audio, navigation, and entertainment system cover</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>European Union minimum cover for temporary foreign travel</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>No Claims Discount (NCD) accumulation and protection options</span>
              </li>
            </ul>
          </section>

          {/* Section 6: Optional Add-ons */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#102A43]">
              5. Optional Additional Cover
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              When purchasing or renewing with First Alternative, drivers can typically add optional enhancements:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Motor Legal Protection:</strong> Up to £100,000 legal expense cover to recover uninsured losses (such as policy excess, hire car fees, or injury compensation) after a non-fault accident.</p>
              <p><strong>UK & European Breakdown Assistance:</strong> Roadside recovery, at-home assistance, and vehicle repatriation services provided in partnership with specialist breakdown providers.</p>
              <p><strong>Key Cover:</strong> Financial support for replacement vehicle keys and locksmith expenses in the event of theft, loss, or damage.</p>
              <p><strong>Excess Protection:</strong> Reimbursement of your compulsory or voluntary policy excess in eligible fault or non-fault claims.</p>
            </div>
          </section>

          {/* Section 7 & 8: Contact & Official links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#102A43]">
              6. Policy Documents & Contact Details
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Customers can manage their policies directly through the official First Alternative Customer Portal. To change vehicle details, download a Certificate of Motor Insurance, or notify a claim:
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-sm">
              <p><strong>Official Website:</strong> <a href={OFFICIAL_FIRST_ALTERNATIVE_URL} target="_blank" rel="noopener noreferrer" className="text-[#16324F] font-semibold underline inline-flex items-center gap-1">firstalternative.com <ExternalLink className="w-3.5 h-3.5" /></a></p>
              <p><strong>Customer Portal:</strong> Access policy schedules, renewal notices, and certificate downloads 24/7 via their secure online self-service area.</p>
              <p><strong>Claims Helpline:</strong> Contact numbers are printed on your Certificate of Motor Insurance and policy schedule booklet.</p>
            </div>
          </section>

          {/* Section 9: How to verify First Alternative on MIB */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#102A43]">
              7. How to Verify a First Alternative Policy on the MIB
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Every UK motor policy issued by First Alternative is required by law to be uploaded to the Motor Insurance Database (MID) operated by the Motor Insurers&apos; Bureau (MIB).
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
              <li>Allow 24 to 72 hours following policy inception or renewal for your record to be processed and synced by Europa Group / Southern Rock onto the central database.</li>
              <li>Enter your registration into our formatting tool above, then proceed to the official MIB checking service.</li>
              <li>Confirm you are checking your own vehicle or have permission to drive it.</li>
              <li>If the vehicle appears as &apos;Uninsured&apos; more than 7 days after your policy start date, contact First Alternative customer service to ensure your registration number was submitted without clerical errors.</li>
            </ol>
          </section>

          {/* Third-Party Disclaimer */}
          <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 leading-relaxed">
            <p className="font-bold mb-1">Third-Party Brand & Editorial Disclaimer:</p>
            <p>
              VehicleCheck is an independent educational website. We are not First Alternative, Europa Group Limited, Southern Rock Insurance Company Limited, or the Motor Insurers&apos; Bureau (MIB). All product names, trademarks, and registered trademarks are property of their respective owners. Information presented here is for general guidance and research purposes only. For formal quotations, policy wording, and legal terms, visit the official First Alternative website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
