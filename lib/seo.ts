import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './config';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  ogImage?: string;
  ogTag?: string;
}

export function constructMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
  ogTag,
}: SeoProps): Metadata {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${cleanPath}`;

  // Ensure image URL is an absolute, publicly reachable URL
  let fullImageUrl: string;
  if (ogImage) {
    if (ogImage.startsWith('http://') || ogImage.startsWith('https://')) {
      fullImageUrl = ogImage;
    } else {
      const cleanImgPath = ogImage.startsWith('/') ? ogImage : `/${ogImage}`;
      fullImageUrl = `${SITE_URL}${cleanImgPath}`;
    }
  } else {
    fullImageUrl = `${SITE_URL}/api/og?title=${encodeURIComponent(
      title
    )}&desc=${encodeURIComponent(description)}&tag=${encodeURIComponent(
      ogTag || 'UK Vehicle Guide'
    )}`;
  }

  const isPng = fullImageUrl.endsWith('.png') || fullImageUrl.includes('/api/og');
  const imageMimeType = isPng ? 'image/png' : 'image/jpeg';

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
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
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
          url: fullImageUrl,
          secureUrl: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
          type: imageMimeType,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': 'GB',
      'geo.placename': 'United Kingdom',
      'content-language': 'en-GB',
      'publisher': SITE_NAME,
    },
  };
}
