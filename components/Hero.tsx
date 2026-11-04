import Image from 'next/image';
import VehicleChecker from './VehicleChecker';
import { ShieldCheck, CheckCircle2, Lock, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#102A43] text-white overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#16324F]">
      {/* Background Graphic & Scrim */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-luminosity">
        <Image
          src="/images/hero-uk-vehicle.jpg"
          alt="Contemporary car on British road"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Context Notice - unboxed quiet text */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F5D547] tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-[#F5D547]" />
              <span>Independent UK Motorist Guide · Motor Insurers&apos; Bureau Navigation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
              Check If Your Car Is Insured
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Find out how to check your vehicle&apos;s insurance status in the UK using your
              registration number and the official MIB service. Free, fast, and completely
              transparent.
            </p>

            {/* Trust Indicators */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-700/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#F5D547] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-white font-semibold">100% Free Service</strong>
                  <span className="text-slate-300">Official public checker access</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Lock className="w-5 h-5 text-[#F5D547] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-white font-semibold">No Stored Records</strong>
                  <span className="text-slate-300">Zero database logging</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="w-5 h-5 text-[#F5D547] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-white font-semibold">No Account Needed</strong>
                  <span className="text-slate-300">Instant registration check</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Vehicle Checker Card */}
          <div className="lg:col-span-5">
            <VehicleChecker />
          </div>
        </div>
      </div>
    </section>
  );
}
