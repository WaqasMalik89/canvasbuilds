'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function ImageModal({ src, alt, children }: ImageModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} style={{ display: 'inline-block', cursor: 'pointer' }}>
        {children}
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={800}
            height={600}
            style={{ objectFit: 'contain', maxWidth: '90%', maxHeight: '90%', borderRadius: 12 }}
          />
        </div>
      )}
    </>
  );
}
