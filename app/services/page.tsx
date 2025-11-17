import Head from "next/head";
import ServicesSection from "@/components/ServicesSection";
import Link from 'next/link'; // <--- 1. Import the Link component

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

      {/* --- NEW INTERNAL LINK BLOCK --- */}
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f5f5f5', 
        textAlign: 'center',
        margin: '20px 0'
      }}>
        <h2>
          Serving Toronto? Find Your Local Experts Here
        </h2>
        <p>
          If you are located in the city core, please view our dedicated page for 
          <Link 
            href="/services/toronto/renovation-contractors" 
            style={{ fontWeight: 'bold', color: '#0070f3', marginLeft: '5px' }}
          >
            Toronto Home Renovation Contractors.
          </Link>
        </p>
      </div>
      {/* ------------------------------- */}

      <ServicesSection />
    </>
  );
}