// This tells Next.js that this component runs on the client side (browser)
// rather than the server side. This is needed for animations and interactivity.
'use client';

// Import React hooks for creating references and side effects
import { useRef, useEffect, useState } from 'react';
// Import Next.js Image component for optimized image loading
import Image from 'next/image';
// Import our custom modal component for showing enlarged images
import ImageModal from './ImageModal';
// Import GSAP (GreenSock Animation Platform) for smooth animations
import { gsap } from 'gsap';
// Import ScrollTrigger plugin for animations that trigger on scrolling
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Import CSS styles from a separate module file
import styles from './Portfolio.module.css';

// Register the ScrollTrigger plugin with GSAP, but only if we're in the browser
// (window doesn't exist during server-side rendering)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Array of portfolio items with image paths, descriptive text, and categories
// Each object represents one project in our portfolio
const portfolioItems = [
  { src: '/images/uploaded-image-0.jpg', alt: 'Custom outdoor patio with interlocking stonework and seating area', category: 'hardscaping' },
  { src: '/images/uploaded-image-1.jpg', alt: 'Elegant front patio design with flower beds and decorative lighting', category: 'lighting' },
  { src: '/images/uploaded-image-2.jpg', alt: 'Modern backyard landscape with lush greenery and stone pathway', category: 'landscaping' },
  { src: '/images/uploaded-image-3.jpg', alt: 'Luxury outdoor living space with custom landscaping and patio', category: 'hardscaping' },
  { src: '/images/uploaded-image-4.jpg', alt: 'Natural Stone Steps Installation', category: 'hardscaping' },
  { src: '/images/uploaded-image-5.jpg', alt: 'Quality Craftmanship with precision', category: 'landscaping' },
  { src: '/images/uploaded-image-6.jpg', alt: 'Natural Stone Steps Installation', category: 'hardscaping' },
  { src: '/images/uploaded-image-7.jpg', alt: 'Decorative Retaining Wall with Paved Driveway', category: 'hardscaping' },
  { src: '/images/uploaded-image-8.jpg', alt: 'Finished basement featuring a sleek, functional kitchenette with modern fixtures.', category: 'hardscaping' },
  { src: '/images/uploaded-image-9.jpg', alt: 'Decorative Retaining Wall with Paved Driveway', category: 'hardscaping' },
  { src: '/images/uploaded-image-10.jpg', alt: 'Side entryway with steps leading to a sheltered exterior door.', category: 'hardscaping' },
];

// Main Portfolio component that displays our projects
export default function Portfolio() {
  // Create a reference to the entire portfolio section for animation triggers
  const sectionRef = useRef<HTMLDivElement>(null);
  // Create a reference to the portfolio grid container
  const portfolioRef = useRef<HTMLDivElement>(null);
  // Create an array to store references to each individual portfolio item
  const imagesRef = useRef<HTMLDivElement[]>([]);
  // State to track the current filter category
  const [filter, setFilter] = useState('all');
  // State to track the filtered list of portfolio items
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  
  // useEffect hook to filter items when the filter state changes
  // This runs automatically whenever the filter value updates
  useEffect(() => {
    if (filter === 'all') {
      // If "all" is selected, show all portfolio items
      setFilteredItems(portfolioItems);
    } else {
      // Otherwise, filter to only show items matching the selected category
      setFilteredItems(portfolioItems.filter(item => item.category === filter));
    }
  }, [filter]); // This effect depends on the filter value

  // Helper function to add DOM elements to our references array
  // This helps us keep track of all portfolio items for animation
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    // Only add the element if it exists and isn't already in our array
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current[index] = el;
    }
  };

  // Main useEffect hook for animations - runs after component renders
  useEffect(() => {
    // Don't run animations if required elements aren't ready yet
    if (!portfolioRef.current || !sectionRef.current || imagesRef.current.length === 0) return;

    // Get references to the title and filter buttons for animation
    const titleElement = sectionRef.current.querySelector('h2');
    const filterButtonsElement = sectionRef.current.querySelector(`.${styles.filterButtons}`);

    // Create the main animation timeline that controls the sequence of animations
    const masterTl = gsap.timeline({
      // Configure ScrollTrigger to start animations when user scrolls to this section
      scrollTrigger: {
        trigger: sectionRef.current, // Element that triggers the animation
        start: 'top 90%',           // Start when top of element is 90% down the viewport
        end: 'bottom 10%',          // End when bottom is 10% from top of viewport
        toggleActions: 'play reverse play reverse', // Play forward on enter, reverse on leave, and repeat on scroll back
      },
    });

    // Animation 1: Section title animation (only if element exists)
    if (titleElement) {
      masterTl.fromTo(titleElement, 
        { opacity: 0, y: 20 },     // Start state: invisible and 20px down
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' } // End state: visible and in normal position
      );
    }

    // Animation 2: Filter buttons animation (only if element exists)
    if (filterButtonsElement) {
      masterTl.fromTo(filterButtonsElement, 
        { opacity: 0, y: 15 },     // Start state: invisible and 15px down
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, // End state: visible and in normal position
        '-=0.2' // Start this animation 0.2 seconds before the previous one ends (overlap)
      );
    }

    // Animation 3: Individual animations for each portfolio item
    imagesRef.current.forEach((image, i) => {
      // Skip if this image reference is empty
      if (!image) return;

      // Determine slide direction based on index (even: left, odd: right)
      const fromX = i % 2 === 0 ? -100 : 100;

      // Create individual animation for each portfolio item
      gsap.fromTo(
        image, // Element to animate
        { 
          opacity: 0,   // Start invisible
          x: fromX,     // Start offscreen (left or right based on index)
          scale: 0.95   // Start slightly smaller
        },
        {
          opacity: 1,   // End visible
          x: 0,         // End at normal horizontal position
          scale: 1,     // End at normal size
          duration: 0.8, // Animation takes 0.8 seconds
          ease: 'power2.out', // Smooth easing function
          scrollTrigger: {
            trigger: image, // This specific image triggers its own animation
            start: 'top 90%', // Start when top of image is 90% down viewport
            end: 'bottom 10%', // End when bottom is 10% from top of viewport
            toggleActions: 'play reverse play reverse', // Play forward on enter, reverse on leave
          },
          delay: i * 0.1, // Stagger the animations based on index
        }
      );

      // Hover animation - when mouse moves over an image
      image.addEventListener('mouseenter', () => {
        // Animate the portfolio item container
        gsap.to(image, {
          scale: 1.09,     // Enlarge to 109% size
          y: -5,           // Move 5 pixels upward
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)', // Enhance shadow for "lifted" effect
          duration: 0.3,   // Animation takes 0.3 seconds
          ease: 'power2.out', // Smooth easing function
        });
        
        // Animate the image inside the container separately
        const imgElement = image.querySelector('img');
        if (imgElement) {
          gsap.to(imgElement, {
            scale: 1.03,   // Slightly enlarge the image itself
            duration: 0.4, // Slightly longer duration for smoother effect
            ease: 'power2.out', // Smooth easing function
          });
        }
      });

      // When mouse moves away from an image
      image.addEventListener('mouseleave', () => {
        // Return the portfolio item to its normal state
        gsap.to(image, {
          scale: 1,       // Return to normal size
          y: 0,           // Return to normal position
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)', // Return to normal shadow
          duration: 0.4,  // Animation takes 0.4 seconds
          ease: 'power2.out', // Smooth easing function
        });
        
        // Reset the image inside the container
        const imgElement = image.querySelector('img');
        if (imgElement) {
          gsap.to(imgElement, {
            scale: 1,     // Return image to normal size
            duration: 0.3, // Animation takes 0.3 seconds
            ease: 'power2.out', // Smooth easing function
          });
        }
      });
    });

    // Cleanup function that runs when component is removed from page
    return () => {
      // Remove all ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredItems]); // This effect depends on the filteredItems array

  // Function to handle filter changes when buttons are clicked
  const handleFilterChange = (newFilter: string) => {
    // Don't do anything if the same filter is clicked again
    if (newFilter === filter) return;
    // Update the filter state, which will trigger the useEffect above
    setFilter(newFilter);
  };

  // The JSX that defines what this component renders to the screen
  return (
    // The main portfolio section container
    <section 
      id="portfolio" // HTML ID for linking from navigation
      ref={sectionRef} // Attach our section reference for animations
      className={styles.portfolioSection} // Apply CSS styles
    >
      {/* Portfolio section heading */}
      <h2 className={styles.sectionTitle}>
        Our Portfolio
      </h2>

      {/* Filter buttons container */}
      <div className={styles.filterButtons}>
        {/* Create a button for each category including "all" */}
        {['all', 'hardscaping', 'landscaping', 'lighting'].map(cat => (
          <button
            key={cat} // Unique key for React to track this element
            onClick={() => handleFilterChange(cat)} // Call handler when clicked
            // Apply different styles if this button represents the active filter
            className={`${styles.filterButton} ${filter === cat ? styles.filterButtonActive : ''}`}
            // Animation when mouse enters button (only for inactive filters)
            onMouseEnter={(e) => {
              if (filter !== cat) {
                gsap.to(e.currentTarget, {
                  background: '#9ae6b4', // Change to light green
                  color: '#22543d',      // Change to dark green text
                  duration: 0.2          // Quick transition
                });
              }
            }}
            // Animation when mouse leaves button (only for inactive filters)
            onMouseLeave={(e) => {
              if (filter !== cat) {
                gsap.to(e.currentTarget, {
                  background: '#e5e7eb', // Return to original gray
                  color: '#4b5563',      // Return to original text color
                  duration: 0.2          // Quick transition
                });
              }
            }}
          >
            {/* Display "All Projects" for the "all" category, otherwise show category name */}
            {cat === 'all' ? 'All Projects' : cat}
          </button>
        ))}
      </div>

      {/* Grid container for all portfolio items */}
      <div
        ref={portfolioRef} // Attach our portfolio container reference
        className={styles.portfolioGrid} // Apply CSS styles
      >
        {/* Loop through each filtered portfolio item and create a card for it */}
        {filteredItems.map(({ src, alt, category }, index) => (
          <div
            key={src} // Unique key for React to track this element
            ref={(el) => addToRefs(el, index)} // Add this element to our references array
            className={styles.portfolioItem} // Apply CSS styles
            data-category={category} // Store category as data attribute
          >
            {/* Category badge displayed in the corner */}
            <div className={styles.categoryBadge}>
              {category}
            </div>
            
            {/* Wrap each image in our custom modal component */}
            <ImageModal key={src} src={src} alt={alt}>
              {/* Container for the image */}
              <div className={styles.portfolioImageContainer}>
                {/* Next.js optimized image component */}
                <Image
                  src={src} // Image path
                  alt={alt} // Accessibility description
                  fill // Fill the container (requires parent with position: relative)
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px" // Responsive sizing
                  className={styles.portfolioImage} // Apply CSS styles
                  priority={index < 4} // Load first 4 images with high priority
                />
              </div>
              {/* Text content below the image */}
              <div className={styles.portfolioContent}>
                {/* Project title */}
                <h3 className={styles.portfolioTitle}>
                  {alt}
                </h3>
                {/* Call to action text */}
                <p className={styles.portfolioDescription}>
                  Click to view full project
                </p>
              </div>
            </ImageModal>
          </div>
        ))}
      </div>
    </section>
  );
}