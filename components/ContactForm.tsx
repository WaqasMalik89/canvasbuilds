'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('Sending...');

    const form = e.currentTarget; // Save form reference here

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      console.log('Response from API:', resData);

      if (res.ok) {
        setStatus('Message sent! Thank you.');
        form.reset(); // Use saved form reference to reset
      } else {
        setStatus(resData.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" style={{ marginBottom: 40 }}>
      <h2>Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'grid', gap: 12, maxWidth: 500 }}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="tel" name="phone" placeholder="Phone Number" />
        <textarea
          name="message"
          placeholder="Tell us about your project..."
          required
          rows={6}
        ></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
      {status && <p>{status}</p>}
      <p>Email: info@canvasbuilds.ca | Cell: (647) 299-9100 | Office: (519) 996-8678</p>
      <p>
        Serving Toronto, Brampton, Mississauga, Milton, Guelph, Vaughan, Bradford,
        Barrie, Newmarket and the GTA
      </p>
    </section>
  );
}
