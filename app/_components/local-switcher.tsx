"use client";

import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import i18n from "_controls/i18n";

export default function LocaleSwitcher() {
  const { lang } = useParams();
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex gap-2">
      {i18n.locales.map((locale) => {
        return (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            className={`font-marko capitalize ${
              lang === locale
                ? "text-primary-green"
                : "pointer-events-none opacity-50"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
