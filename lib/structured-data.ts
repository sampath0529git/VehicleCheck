import { SITE_NAME, SITE_URL } from './config';

export function getWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Independent UK vehicle insurance checking guide and registration tool directing users to the official Motor Insurers Bureau (MIB) checker.',
    inLanguage: 'en-GB',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?vrn={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getWebApplicationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${SITE_NAME} UK Vehicle Registration Checker`,
    url: SITE_URL,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All modern web browsers',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
    },
    description:
      'Format-validation tool for UK vehicle registration numbers with direct navigation to the official Motor Insurers Bureau (MIB) insurance checker.',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function getFaqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
