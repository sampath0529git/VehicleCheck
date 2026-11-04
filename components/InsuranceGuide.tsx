import Link from 'next/link';
import {
  AlertTriangle,
  Clock,
  FileText,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

export default function InsuranceGuide() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-2">
            Essential Motorist Knowledge
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">
            Understanding UK Vehicle Insurance Verification
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            In the United Kingdom, motor insurance is a strict legal requirement. Here is what you need
            to know about the Motor Insurance Database (MID), renewal delays, and policy cover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Continuous Insurance Enforcement */}
          <div className="bg-[#F6F8FA] border border-[#E4EAF0] rounded-xl p-6 sm:p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-[#16324F] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#16324F]" />
            </div>
            <h3 className="text-lg font-bold text-[#102A43]">
              Continuous Insurance Enforcement (CIE)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Under UK law, registered vehicle keepers must maintain continuous motor insurance on
              their vehicle unless they have officially registered a Statutory Off Road Notification
              (SORN) with the DVLA. Automated cross-checks between the DVLA register and the Motor
              Insurance Database (MID) identify uninsured vehicles automatically, issuing fixed penalty
              notices, wheel clamping, or vehicle seizure.
            </p>
          </div>

          {/* Card 2: Renewal Delays & Database Sync */}
          <div className="bg-[#F6F8FA] border border-[#E4EAF0] rounded-xl p-6 sm:p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100/70 text-amber-900 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-800" />
            </div>
            <h3 className="text-lg font-bold text-[#102A43]">
              Renewal Delays & Database Processing Times
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              When you purchase a new motor policy or switch insurance providers, your insurer uploads
              the policy record to the MID. While many insurers upload records within 24 to 48 hours,
              the full update process can sometimes take up to 7 working days. If you hold a valid
              Certificate of Motor Insurance issued by an authorised insurer, your vehicle is legally
              covered even during this processing lag.
            </p>
          </div>

          {/* Card 3: What to Do If Showing Uninsured */}
          <div className="bg-[#F6F8FA] border border-[#E4EAF0] rounded-xl p-6 sm:p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-rose-100/70 text-rose-900 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-rose-800" />
            </div>
            <h3 className="text-lg font-bold text-[#102A43]">
              What to Do If Your Car Shows as Uninsured
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              If the official MIB result indicates that your vehicle is uninsured:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 leading-relaxed">
              <li>Recheck the registration plate entered to ensure there are no character typos (such as mistaking letter &apos;O&apos; for number &apos;0&apos;).</li>
              <li>Confirm your current policy has not lapsed due to a missed direct debit or non-renewal.</li>
              <li>Contact your insurance provider or broker immediately to request an expedited MID upload.</li>
            </ul>
          </div>

          {/* Card 4: Insured Record vs Cover Scope */}
          <div className="bg-[#F6F8FA] border border-[#E4EAF0] rounded-xl p-6 sm:p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-900 flex items-center justify-center">
              <FileText className="w-5 h-5 text-emerald-800" />
            </div>
            <h3 className="text-lg font-bold text-[#102A43]">
              Database Status vs Policy Entitlement
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              An &apos;insured&apos; result on the database confirms that an active policy exists on that vehicle
              registration. However, it does not confirm who is legally entitled to drive it, whether
              named driver restrictions apply, or whether specific usages (such as commuting, business
              travel, or courier driving) are permitted. Always consult your policy documentation and
              Certificate of Motor Insurance for full terms.
            </p>
          </div>
        </div>

        {/* Supporting Internal Links Banner */}
        <div className="mt-12 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-[#102A43]">
              Need help with specific insurance categories?
            </h4>
            <p className="text-sm text-slate-600">
              Read our specialized guides for First Alternative car insurance policies or classic vehicle cover.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/first-alternative-car-insurance/"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#102A43] bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors shadow-xs"
            >
              <span>First Alternative Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/classic-car-insurance/"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#102A43] bg-[#F5D547] hover:bg-[#ebd040] rounded-lg transition-colors shadow-xs"
            >
              <span>Classic Car Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
