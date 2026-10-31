import Link from 'next/link';
import { Fragment } from 'react';

/** Renders **bold** and [link text](/path) inside a plain string. */
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*(.+)\*\*$/);
        if (bold) return <strong key={i} className="font-semibold text-ink-900">{bold[1]}</strong>;
        const link = part.match(/^\[(.+)\]\((.+)\)$/);
        if (link) {
          const [, label, href] = link;
          return href.startsWith('/') ? (
            <Link key={i} href={href} className="font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-800">
              {label}
            </Link>
          ) : (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold-700 underline underline-offset-4">
              {label}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
