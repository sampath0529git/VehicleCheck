import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import VehicleChecker from '@/components/VehicleChecker';
import DvlaMibComparison from '@/components/DvlaMibComparison';
import { constructMetadata } from '@/lib/seo';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Is My Car Insured? Free UK Check & DVLA Guidance',
  description:
    'Find out if your car is insured for free in the UK. Understand how the Motor Insurance Database (MID) works, why DVLA cross-checks policies, and how to verify your status.',
  path: '/is-my-car-insured/',
  keywords: [
    'is my car insured check free dvla',
    'is my car insured',
    'check if my car is insured free',
    'car insurance status check',
    'free uk vehicle insurance check',
  ],
});

export default function IsMyCarInsuredPage() {
  return (
    <div className="bg-[#F6F8FA] min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'Is My Car Insured?', url: '/is-my-car-insured/' }]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-3">
            Driver Verification Guide · Free UK Resource
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight [text-wrap:balance]">
            Is My Car Insured? Free UK Check &amp; Guidance
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Thousands of UK drivers search each month for &quot;is my car insured check free dvla&quot;.
            Here is everything you need to know about checking your vehicle&apos;s live status on the central database.
          </p>
        </div>

        <div className="mb-12">
          <VehicleChecker />
        </div>

        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs space-y-10 text-slate-700 leading-relaxed mb-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#102A43]">
              Can You Check Car Insurance for Free with the DVLA?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              It is a common misconception that the Driver and Vehicle Licensing Agency (DVLA) provides a public web tool to check vehicle insurance policies. While the DVLA maintains records of road tax, MOT expiry, vehicle weights, and keeper history, <strong>live motor insurance records are maintained exclusively by the Motor Insurers&apos; Bureau (MIB)</strong> on the Motor Insurance Database (MID).
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              However, the DVLA works directly with the MIB to enforce the law under Continuous Insurance Enforcement (CIE). Their automated systems cross-reference the DVLA keeper database with the MID regularly to identify uninsured vehicles kept on UK roads.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#102A43]">
              Why You Should Verify That Your Car Is Showing as Insured
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-[#102A43] mb-2">Avoid Automatic £100 Fixed Penalties</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under Continuous Insurance Enforcement, the DVLA sends automatic Insurance Advisory Letters (IAL) followed by a £100 fixed penalty notice to registered keepers of uninsured cars.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-[#102A43] mb-2">Prevent Police Roadside Seizures</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  UK Police Automatic Number Plate Recognition (ANPR) cameras cross-check vehicles on roads against the MID 24/7. Driving an uninsured car risks 6 penalty points, an unlimited fine, and vehicle impoundment.
                </p>
              </div>
            </div>
          </section>
        </div>

        <DvlaMibComparison />
      </div>
    </div>
  );
}
