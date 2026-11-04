import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ name: 'Home', url: '/' }, ...items];
  const jsonLd = getBreadcrumbJsonLd(allItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500 overflow-x-auto"
      >
        <ol className="flex items-center gap-1.5 whitespace-nowrap">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-slate-600 hover:text-[#16324F] transition-colors focus:outline-none focus:underline"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-semibold text-slate-900 truncate max-w-xs sm:max-w-md"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-slate-600 hover:text-[#16324F] transition-colors focus:outline-none focus:underline"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
