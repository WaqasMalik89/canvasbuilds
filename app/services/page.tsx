import Head from "next/head";
import ServicesSection from "@/components/ServicesSection";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | Canvas Builds Inc.</title>
        <meta
          name="description"
          content="Explore our premium landscaping and outdoor renovation services including design, installation, and maintenance."
        />
      </Head>
      <ServicesSection />
    </>
  );
}