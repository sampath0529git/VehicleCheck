import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/how-to-check-if-a-car-is-insured/',
    '/is-my-car-insured/',
    '/check-car-insurance-by-registration/',
    '/first-alternative-car-insurance/',
    '/classic-car-insurance/',
    '/faq/',
    '/about-us/',
    '/contact/',
    '/privacy-policy/',
    '/disclaimer/',
  ];

  const currentDate = new Date();

  return routes.map((route) => {
    let priority = 0.7;
    if (route === '') {
      priority = 1.0;
    } else if (
      route === '/first-alternative-car-insurance/' ||
      route === '/classic-car-insurance/' ||
      route === '/how-to-check-if-a-car-is-insured/' ||
      route === '/is-my-car-insured/'
    ) {
      priority = 0.9;
    } else if (route === '/check-car-insurance-by-registration/' || route === '/faq/') {
      priority = 0.8;
    }

    return {
      url: `${SITE_URL}${route}`,
      lastModified: currentDate,
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority,
    };
  });
}
