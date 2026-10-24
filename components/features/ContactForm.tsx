'use client';

import { useState } from 'react';
import { LuCircleCheck } from 'react-icons/lu';
import { buttonClasses } from '@/components/ui/Button';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const field =
  'mt-1.5 block w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 transition focus:border-gold-500 focus:outline-none focus:ring-4 focus:ring-gold-100';
const label = 'text-sm font-medium text-ink-800';

interface Props {
  /** Options for the "Project type" dropdown (service names). */
  serviceOptions: string[];
  /** Pre-selects the service dropdown (e.g. on a service page). */
  defaultService?: string;
  /** Pre-fills the project location (e.g. on an area page). */
  defaultLocation?: string;
}

export default function ContactForm({ serviceOptions, defaultService = '', defaultLocation = '' }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || 'Something went wrong.');
      }
      form.reset();
      setStatus('sent');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center rounded-[var(--radius-card)] bg-white p-10 text-center" role="status">
        <LuCircleCheck className="size-12 text-gold-600" aria-hidden="true" />
        <h3 className="mt-4 text-2xl">Thank you — we’ve got your message</h3>
        <p className="mt-2 text-ink-600">We’ll get back to you within one business day. Need us sooner? Call {site.phone.display}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="cf-name" className={label}>
          Name
        </label>
        <input id="cf-name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="cf-phone" className={label}>
          Phone
        </label>
        <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-email" className={label}>
          Email
        </label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="cf-service" className={label}>
          Project type
        </label>
        <select id="cf-service" name="service" defaultValue={defaultService} className={field}>
          <option value="">Choose one…</option>
          {serviceOptions.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
          <option value="Other">Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="cf-location" className={label}>
          City / area
        </label>
        <input id="cf-location" name="location" defaultValue={defaultLocation} placeholder="e.g. Waterloo" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className={label}>
          Tell us about your project
        </label>
        <textarea id="cf-message" name="message" required rows={5} className={field} />
      </div>

      {/* Honeypot: hidden from people, bots fill it in */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-500">Free, no-obligation estimate. We reply within one business day.</p>
        <button type="submit" disabled={status === 'sending'} className={cn(buttonClasses('primary', 'lg'), 'disabled:opacity-60')}>
          {status === 'sending' ? 'Sending…' : 'Request my estimate'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-700 sm:col-span-2" role="alert">
          {error} Please try again or call {site.phone.display}.
        </p>
      )}
    </form>
  );
}
