import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { constructMetadata } from '@/lib/seo';
import { ShieldAlert, ExternalLink } from 'lucide-react';
import { SITE_NAME, OFFICIAL_MIB_CHECK_URL, OFFICIAL_DVLA_CHECK_URL } from '@/lib/config';

export const metadata: Metadata = constructMetadata({
  title: 'Disclaimer & Legal Notice – VehicleCheck',
  description:
    'Important legal notice and independent service disclaimer for VehicleCheck. Clarifying our relationship with the MIB, DVLA, and UK motor insurance providers.',
  path: '/disclaimer/',
  ogImage: '/images/hero-uk-vehicle.jpg',
  ogTag: 'Independent Service Disclaimer',
});

export default function DisclaimerPage() {
  return (
    <div className="bg-[#F6F8FA] min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'Disclaimer', url: '/disclaimer/' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-3">
            Legal Transparency Notice · Independent Service
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight [text-wrap:balance]">
            Disclaimer &amp; Legal Notice
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Last Updated: November 2026 · Applicable across Great Britain &amp; Northern Ireland
          </p>
        </div>

        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs space-y-8 text-slate-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-amber-900 text-base mb-1">
                  1. Independent Website Status
                </h2>
                <p>
                  {SITE_NAME} is an entirely independent consumer informational website and registration formatting guide.
                  This website is <strong>NOT</strong> owned, operated, affiliated with, endorsed by, or partnered with:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
                  <li>The Motor Insurers&apos; Bureau (MIB)</li>
                  <li>The Driver and Vehicle Licensing Agency (DVLA)</li>
                  <li>The Department for Transport (DfT) or GOV.UK</li>
                  <li>First Alternative, Southern Rock Insurance Company Limited, or Europa Group Limited</li>
                  <li>Any commercial motor insurer or insurance intermediary</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#102A43]">
              2. No Direct Access to the Motor Insurance Database (MID)
            </h2>
            <p>
              {SITE_NAME} does <strong>not</strong> have direct API or database access to the central Motor Insurance Database (MID), Navigate, or DVLA keeper databases. We do not conduct automated queries on your behalf, nor do we store, retrieve, or simulate live policy records.
            </p>
            <p>
              Our formatting tool functions solely to help users normalize their vehicle registration into standard UK syntax, copy it, and transfer smoothly to the official, authorized checking portal operated by the Motor Insurers&apos; Bureau.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#102A43]">
              3. No Guarantee of Legal Cover or Entitlement
            </h2>
            <p>
              An &apos;insured&apos; result on the Motor Insurance Database verifies that an active motor insurance policy is linked to the vehicle registration number. It does <strong>not</strong> constitute proof that:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>You personally are covered to drive the vehicle (e.g. named driver requirements).</li>
              <li>Your intended journey is covered (e.g. social, domestic, and pleasure vs. commuting or commercial delivery).</li>
              <li>The policy is fully paid up or has not been canceled pending administrative review.</li>
            </ul>
            <p>
              The sole definitive legal document proving motor insurance coverage on UK highways is a valid <strong>Certificate of Motor Insurance</strong> issued by an authorized insurer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#102A43]">
              4. External Links &amp; Third-Party Resources
            </h2>
            <p>
              This website provides outbound links to official regulatory websites including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>
                <a href={OFFICIAL_MIB_CHECK_URL} target="_blank" rel="noopener noreferrer" className="text-[#16324F] font-semibold underline inline-flex items-center gap-1">
                  Motor Insurers&apos; Bureau (MIB) Official Portal <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={OFFICIAL_DVLA_CHECK_URL} target="_blank" rel="noopener noreferrer" className="text-[#16324F] font-semibold underline inline-flex items-center gap-1">
                  DVLA Vehicle Information via GOV.UK <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
            <p>
              We are not responsible for the content, uptime, availability, or accuracy of external websites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#102A43]">
              5. Content Accuracy &amp; No Legal Advice
            </h2>
            <p>
              The articles and guides published on {SITE_NAME} are prepared for general educational guidance only and do not constitute legal, insurance, or financial advice. Road traffic laws, Continuous Insurance Enforcement rules, and insurer underwriting guidelines may change. If you have specific legal or regulatory questions, seek professional legal advice or contact your insurer directly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
