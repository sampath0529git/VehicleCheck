import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import VehicleChecker from '@/components/VehicleChecker';
import { constructMetadata } from '@/lib/seo';
import { UK_INSURANCE_FAQS } from '@/lib/faqs';
import { getFaqPageJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = constructMetadata({
  title: 'UK Vehicle Insurance FAQ – Common Questions Answered',
  description:
    'Frequently asked questions about checking car insurance in the UK. Understand MIB database checks, Continuous Insurance Enforcement, SORN, and policy verification.',
  path: '/faq/',
  ogImage: '/images/how-to-check.jpg',
  ogTag: 'UK Insurance Knowledge Base',
  keywords: [
    'uk car insurance faq',
    'frequently asked questions car insurance',
    'how to check if car is insured questions',
    'car insurance database questions',
  ],
});

export default function FaqPage() {
  const faqSchema = getFaqPageJsonLd(UK_INSURANCE_FAQS);

  return (
    <div className="bg-[#F6F8FA] min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs items={[{ name: 'FAQ', url: '/faq/' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="text-center mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-2">
            Knowledge Base · UK Vehicle Insurance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight [text-wrap:balance]">
            UK Car Insurance Checking – FAQ
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Find detailed, authoritative answers regarding UK motor insurance verification,
            the Motor Insurance Database (MID), and your legal driving requirements.
          </p>
        </div>

        <div className="mb-12">
          <VehicleChecker />
        </div>

        <FAQAccordion
          items={UK_INSURANCE_FAQS}
          title="All Vehicle Insurance Checking Questions"
          subtitle="Explore the most frequent inquiries from UK drivers regarding vehicle registration validation and MIB records."
        />
      </div>
    </div>
  );
}
