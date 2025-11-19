import Link from 'next/link';
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import ServicesSection from "./ServicesSection";
import ProcessSection from "./ProcessSection";
import WhyChooseUsSection from "./WhyChooseUsSection"
import ContactForm from "./ContactForm";
import { torontoPageConfig } from "./torontoPageConfig";
import BeforeAfterGallery from "./BeforeAfterGallery";

export const metadata = {
  title: torontoPageConfig.title,
  description: torontoPageConfig.description,
  alternates: { canonical: torontoPageConfig.canonical },
  openGraph: {
    title: torontoPageConfig.openGraph.title,
    description: torontoPageConfig.openGraph.description,
    url: torontoPageConfig.canonical,
    type: "website",
    images: [
      {
        url: `https://www.canvasbuilds.ca${torontoPageConfig.image}`,
        width: 1200,
        height: 630,
        alt: torontoPageConfig.openGraph.title,
      },
    ],
  },
  keywords: torontoPageConfig.keywords.join(", "),
};

export default function TorontoPage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <BeforeAfterGallery/>
      <ProcessSection/>
      <WhyChooseUsSection/>
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <p>
          Ready to discuss your vision for a **modern kitchen renovation in Toronto** or explore the ROI of a **legal basement apartment**? <Link href="/contact" style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Contact our Toronto renovation contractors</Link> today for a transparent, no-obligation quote.
        </p>
      </div>
      <ContactForm />
    </main>
  );
}