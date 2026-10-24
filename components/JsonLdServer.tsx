// Server Component — renders JSON-LD structured data for Google.
// Do NOT add "use client".

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLdServer({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never break out of the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
