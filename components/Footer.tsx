import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #1f2937',
        padding: '40px 16px',
        textAlign: 'center',
        backgroundColor: '#111827', // dark gray/black background
        color: '#e5e7eb', // light text
      }}
    >
      {/* Business Info with SEO-friendly <address> */}
      <div style={{ marginBottom: 20 }}>
        <h3
          style={{
            marginBottom: 8,
            fontSize: '1.2rem',
            fontWeight: 600,
            color: '#f3f4f6',
          }}
        >
          Canvas Builds Inc.
        </h3>

        {/* Proper address tag for Google crawlers */}
        <address
          style={{
            fontStyle: 'normal',
            lineHeight: 1.6,
            color: '#d1d5db',
          }}
        >
          714 West Park Ave<br />
          Bradford, ON L3Z 3B9<br />
          Canada
        </address>

        <p style={{ margin: '8px 0 0 0', color: '#d1d5db' }}>
          Serving the Greater Toronto Area (GTA) & surrounding regions
        </p>

        <p style={{ marginTop: 10 }}>
          <a
            href="tel:+15199968678"
            style={{
              color: '#60a5fa',
              textDecoration: 'none',
              fontWeight: 500,
              marginRight: 8,
            }}
          >
            +1 (519) 996-8678
          </a>
          |
          <a
            href="tel:+16472999100"
            style={{
              color: '#60a5fa',
              textDecoration: 'none',
              fontWeight: 500,
              marginLeft: 8,
            }}
          >
            +1 (647) 299-9100
          </a>
        </p>

        <p style={{ marginTop: 4 }}>
          <a
            href="mailto:info@canvasbuilds.ca"
            style={{
              color: '#93c5fd',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            info@canvasbuilds.ca
          </a>
        </p>

        <p style={{ marginTop: 6 }}>
          <a
            href="https://maps.google.com/?q=44.1193044768672,-79.58390048650624"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#93c5fd',
              textDecoration: 'underline',
              fontSize: '0.95rem',
            }}
          >
            📍 View on Google Maps
          </a>
        </p>
      </div>

      {/* Social Icons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          marginBottom: 20,
          marginTop: 10,
        }}
      >
        <a
          href="https://www.instagram.com/canvasbuilds.on"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} />
        </a>
        <a
          href="https://www.facebook.com/people/Canvas-Builds/61583402517730/#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Image src="/icons/facebook.png" alt="Facebook" width={24} height={24} />
        </a>
        <a
          href="https://www.youtube.com/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <Image src="/icons/youtube.png" alt="YouTube" width={24} height={24} />
        </a>
        <a
          href="https://www.tiktok.com/@canvas.builds"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <Image src="/icons/tiktok.png" alt="TikTok" width={24} height={24} />
        </a>
      </div>

      {/* Copyright */}
      <p
        style={{
          fontSize: '0.9rem',
          color: '#9ca3af',
          marginTop: 10,
        }}
      >
        &copy; {new Date().getFullYear()} Canvas Builds Inc. All rights reserved.
      </p>
    </footer>
  );
}
