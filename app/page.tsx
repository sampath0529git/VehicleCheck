import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import HowItWorks from '@/components/HowItWorks';
import InsuranceGuide from '@/components/InsuranceGuide';
import DvlaMibComparison from '@/components/DvlaMibComparison';
import FAQAccordion from '@/components/FAQAccordion';
import { UK_INSURANCE_FAQS } from '@/lib/faqs';
import { getFaqPageJsonLd } from '@/lib/structured-data';

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
