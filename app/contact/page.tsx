import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from './ContactForm';
import { constructMetadata } from '@/lib/seo';
import { MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { SITE_NAME } from '@/lib/config';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us – VehicleCheck',
  description:
    'Get in touch with the VehicleCheck team for website feedback, editorial corrections, or general inquiries regarding our UK vehicle insurance checking guides.',
  path: '/contact/',
  ogTag: 'Contact & Feedback',
});

export default function ContactPage() {
  return (
    <div className="bg-[#F6F8FA] min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'Contact', url: '/contact/' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-3">
            Editorial Enquiries &amp; Site Feedback
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight [text-wrap:balance]">
            Contact {SITE_NAME}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have a question about our guides or need to suggest an editorial correction?
            Send us a message using our enquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Information Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-[#102A43]">
                Important Notice Before Submitting:
              </h2>
              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <p className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#16324F] shrink-0 mt-0.5" />
                  <span>
                    <strong>We cannot check your policy:</strong> As an independent guide, our team does not have access to live Motor Insurance Database records or individual insurance files.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#16324F] shrink-0 mt-0.5" />
                  <span>
                    <strong>For urgent policy issues:</strong> Contact your insurance company or broker directly using the telephone number on your Certificate of Motor Insurance.
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 text-xs text-slate-600 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Official Inquiries:</h3>
              <p>
                For official MIB database queries or disputes regarding Continuous Insurance Enforcement notices, please consult the Motor Insurers&apos; Bureau directly at mib.org.uk.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-7">
            <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-8 shadow-xs">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
