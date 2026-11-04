'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { UK_INSURANCE_FAQS, FAQItem } from '@/lib/faqs';

interface FAQAccordionProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({
  items = UK_INSURANCE_FAQS,
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about checking your car insurance status in the UK.',
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-2">
            Answers &amp; Clarifications
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const headingId = `faq-heading-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={idx}
                className="border border-[#E4EAF0] rounded-xl overflow-hidden transition-all bg-[#F6F8FA]"
              >
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-slate-900 hover:text-[#16324F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16324F] min-h-[56px]"
                  >
                    <span className="text-base sm:text-lg">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#16324F]' : ''
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
