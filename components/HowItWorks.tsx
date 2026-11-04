import Link from 'next/link';
import { Search, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Enter Your Registration',
      description:
        'Type your vehicle registration plate into our validator. We format the letters and numbers into standard UK layout and verify character syntax.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Continue to Official MIB Service',
      description:
        'With one click, your registration is copied and you are directed securely to the official Motor Insurers’ Bureau (MIB) public database.',
      icon: ExternalLink,
    },
    {
      number: '03',
      title: 'View Your Insurance Status',
      description:
        'Confirm ownership or permission on the MIB portal to immediately view whether a live insurance policy is registered on the Motor Insurance Database (MID).',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F6F8FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-2">
            Step-by-Step Procedure
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Follow three straightforward steps to check whether your car is recorded as insured on the UK central database.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white border border-[#E4EAF0] rounded-xl p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#16324F] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#16324F]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#102A43] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#checker"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#16324F] hover:bg-[#102A43] rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#16324F]"
          >
            <span>Start Your Registration Check</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
