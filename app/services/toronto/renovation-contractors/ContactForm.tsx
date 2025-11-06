'use client';

import styles from './TorontoRenovationContractors.module.css';
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your message has been sent.`);
    setName(''); setEmail(''); setMessage('');
  };

  return (
    <section className={styles.contactForm}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
