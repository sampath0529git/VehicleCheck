import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import VehicleChecker from '@/components/VehicleChecker';
import { constructMetadata } from '@/lib/seo';
import { ListFilter, ChevronRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Classic Car Insurance UK – Complete Guide',
  description:
    'Comprehensive UK guide to classic car insurance. Understand agreed valuation, limited mileage policies, qualifying vehicle age, and checking status on the MIB database.',
  path: '/classic-car-insurance/',
  ogImage: '/images/classic-car.jpg',
  ogTag: 'Classic & Historic Vehicles',
  keywords: [
    'Classic Car Insurance',
    'classic car insurance uk',
    'agreed value car insurance',
    'limited mileage classic insurance',
    'vintage car insurance check',
    'historic vehicle insurance MID',
  ],
});

export default function ClassicCarInsurancePage() {
  const tocItems = [
    { id: 'what-is-classic-insurance', label: '1. What Is Classic Car Insurance?' },
    { id: 'qualifying-vehicles', label: '2. Qualifying Vehicle Criteria & Ages' },
    { id: 'classic-vs-standard', label: '3. Classic vs Standard Car Insurance' },
    { id: 'agreed-value', label: '4. Agreed Value vs Market Value' },
    { id: 'storage-security', label: '5. Storage, Security & Mileage Limits' },
    { id: 'check-classic-insurance', label: '6. Checking Classic Car Insurance on MIB' },
  ];

  return (
    <div className="bg-[#F6F8FA] min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'Classic Car Insurance', url: '/classic-car-insurance/' }]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        {/* Title Header */}
        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-3">
            Specialist UK Vehicle Cover · Comprehensive Guide
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight [text-wrap:balance]">
            Classic Car Insurance in the UK – Complete Guide
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Insuring a classic, vintage, or historic vehicle in Britain involves distinct considerations
            compared to a daily driver. Learn how agreed value policies, limited mileage allowances, and
            secure garaging affect your cover and verification on the Motor Insurance Database.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 border-t border-slate-100 pt-4">
            <span>Last Reviewed: November 2026</span>
            <span aria-hidden="true">·</span>
            <span>UK Automotive Specialist Guide</span>
            <span aria-hidden="true">·</span>
            <span>Target: Classic &amp; Historic Vehicles</span>
          </div>
        </div>

        {/* Hero Visual & Registration Checker */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-7 bg-white border border-[#E4EAF0] rounded-2xl overflow-hidden shadow-xs">
            <div className="relative h-64 sm:h-80 w-full">
              <Image
                src="/images/classic-car.jpg"
                alt="Classic British sports car in British Racing Green parked by stone country manor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#102A43] mb-2">
                Checking your classic car insurance status
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Even if your classic vehicle is tax exempt under the 40-year historic vehicle rule, it must still be insured unless declared SORN. Format your classic number plate below to verify its status on the official MIB database.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <VehicleChecker />
          </div>
        </div>

        {/* Table of Contents for SEO & CTR */}
        <nav aria-label="Table of Contents" className="bg-white border border-[#E4EAF0] rounded-2xl p-6 shadow-xs mb-8">
          <div className="flex items-center gap-2 text-sm font-bold text-[#102A43] mb-3">
            <ListFilter className="w-4 h-4 text-[#16324F]" />
            <span>Table of Contents</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-1.5 text-slate-600 hover:text-[#16324F] hover:underline py-1 transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Detailed Content Body */}
        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs space-y-12 text-slate-700 leading-relaxed">
          {/* Section 1 */}
          <section id="what-is-classic-insurance" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#102A43]">
              1. What Is Classic Car Insurance and How Does It Work?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Classic car insurance is a specialist motor policy designed specifically for cherished, vintage, historic, and collectible vehicles. Unlike modern commuter vehicles that depreciate in value with every mile driven, classic vehicles often appreciate or retain substantial value through restoration, enthusiast maintenance, and rarity.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Because classic vehicles are usually driven recreationally for weekend club rallies, leisure tours, and summer motoring rather than congested daily rush-hour commutes, insurers recognise that they present a markedly lower statistical claim frequency. As a result, specialist classic car policies often cost substantially less than standard daily-driver insurance while providing superior coverage tailored to cherished cars.
            </p>
          </section>

          {/* Section 2: Qualification */}
          <section id="qualifying-vehicles" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#102A43]">
              2. What Vehicles Qualify as Classic Cars in the UK?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              There is no single statutory age defining a classic car across the insurance industry. Requirements vary by underwriter, but typical criteria include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#F6F8FA] border border-[#E4EAF0] rounded-xl p-4">
                <h3 className="font-bold text-[#102A43] text-sm mb-1">Modern Classics (15–20 Years)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Vehicles from the 1990s and early 2000s with emerging enthusiast followings, limited production runs, or performance heritage.
                </p>
              </div>
              <div className="bg-[#F6F8FA] border border-[#E4EAF0] rounded-xl p-4">
                <h3 className="font-bold text-[#102A43] text-sm mb-1">Traditional Classics (20–39 Years)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Iconic models with widespread enthusiast clubs, recognised styling, and dedicated restoration support.
                </p>
              </div>
              <div className="bg-[#F6F8FA] border border-[#E4EAF0] rounded-xl p-4">
                <h3 className="font-bold text-[#102A43] text-sm mb-1">Historic Vehicles (40+ Years)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Eligible for DVLA historic tax class (free road tax) and rolling MOT exemption, requiring specialized agreed valuations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Classic vs Standard Comparison */}
          <section id="classic-vs-standard" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#102A43]">
              3. Classic Car Insurance vs Standard Car Insurance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-[#102A43]">
                    <th className="p-3 border border-slate-200 font-bold">Policy Feature</th>
                    <th className="p-3 border border-slate-200 font-bold">Standard Car Insurance</th>
                    <th className="p-3 border border-slate-200 font-bold">Classic Car Insurance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 border border-slate-200">Total Loss Settlement</td>
                    <td className="p-3 border border-slate-200">Market value at time of incident (depreciated)</td>
                    <td className="p-3 border border-slate-200 font-semibold text-emerald-800">Agreed Value payout (pre-agreed valuation)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 border border-slate-200">Mileage Restrictions</td>
                    <td className="p-3 border border-slate-200">Usually 8,000–12,000 miles per year</td>
                    <td className="p-3 border border-slate-200">Strict limited mileage tiers (e.g. 1,500–5,000 miles)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 border border-slate-200">Vehicle Usage</td>
                    <td className="p-3 border border-slate-200">Daily commuting, shopping, school runs</td>
                    <td className="p-3 border border-slate-200">Social, domestic, pleasure &amp; car club events</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 border border-slate-200">Salvage Retention</td>
                    <td className="p-3 border border-slate-200">Insurer keeps written-off salvage</td>
                    <td className="p-3 border border-slate-200">Enthusiast salvage retention rights often included</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 border border-slate-200">Primary Transport Rule</td>
                    <td className="p-3 border border-slate-200">No other car required</td>
                    <td className="p-3 border border-slate-200">Owner must hold access to a separate daily vehicle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Agreed Value vs Market Value */}
          <section id="agreed-value" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#102A43]">
              4. Agreed Value vs Market Value: Why It Matters
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              The cornerstone of any quality classic car policy is <strong>Agreed Value</strong>. If a vehicle insured under a standard policy suffers a total loss (write-off or unrecovered theft), the insurer compensates the owner based on generic trade guide books (e.g. CAP or Glass&apos;s Guide), which cannot account for extensive bespoke restoration, authentic period parts, or provenance.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              With an Agreed Value certificate, you submit detailed photographs, receipts, and club valuation assessments when taking out the policy. In the event of an irrecoverable claim, the insurer pays out the exact pre-agreed figure without haggling or market depreciation deductions.
            </p>
          </section>

          {/* Section 5: Limited Mileage & Storage */}
          <section id="storage-security" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#102A43]">
              5. Storage, Security &amp; Mileage Parameters
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              To benefit from reduced classic premiums, policyholders must satisfy strict risk mitigation rules:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F6F8FA] border border-[#E4EAF0] rounded-xl p-5">
                <h3 className="font-bold text-[#102A43] mb-2">Garaging &amp; Security Requirements</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Most classic underwriters require the vehicle to be parked inside a locked brick, stone, or substantial concrete garage between 10:00 PM and 6:00 AM when at the home address. Thatcham-approved immobilisers or satellite trackers may be mandatory for high-value vehicles.
                </p>
              </div>
              <div className="bg-[#F6F8FA] border border-[#E4EAF0] rounded-xl p-5">
                <h3 className="font-bold text-[#102A43] mb-2">Strict Mileage Allowances</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Policies define annual distance caps—typically 1,500, 3,000, or 5,000 miles per year. Exceeding your declared mileage band can invalidate accidental damage claims unless negotiated with the broker in advance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Checking Classic Car on MIB */}
          <section id="check-classic-insurance" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#102A43]">
              6. Checking If a Classic Car Is Insured on the MID
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              UK law on Continuous Insurance Enforcement (CIE) applies equally to classic vehicles, regardless of age or tax status. Even if your classic vehicle is 40+ years old and tax-exempt, it must be registered as insured on the Motor Insurance Database unless an official SORN is filed.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Specialist classic car brokers and underwriters upload your policy details directly to the MID. You can verify your classic vehicle&apos;s live database status for free by entering its registration number above and continuing to the official MIB checker.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
