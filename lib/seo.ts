import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './config';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
}

export function constructMetadata({
  title,
  description,
  path,
  keywords,
}: SeoProps): Metadata {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${cleanPath}`;

  return {
    title,
    description,
    keywords: keywords || [
      'check if car is insured',
      'is my car insured check free dvla',
      'check if a car is insured',
      'check insurance on car',
      'car insurance check UK',
      'MIB vehicle insurance checker',
    ],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'en_GB',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/images/hero-uk-vehicle.jpg`,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/images/hero-uk-vehicle.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
