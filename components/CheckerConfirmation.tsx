'use client';

import { useState } from 'react';
import { CheckCircle2, Copy, Check, ExternalLink, ArrowLeft, ShieldAlert } from 'lucide-react';
import { OFFICIAL_MIB_CHECK_URL } from '@/lib/config';

interface CheckerConfirmationProps {
  formattedVrn: string;
  cleanVrn: string;
  onReset: () => void;
}

export default function CheckerConfirmation({
  formattedVrn,
  cleanVrn,
  onReset,
}: CheckerConfirmationProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(formattedVrn);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full text-left space-y-5 animate-in fade-in-50 duration-200">
      {/* Ready Badge & Back Button */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Registration ready</span>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Change registration</span>
        </button>
      </div>

      {/* Formatted Number Plate Display */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3">
        <div className="flex items-center bg-[#F5D547] rounded-lg border-2 border-[#102A43] px-4 py-2.5 shadow-sm">
          <div className="flex flex-col items-center justify-center bg-[#003399] text-white rounded px-1.5 py-0.5 text-[9px] font-bold mr-3 select-none">
            <span className="text-[#F5D547] text-[10px]">🇬🇧</span>
            <span>UK</span>
          </div>
          <span className="uk-number-plate text-2xl font-black text-[#172B3A] tracking-widest">
            {formattedVrn}
          </span>
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-sm transition-colors min-h-[40px] focus:outline-none focus:ring-2 focus:ring-[#16324F]"
          aria-label="Copy registration number"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-bold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-slate-500" />
              <span>Copy registration</span>
            </>
          )}
        </button>
      </div>

      {/* Verification Instructions */}
      <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 text-xs text-slate-700 space-y-2">
        <p className="font-semibold text-slate-900 text-sm">
          Next steps to verify your insurance status:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-slate-600 leading-relaxed">
          <li>Click the official link below to open the Motor Insurers&apos; Bureau portal.</li>
          <li>Paste or enter your registration (<span className="font-mono font-bold text-slate-900">{formattedVrn}</span>) when prompted.</li>
          <li>Confirm that you own the vehicle or are legally permitted to drive it.</li>
        </ol>
      </div>

      {/* Main External CTA */}
      <a
        href={OFFICIAL_MIB_CHECK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3.5 px-6 bg-[#16324F] hover:bg-[#102A43] active:bg-[#0c2033] text-white font-bold text-base rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#16324F]/30 min-h-[48px] flex items-center justify-center gap-2 group text-center"
      >
        <span>Continue to Official MIB Check</span>
        <ExternalLink className="w-4 h-4 text-[#F5D547] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
      </a>

      {/* Transparency & Disclaimer Box */}
      <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Official Database Notice:</strong> We do not access live insurance records.
          Your actual vehicle insurance status is checked through the official MIB service.
        </p>
      </div>
    </div>
  );
}
