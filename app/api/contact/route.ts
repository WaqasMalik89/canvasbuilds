// app/api/contact/route.ts — receives the contact form and emails it to you.
// Requires GMAIL_USER and GMAIL_PASS (a Gmail app password) in .env.local / Vercel.

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const MAX = { name: 120, email: 200, phone: 40, service: 80, location: 120, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.company, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const phone = clean(body.phone, MAX.phone);
  const service = clean(body.service, MAX.service);
  const location = clean(body.location, MAX.location);
  const message = clean(body.message, MAX.message);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please add your name, a valid email and a short message.' }, { status: 400 });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error('[contact] GMAIL_USER / GMAIL_PASS are not set');
    return NextResponse.json({ error: 'The form is temporarily unavailable.' }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New estimate request${service ? ` — ${service}` : ''}${location ? ` (${location})` : ''} from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || '—'}`,
        `Project type: ${service || '—'}`,
        `City / area: ${location || '—'}`,
        '',
        message,
      ].join('\n'),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] send failed', err);
    return NextResponse.json({ error: 'We couldn’t send your message.' }, { status: 500 });
  }
}
