'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ✅ Explicitly cast to HTMLElement[]
    const cards = gsap.utils.toArray('.testimonial-card') as HTMLElement[];

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const testimonials = [
    "Canvas Builds completely transformed our backyard into a luxurious oasis. Every detail was flawless — we couldn’t be happier! – Sarah M.",
    "The team at Canvas Builds is professional, reliable, and incredibly creative. Our home renovation exceeded all expectations! – John D.",
    "From concept to completion, Canvas Builds delivered exceptional results. Our outdoor space is now perfect for entertaining. – Emily R.",
    "Canvas Builds landscaping and stonework turned our property into a showpiece. Highly recommended for anyone in the GTA! – Michael L.",
    "We trusted Canvas Builds with our home remodel, and they truly delivered. Quality craftsmanship and attention to detail! – Amanda K.",
    "Canvas Builds is the definition of professionalism. Their team is skilled, punctual, and creative — a joy to work with! – Laura S.",
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((text, i) => (
          <div key={i} className="testimonial-card">
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
