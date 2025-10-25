import Head from "next/head";
import Script from 'next/script';  // Import component to load external scripts in an optimized way
import siteConfig from "../config/siteConfig";
// These components mostly render static content or server-side rendered content
import Services from '../components/Services';  // Shows the list of services offered
import Portfolio from '../components/Portfolio';  // Displays past projects or portfolio items
import Testimonials from '../components/Testimonials';  // Shows customer reviews or testimonials

// These components need client-side JavaScript to work (e.g., sliders, forms)
import HeroCarousel from '../components/HeroBannerCarousel';  // A sliding banner at the top of the homepage
import ContactForm from '../components/ContactForm';  // Form for visitors to send messages or inquiries

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="robots" content={siteConfig.robots} />
        <link rel="canonical" href={siteConfig.canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={siteConfig.og.title} />
        <meta property="og:description" content={siteConfig.og.description} />
        <meta property="og:url" content={siteConfig.og.url} />
        <meta property="og:type" content={siteConfig.og.type} />
        <meta property="og:image" content={siteConfig.og.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content={siteConfig.twitter.card} />
        <meta name="twitter:title" content={siteConfig.twitter.title} />
        <meta
          name="twitter:description"
          content={siteConfig.twitter.description}
        />
        <meta name="twitter:image" content={siteConfig.twitter.image} />
      </Head>
        {/* Render interactive hero banner carousel */}
        <HeroCarousel />

{/* Main page content container with some padding and max width */}
<main style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
  {/* Section showing offered services */}
  <Services />
  {/* Section showing past portfolio projects */}
  <Portfolio />
  {/* Section showing customer testimonials */}
  <Testimonials />
  {/* Contact form so visitors can send messages */}
  <ContactForm />
</main>
    </>
  );
}