import { Shield, KeyRound, UserCheck } from 'lucide-react';

export default function TrustSection() {
  const cards = [
    {
      title: 'Free Official Checking Service',
      description:
        'The Motor Insurers’ Bureau (MIB) provides a free public checking service under UK Continuous Insurance Enforcement regulations. We direct you safely to their official portal.',
      icon: Shield,
    },
    {
      title: 'Simple Registration-Based Process',
      description:
        'All you need is your valid UK vehicle registration number (VRN). No policy paperwork or vehicle log book (V5C) documents required to initiate your search.',
      icon: KeyRound,
    },
    {
      title: 'No Account Required',
      description:
        'Check vehicle status immediately without signing up, submitting personal contact details, or receiving marketing communications. Independent and hassle-free.',
      icon: UserCheck,
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">
            Independent, Transparent UK Vehicle Guidance
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We help British vehicle owners confirm insurance compliance without confusion,
            middlemen, or fabricated checks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#F6F8FA] border border-[#E4EAF0] rounded-xl p-6 sm:p-7 transition-all hover:border-slate-300 hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-[#16324F] text-[#F5D547] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#102A43] mb-2.5">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
