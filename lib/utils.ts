/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

/** "Kitchen Remodeling" + "Kitchener-Waterloo" → "Kitchen Remodeling in Kitchener-Waterloo" */
export function inArea(text: string, area?: string) {
  return area ? `${text} in ${area}` : text;
}

/** Join a list as "A, B and C". */
export function listJoin(items: string[]) {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}
