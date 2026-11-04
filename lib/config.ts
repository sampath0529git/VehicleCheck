// Central site configuration for VehicleCheck
// Centralises domain, official URLs, navigation, and SEO constants

export const SITE_NAME = 'VehicleCheck';
export const SITE_TAGLINE = 'UK Vehicle Insurance Checking Guide';

// Prioritize actual runtime hosting URL (APP_URL injected by environment)
// or user-provided NEXT_PUBLIC_SITE_URL, falling back to carinsurancecheck.co.uk
const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.APP_URL ||
  (process.env.NEXT_PUBLIC_SITE_DOMAIN
    ? `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}`
    : 'https://carinsurancecheck.co.uk');

export const SITE_URL = rawUrl.replace(/\/+$/, '');

export const SITE_DOMAIN = (() => {
  try {
    return new URL(SITE_URL).hostname;
  } catch {
    return 'carinsurancecheck.co.uk';
  }
})();

// Official Destination URLs
export const OFFICIAL_MIB_CHECK_URL =
  'https://www.mib.org.uk/check-and-stay-insured/check-your-vehicle/';

export const OFFICIAL_DVLA_CHECK_URL =
  'https://www.gov.uk/get-vehicle-information-from-dvla';

export const OFFICIAL_FIRST_ALTERNATIVE_URL =
  'https://www.firstalternative.com/';

// Navigation Items
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-to-check-if-a-car-is-insured/' },
  { label: 'Insurance Guide', href: '/is-my-car-insured/' },
  { label: 'First Alternative', href: '/first-alternative-car-insurance/' },
  { label: 'Classic Car Insurance', href: '/classic-car-insurance/' },
  { label: 'FAQ', href: '/faq/' },
] as const;

// Footer Navigation Sections
export const FOOTER_GUIDES = [
  { label: 'How to Check If Car Is Insured', href: '/how-to-check-if-a-car-is-insured/' },
  { label: 'Is My Car Insured?', href: '/is-my-car-insured/' },
  { label: 'Check Car Insurance by Registration', href: '/check-car-insurance-by-registration/' },
  { label: 'First Alternative Car Insurance Guide', href: '/first-alternative-car-insurance/' },
  { label: 'Classic Car Insurance UK', href: '/classic-car-insurance/' },
  { label: 'Frequently Asked Questions', href: '/faq/' },
] as const;

export const FOOTER_COMPANY = [
  { label: 'About Us', href: '/about-us/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
] as const;
