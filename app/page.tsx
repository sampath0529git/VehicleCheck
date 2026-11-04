import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import HowItWorks from '@/components/HowItWorks';
import InsuranceGuide from '@/components/InsuranceGuide';
import DvlaMibComparison from '@/components/DvlaMibComparison';
import FAQAccordion from '@/components/FAQAccordion';
import { UK_INSURANCE_FAQS } from '@/lib/faqs';
import { getFaqPageJsonLd } from '@/lib/structured-data';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Check If Car Is Insured UK – Free Vehicle Checker',
  description:
    'Check if your car is insured in the UK. Enter your vehicle registration and continue to the official MIB vehicle insurance checker for free.',
  path: '/',
  ogImage: '/images/hero-uk-vehicle.jpg',
  ogTag: 'UK Vehicle Insurance Checker',
  keywords: [
    'check if car is insured',
    'is my car insured check free dvla',
    'check if a car is insured',
    'check insurance on car',
    'car insurance check UK',
    'MIB vehicle insurance checker',
    'motor insurance database',
    'DVLA insurance check',
  ],
});

export default function HomePage() {
  const faqSchema = getFaqPageJsonLd(UK_INSURANCE_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <TrustSection />
      <HowItWorks />
      <InsuranceGuide />
      <DvlaMibComparison />
      <FAQAccordion items={UK_INSURANCE_FAQS} />
    </>
  );
}
