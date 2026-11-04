import { ExternalLink, Database, Car } from 'lucide-react';
import { OFFICIAL_MIB_CHECK_URL, OFFICIAL_DVLA_CHECK_URL } from '@/lib/config';

export default function DvlaMibComparison() {
  return (
    <section className="py-16 bg-[#F6F8FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-2">
            UK Regulatory Roles
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">
            Understanding the Difference: MIB vs DVLA
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Many UK drivers wonder whether to check insurance through the DVLA or the MIB.
            Both public bodies handle vehicle records, but their databases serve entirely different
            statutory functions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* MIB Card */}
          <div className="bg-white border border-[#E4EAF0] rounded-xl p-7 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#16324F] flex items-center justify-center">
                <Database className="w-5 h-5 text-[#16324F]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#102A43]">
                  Motor Insurers&apos; Bureau (MIB)
                </h3>
                <span className="text-xs text-slate-500">Central Motor Insurance Database</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              The MIB manages the Motor Insurance Database (MID) and Navigate portal. Insurers are
              legally mandated to feed policy additions, amendments, and cancellations into this
              central repository. When you need to check whether a vehicle is currently insured,
              the MIB is the sole official organisation operating the public enquiry tool.
            </p>

            <div className="pt-2">
              <a
                href={OFFICIAL_MIB_CHECK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16324F] hover:text-[#102A43] hover:underline"
              >
                <span>Visit Official MIB Vehicle Checker</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* DVLA Card */}
          <div className="bg-white border border-[#E4EAF0] rounded-xl p-7 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                <Car className="w-5 h-5 text-slate-800" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#102A43]">
                  Driver and Vehicle Licensing Agency (DVLA)
                </h3>
                <span className="text-xs text-slate-500">Tax, MOT & Vehicle Registration</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              The DVLA maintains the national register of vehicles and drivers. While the DVLA
              enforces road tax (Vehicle Excise Duty), SORN declarations, and MOT records, the DVLA
              does NOT host a public tool allowing individuals to check real-time motor insurance
              policies. Instead, the DVLA receives policy data from the MIB for Continuous Insurance
              Enforcement.
            </p>

            <div className="pt-2">
              <a
                href={OFFICIAL_DVLA_CHECK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16324F] hover:text-[#102A43] hover:underline"
              >
                <span>Check Tax & MOT on GOV.UK (DVLA)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
