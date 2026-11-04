import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { constructMetadata } from '@/lib/seo';
import { SITE_NAME } from '@/lib/config';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy – VehicleCheck',
  description:
    'Our transparent privacy policy. Understand how VehicleCheck processes vehicle registrations client-side without storing or transmitting your data.',
  path: '/privacy-policy/',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F6F8FA] min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy/' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-3">
            Data Protection &amp; UK GDPR
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight [text-wrap:balance]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Effective Date: November 2026 · Target Jurisdiction: United Kingdom
          </p>
        </div>

        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs space-y-8 text-slate-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#102A43]">1. Overview &amp; Privacy Commitment</h2>
            <p>
              {SITE_NAME} is committed to protecting your privacy. This policy outlines how information is handled when you use our website. We believe in total data transparency and minimal collection principles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#102A43]">2. How We Handle Vehicle Registration Numbers (VRNs)</h2>
            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950">
              <p className="font-semibold mb-1">Client-Side Architecture Guarantee:</p>
              <p>
                When you input a vehicle registration number into our checker tool, the format validation takes place entirely on your device (within your web browser).
              </p>
            </div>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600">
              <li>We do <strong>not</strong> send your registration number to our own web servers.</li>
              <li>We do <strong>not</strong> store your registration in any database or cloud storage.</li>
              <li>We do <strong>not</strong> save your registration in browser local storage or persistent cookies.</li>
              <li>When you close or refresh your browser tab, your entered registration is completely discarded.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#102A43]">3. External Official Websites</h2>
            <p>
              When you click &quot;Continue to Official MIB Check&quot;, you are redirected to the official website of the Motor Insurers&apos; Bureau (mib.org.uk). Any interaction, declaration, or data you provide on their portal is governed solely by the privacy notice and terms of the Motor Insurers&apos; Bureau.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#102A43]">4. Contact Form Inquiries</h2>
            <p>
              If you contact us via our website form, the details you submit (such as your name, email address, and message) are used exclusively to process and reply to your inquiry. We never sell or share contact details with marketing third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#102A43]">5. Cookies &amp; Future Advertising Disclosures</h2>
            <p>
              This website currently utilizes standard functional browser sessions. In the future, this site may implement standard advertising networks (such as Google AdSense) to fund ongoing server maintenance. In such an event, advertising cookies may be used to serve non-personalized or personalized advertisements subject to your cookie banner consent under the UK Privacy and Electronic Communications Regulations (PECR).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#102A43]">6. Your Rights Under UK GDPR</h2>
            <p>
              Under the UK General Data Protection Regulation and the Data Protection Act 2018, you possess rights including the right to access, rectify, or erase any personal information we hold about you. Because we do not store vehicle registrations or user account records, we hold zero profile data for checker visitors.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
