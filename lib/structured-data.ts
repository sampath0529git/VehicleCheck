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

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/hero-uk-vehicle.jpg`,
    description:
      'Independent UK motor information service assisting drivers with registration validation and MIB insurance verification guidance.',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
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

export function getHowToJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Check If a Car Is Insured in the UK',
    description:
      'Step-by-step instructions on checking whether a UK vehicle is insured using your registration number and the official Motor Insurers Bureau (MIB) database.',
    totalTime: 'PT2M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Format and Prepare Your Registration Number',
        text: 'Locate your vehicle registration number plate and check character syntax without mistaking letters like O for zero.',
        url: `${SITE_URL}/how-to-check-if-a-car-is-insured/#step-1`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Navigate to the Official Motor Insurers’ Bureau Checker',
        text: 'Access the official MIB public vehicle enquiry portal at mib.org.uk.',
        url: `${SITE_URL}/how-to-check-if-a-car-is-insured/#step-2`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Confirm Your Legal Right to Check the Vehicle',
        text: 'Confirm that you are the registered keeper or have legal permission to drive the vehicle.',
        url: `${SITE_URL}/how-to-check-if-a-car-is-insured/#step-3`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Review Your Insurance Record Result',
        text: 'View whether an active motor insurance policy is registered to that vehicle on the central Motor Insurance Database.',
        url: `${SITE_URL}/how-to-check-if-a-car-is-insured/#step-4`,
      },
    ],
  };
}
