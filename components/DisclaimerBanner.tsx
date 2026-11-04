import { ShieldAlert, ExternalLink } from 'lucide-react';
import { OFFICIAL_MIB_CHECK_URL } from '@/lib/config';

export default function DisclaimerBanner() {
  return (
    <div className="bg-amber-50 border-b border-amber-200/80 text-amber-950 text-xs py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Independent Service Notice:</strong> VehicleCheck is not affiliated with the MIB, DVLA, or UK Government.
          </span>
        </div>
        <a
          href={OFFICIAL_MIB_CHECK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-amber-900 hover:text-black underline shrink-0"
        >
          <span>Official MIB Portal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
