import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import ServicesSection from "./ServicesSection";
import ProcessSection from "./ProcessSection";
import WhyChooseUsSection from "./WhyChooseUsSection"
import ContactForm from "./ContactForm";
import { torontoPageConfig } from "./torontoPageConfig";

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
      <ProcessSection/>
      <WhyChooseUsSection/>
      <ContactForm />
    </main>
  );
}