import Link from 'next/link';

export default function Navigation() {
  return (
    <nav
      className="top-nav"
      style={{
        display: 'flex',
        gap: 20,
        justifyContent: 'center',
        margin: '20px 0',
      }}
      aria-label="Primary Navigation"
    >
      /*<Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/areas-we-serve">Areas We Serve</Link>
      */
    </nav>
  );
}
