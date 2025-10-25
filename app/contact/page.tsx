import Head from 'next/head';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Top Tier Renovation Services</title>
        <meta
          name="description"
          content="Get in touch with Top Tier Renovation Services for premium landscaping and renovation services across GTA and nearby areas."
        />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Head>

      <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
        <ContactForm />
      </main>
    </>
  );
}
