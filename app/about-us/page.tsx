import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { constructMetadata } from '@/lib/seo';
import { ShieldCheck, Target, HeartHandshake, ArrowRight } from 'lucide-react';
import { SITE_NAME } from '@/lib/config';

export const metadata: Metadata = constructMetadata({
  title: 'About Us – Independent UK Vehicle Information Service',
  description:
    'Learn about VehicleCheck, an independent informational resource dedicated to helping British motorists understand UK insurance checking procedures and legal requirements.',
  path: '/about-us/',
});

export default function AboutUsPage() {
  return (
    <div className="bg-[#F6F8FA] min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'About Us', url: '/about-us/' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16324F] mb-3">
            Our Purpose &amp; Editorial Mission
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight [text-wrap:balance]">
            About {SITE_NAME}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {SITE_NAME} is an independent, free-to-use informational portal and vehicle registration
            formatting tool designed specifically for motorists across England, Scotland, Wales, and Northern Ireland.
          </p>
        </div>

        <div className="bg-white border border-[#E4EAF0] rounded-2xl p-6 sm:p-10 shadow-xs space-y-10 text-slate-700 leading-relaxed">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-lg font-bold text-[#102A43]">
              <Target className="w-5 h-5 text-[#16324F]" />
              <h2>Our Core Mission</h2>
            </div>
            <p className="text-base text-slate-600 leading-relaxed">
              Every month, hundreds of thousands of UK vehicle owners need to verify whether their motor insurance has taken effect, renewed correctly, or lapsed. Unfortunately, many search results lead to confusing sales funnels or misleading third-party websites that imply they hold private databases.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Our mission is simple: provide clear, objective, and transparent guidance. We help you format and double-check your registration syntax before directing you to the genuine, authorised Motor Insurers&apos; Bureau (MIB) enquiry service.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-lg font-bold text-[#102A43]">
              <ShieldCheck className="w-5 h-5 text-[#16324F]" />
              <h2>Independent &amp; Transparent Standards</h2>
            </div>
            <p className="text-base text-slate-600 leading-relaxed">
              We operate under strict transparency rules:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 leading-relaxed">
              <li><strong>Zero Fake Databases:</strong> We never simulate, fake, or invent insurance records. Real insurance checks happen solely on the official MIB portal.</li>
              <li><strong>Strict Privacy:</strong> Our registration plate validator runs entirely in your browser. We never log, store, or sell your registration numbers.</li>
              <li><strong>Independent Status:</strong> We are completely independent of government bodies (DVLA, MIB, UK Government) and commercial insurance providers.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-lg font-bold text-[#102A43]">
              <HeartHandshake className="w-5 h-5 text-[#16324F]" />
              <h2>How We Are Funded</h2>
            </div>
            <p className="text-base text-slate-600 leading-relaxed">
              {SITE_NAME} is completely free for all UK drivers. To maintain site infrastructure, content development, and domain maintenance, this website may in the future feature standard, clearly labeled advertising or contextual automotive resources. We never charge users for registration checks.
            </p>
          </section>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Questions or feedback regarding our guides?
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#16324F] hover:bg-[#102A43] rounded-lg transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
