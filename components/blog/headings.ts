import type { BlogBlock } from '@/content/blog';

/** "3. Shower floor: drain and tile" → { num: "03", title: "Shower floor: drain and tile" } */
export function splitHeading(text: string) {
  const m = text.match(/^(\d+)\.\s*(.*)$/);
  return m ? { num: m[1].padStart(2, '0'), title: m[2] } : { num: undefined, title: text };
}

/** Anchor id for a section heading, e.g. "1. Tub or shower?" → "tub-or-shower". */
export const headingId = (text: string) =>
  splitHeading(text)
    .title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Section headings of an article, for the "On this page" menu. */
export function articleSections(blocks: BlogBlock[]) {
  return blocks
    .filter((b): b is Extract<BlogBlock, { type: 'h2' }> => b.type === 'h2')
    .map((b) => ({ id: headingId(b.text), ...splitHeading(b.text) }));
}
