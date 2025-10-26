'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.testimonial-card', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });
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
