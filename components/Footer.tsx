import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #e5e7eb',
        padding: '20px 16px',
        textAlign: 'center',
      }}
    >
      <p>&copy; Canvas Builds Inc. All rights reserved.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 12 }}>
        <a href="https://www.instagram.com/canvasbuilds.on" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} />
        </a>
        <a href="https://www.facebook.com/Jtunadestes" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Image src="/icons/facebook.png" alt="Facebook" width={24} height={24} />
        </a>
        <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Image src="/icons/youtube.png" alt="YouTube" width={24} height={24} />
        </a>
        <a href="https://www.tiktok.com/@canvas.builds?" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Image src="/icons/tiktok.png" alt="TikTok" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
}
