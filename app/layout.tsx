import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import {
  getWebSiteJsonLd,
  getWebApplicationJsonLd,
  getOrganizationJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = {
  title: {
    default: 'Check If Car Is Insured UK – Free Vehicle Checker',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Check if your car is insured in the UK. Enter your vehicle registration and continue to the official MIB vehicle insurance checker for free.',
  keywords: [
    'check if car is insured',
    'is my car insured check free dvla',
    'check if a car is insured',
    'check insurance on car',
    'car insurance check UK',
    'MIB vehicle insurance checker',
    'first alternative car insurance',
    'classic car insurance uk',
    'motor insurance database',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
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
  openGraph: {
    title: 'Check If Car Is Insured UK – Free Vehicle Checker',
    description:
      'Check if your car is insured in the UK. Enter your vehicle registration and continue to the official MIB vehicle insurance checker for free.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/hero-uk-vehicle.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - UK Vehicle Insurance Checker`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Check If Car Is Insured UK – Free Vehicle Checker',
    description:
      'Check if your car is insured in the UK. Enter your vehicle registration and continue to the official MIB vehicle insurance checker for free.',
    images: [`${SITE_URL}/images/hero-uk-vehicle.jpg`],
  },
  other: {
    'geo.region': 'GB',
    'geo.placename': 'United Kingdom',
    'content-language': 'en-GB',
    'publisher': SITE_NAME,
  },
};

const extensionFetchPolyfill = `
(function() {
  try {
    var originalFetch = window.fetch;
    var currentFetch = originalFetch;

    // Define setter on window
    Object.defineProperty(window, 'fetch', {
      configurable: true,
      enumerable: true,
      get: function() {
        return currentFetch;
      },
      set: function(fn) {
        currentFetch = fn;
      }
    });

    // Also define setter on Window.prototype if present
    if (window.Window && window.Window.prototype) {
      try {
        Object.defineProperty(window.Window.prototype, 'fetch', {
          configurable: true,
          enumerable: true,
          get: function() {
            return currentFetch;
          },
          set: function(fn) {
            currentFetch = fn;
          }
        });
      } catch (e2) {}
    }
  } catch (e) {}

  // Suppress unhandled extension errors from propagating to app error overlays
  if (typeof window !== 'undefined') {
    window.addEventListener('error', function(event) {
      if (
        event &&
        ((event.filename && event.filename.indexOf('chrome-extension://') !== -1) ||
         (event.message && (
           event.message.indexOf('fetch of #<Window>') !== -1 ||
           event.message.indexOf('Cannot set property fetch') !== -1
         )))
      ) {
        if (event.preventDefault) event.preventDefault();
        if (event.stopImmediatePropagation) event.stopImmediatePropagation();
        return true;
      }
    }, true);
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = getWebSiteJsonLd();
  const webAppSchema = getWebApplicationJsonLd();
  const orgSchema = getOrganizationJsonLd();

  return (
    <html lang="en-GB" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: extensionFetchPolyfill,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#F6F8FA] text-[#172B3A] antialiased"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <DisclaimerBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
