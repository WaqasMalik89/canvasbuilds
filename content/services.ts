// content/services.ts
// ---------------------------------------------------------------------------
// SERVICE PAGES — one entry = one page at /services/<slug>.
// To add a service: copy an entry, change the slug and text, add the slug to
// ServiceSlug in content/types.ts. Menus, sitemap and footer update themselves.
// ---------------------------------------------------------------------------

import type { Service, ServiceSlug } from './types';

const AREAS = 'Kitchener-Waterloo, Bradford, Toronto and the GTA';

export const services: Service[] = [
  {
    slug: 'home-renovation',
    name: 'Home Renovation',
    icon: 'home',
    summary: 'Whole-home and multi-room remodels — layout changes, open-concept conversions and new finishes, managed by one team.',
    seo: {
      title: 'Home Renovation Contractors in Kitchener-Waterloo, Bradford & GTA',
      description:
        'Full home renovations and remodeling in Kitchener-Waterloo, Bradford, Toronto and the GTA. Design, permits and construction handled by one team. Free estimates.',
    },
    h1: 'Home Renovation & Remodeling',
    intro: [
      'Whether you are updating a few rooms or reworking the whole house, Canvas Builds manages your renovation from the first walkthrough to the final coat of paint. One team coordinates the design, permits, trades and finishes, so you are not juggling contractors.',
      `We renovate detached homes, semis and townhouses across ${AREAS} — from older homes that need structural updates to newer builds that just need a modern refresh.`,
    ],
    included: [
      'Site visit, measurements and a written, itemized quote',
      'Layout planning and open-concept conversions',
      'Permit drawings and building permit applications',
      'Demolition, framing, drywall and finishing',
      'Licensed electrical, plumbing and HVAC trades',
      'Kitchens, bathrooms, basements, flooring and paint in one contract',
      'Final walkthrough and deficiency sign-off',
    ],
    sections: [
      {
        heading: 'One contractor for the whole project',
        paragraphs: [
          'Most renovations touch several trades at once. When one company is responsible for scheduling and quality, there are fewer gaps between trades, fewer delays and a single point of contact when you have a question.',
          'Before work starts you get a clear scope, a schedule and an itemized price, so you know exactly what is included.',
        ],
      },
      {
        heading: 'Permits and the Ontario Building Code',
        paragraphs: [
          'Structural changes, new plumbing, additional units and many layout changes need a building permit from your municipality. We prepare or coordinate the drawings, apply for the permit and book the inspections, and our work is built to the Ontario Building Code.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you offer free renovation estimates?', a: 'Yes. We visit the home, talk through what you want to achieve and send a written, itemized estimate at no cost.' },
      {
        q: 'Do I need a permit for my home renovation?',
        a: 'It depends on the work. Structural changes, new or relocated plumbing, new units and some electrical work usually need a permit; cosmetic updates like painting and flooring usually do not. We tell you what applies and handle the application.',
      },
      { q: 'Can we live in the house during the renovation?', a: 'Often, yes. We phase the work where possible, contain dust and agree on working hours with you before we start.' },
    ],
    photos: [
      { src: '/images/kitchens/open-concept-kitchen-living-room.jpg', alt: 'Open-concept kitchen and living room renovation' },
      { src: '/images/flooring/mississauga-vinyl-plank-flooring-open-concept.jpg', alt: 'Mississauga main floor renovation with vinyl plank flooring and staircase', portrait: true },
      { src: '/images/kitchens/mississauga-kitchen-island-stainless-appliances.jpg', alt: 'Renovated kitchen with navy island in Mississauga', portrait: true },
      { src: '/images/interiors/mississauga-slat-accent-wall-floating-shelf.jpg', alt: 'Wood slat accent wall with floating shelf', portrait: true },
      { src: '/images/basements/basement-bedroom-laminate-flooring.jpg', alt: 'Finished basement bedroom with new flooring' },
      { src: '/images/interiors/feature-wall-panel-moulding.jpg', alt: 'Feature wall with panel moulding', portrait: true },
    ],
    featuredProjectId: 'mississauga-home-renovation',
    related: ['kitchen-remodeling', 'bathroom-renovation', 'basement-finishing', 'load-bearing-wall-removal'],
  },
  {
    slug: 'kitchen-remodeling',
    name: 'Kitchen Remodeling',
    icon: 'kitchen',
    summary: 'Custom kitchens — new layouts, cabinetry, countertops, backsplash and lighting designed around how you cook and live.',
    seo: {
      title: 'Kitchen Remodeling in Kitchener-Waterloo, Bradford & GTA',
      description:
        'Kitchen renovation contractors in Kitchener-Waterloo, Bradford, Toronto and the GTA. Custom cabinets, quartz countertops, open-concept layouts and lighting. Free estimates.',
    },
    h1: 'Kitchen Remodeling',
    intro: [
      'The kitchen is the most-used room in the house, and the one where a good layout makes the biggest difference. We remodel kitchens of every size — from compact galley kitchens in older homes to large open-concept spaces and basement-suite kitchens.',
      'We handle the full job: design, demolition, wall or plumbing changes, cabinetry, countertops, backsplash, lighting and finishing.',
    ],
    included: [
      'Kitchen layout design and space planning',
      'Custom and semi-custom cabinetry',
      'Quartz, granite and porcelain countertops',
      'Backsplash tile, under-cabinet and pot lights',
      'Plumbing and electrical by licensed trades',
      'Removing walls for an open-concept kitchen',
      'Flooring, drywall and paint to finish the space',
    ],
    sections: [
      {
        heading: 'Opening up the kitchen',
        paragraphs: [
          'Many homeowners want to open the kitchen to the dining or living room. If the wall is load-bearing, we work with a structural engineer to size a beam and obtain a building permit before removing it.',
        ],
      },
      {
        heading: 'Kitchen cabinet options',
        paragraphs: [
          'We build kitchens with three main types of cabinet doors. All three come in shaker, slab and other door styles, and we help you choose based on your budget, look and how hard the kitchen will be used.',
        ],
        options: [
          {
            name: 'MDF Thermofoil',
            bestFor: 'Best value',
            text: 'MDF wrapped in a smooth vinyl finish. Affordable, easy to clean and available in many colours and woodgrains. Keep it away from high heat, such as right beside an oven or self-cleaning range.',
          },
          {
            name: 'Painted MDF',
            bestFor: 'Custom colour, mid-range',
            text: 'MDF with a sprayed paint finish for a crisp, seamless look in any colour, like the navy and white in our Mississauga kitchen. Stable and does not crack at the joints. Chips can be touched up.',
          },
          {
            name: 'Solid wood (oak, maple and more)',
            bestFor: 'Premium and long-lasting',
            text: 'Real hardwood with a stained or painted finish and natural grain. The most durable option and can be refinished years later. Wood moves slightly with humidity, so painted joints may show fine lines over time.',
          },
        ],
      },
      {
        heading: 'Basement and secondary-suite kitchens',
        paragraphs: [
          'We also build full kitchens and kitchenettes for basement apartments and in-law suites, planned around existing plumbing and the fire-separation and ventilation requirements for a second unit.',
        ],
      },
    ],
    faqs: [
      { q: 'Which kitchen cabinets are better: thermofoil, painted MDF or solid wood?', a: 'Thermofoil is the most affordable and easy to clean, painted MDF gives a smooth custom-colour finish at a mid-range price, and solid wood such as oak or maple is the most durable and can be refinished. We show you samples of each and recommend what fits your budget and style.' },
      { q: 'How long does a kitchen remodel take?', a: 'It depends on the size of the kitchen, whether walls or plumbing move and the lead time for cabinets and countertops. You get a written schedule with your quote.' },
      { q: 'Do I need a permit to renovate my kitchen?', a: 'Replacing cabinets and countertops generally does not. Removing walls, adding plumbing or significant electrical changes usually do. We confirm this during the estimate.' },
      { q: 'Can you remove a wall to make my kitchen open concept?', a: 'Yes. If the wall is load-bearing we arrange the engineering and permit and install a properly sized beam before the wall comes out.' },
    ],
    photos: [
      { src: '/images/kitchens/mississauga-kitchen-island-stainless-appliances.jpg', alt: 'Kitchen remodel in Mississauga with navy island, white shaker cabinets and quartz counters', portrait: true },
      { src: '/images/kitchens/mississauga-kitchen-3d-design-rendering.jpg', alt: '3D design rendering of a white and navy kitchen prepared before construction' },
      { src: '/images/kitchens/open-concept-kitchen-white-shaker-quartz-island-pendants.jpg', alt: 'Renovated open-concept kitchen with white shaker cabinets, marble-look quartz island, crystal pendant lights and dark plank flooring' },
      { src: '/images/kitchens/kitchen-remodel-before-after-white-shaker-quartz-island.jpg', alt: 'Kitchen before and after: a dated kitchen with a white fridge and a ceiling fan, transformed with white shaker cabinets, marble-look quartz counters and backsplash, stainless appliances, a quartz-topped island and crystal pendant lights', portrait: true },
      { src: '/images/kitchens/brampton-kitchen-before-after-stacked.jpg', alt: 'Brampton kitchen before and after: dark raised-panel cabinets, laminate counters and black appliances replaced with white shaker cabinets, marble-look quartz counters and backsplash, open corner shelving and a stainless gas range', portrait: true },
      { src: '/images/kitchens/open-concept-kitchen-living-room.jpg', alt: 'Open-concept kitchen with island and pendant lights' },
      { src: '/images/kitchens/modern-kitchenette-wine-fridge.jpg', alt: 'Modern kitchenette with wine fridge' },
      { src: '/images/kitchens/basement-kitchen-grey-island-marble-tile.jpg', alt: 'Kitchen with grey island and marble-look tile' },
    ],
    featuredProjectId: 'mississauga-home-renovation',
    related: ['load-bearing-wall-removal', 'flooring-installation', 'basement-finishing', 'home-renovation'],
  },
  {
    slug: 'bathroom-renovation',
    name: 'Bathroom Renovation',
    icon: 'bath',
    summary: 'Walk-in showers, wall-hung toilets, tile and vanities — with waterproofing done properly behind every wall.',
    seo: {
      title: 'Bathroom Renovation in Kitchener-Waterloo, Bradford & GTA',
      description:
        'Bathroom renovations in Kitchener, Waterloo, Cambridge, Bradford, Toronto and the GTA. Walk-in showers, wall-hung toilets, tile and waterproofing done right. Free estimates.',
    },
    h1: 'Bathroom Renovation',
    intro: [
      'A bathroom renovation has to look good and keep water where it belongs for years. We renovate main bathrooms, ensuites, powder rooms and basement bathrooms, with careful attention to waterproofing, ventilation and tile work.',
      `From a simple refresh to a full gut-and-rebuild with a walk-in shower, we manage the plumbing, electrical, tile and finishing as one project — across ${AREAS}.`,
    ],
    included: [
      'Full demolition down to the studs where needed',
      'Walk-in showers, tub-to-shower conversions and glass enclosures',
      'Shower and floor waterproofing membranes',
      'Floor and wall tile, including large-format porcelain',
      'Floating vanities, LED mirrors and wall-hung toilets',
      'Exhaust fan and lighting upgrades',
      'Plumbing changes by licensed plumbers, with permits where required',
    ],
    sections: [
      {
        heading: 'Waterproofing comes first',
        paragraphs: [
          'Most bathroom failures happen behind the tile. We install a continuous waterproofing system in showers and wet areas before any tile goes up, and make sure the room is properly ventilated.',
        ],
      },
      {
        heading: 'Basement bathrooms',
        paragraphs: [
          'Adding a bathroom to a basement usually means new drains and venting, which requires a plumbing permit. We plan the layout around your existing plumbing to keep costs reasonable and handle the permit and inspections.',
        ],
      },
    ],
    faqs: [
      { q: 'How long does a bathroom renovation take?', a: 'The timeline depends on the size of the room, whether plumbing moves and the tile and fixtures you choose. You get a written schedule with your quote.' },
      { q: 'Do I need a permit for a bathroom renovation?', a: 'Replacing fixtures in the same locations usually does not. Adding a new bathroom or moving drains and vents generally does. We confirm what applies to your project.' },
      { q: 'Can you convert my bathtub into a walk-in shower?', a: 'Yes. Tub-to-shower conversions are one of our most common bathroom projects, including waterproofing, tile and the glass enclosure.' },
    ],
    photos: [
      { src: '/images/bathrooms/kitchener-waterloo-bathroom-finished.jpg', alt: 'Bathroom renovation with floating vanity, LED mirror, wall-hung toilet and glass walk-in shower', portrait: true },
      { src: '/images/bathrooms/modern-bathroom-black-hex-tile-shower.jpg', alt: 'Modern bathroom with black hex tile shower floor', portrait: true },
      { src: '/images/bathrooms/glass-shower-marble-tile-bathroom.jpg', alt: 'Bathroom with sliding glass shower and marble-look tile', portrait: true },
      { src: '/images/bathrooms/sliding-glass-shower-door.jpg', alt: 'Walk-in shower with sliding glass door', portrait: true },
    ],
    featuredProjectId: 'kitchener-waterloo-bathroom',
    related: ['basement-finishing', 'kitchen-remodeling', 'flooring-installation', 'home-renovation'],
  },
  {
    slug: 'media-wall-installation',
    name: 'Media Walls & Built-ins',
    icon: 'tv',
    summary: 'Custom TV media walls with recessed niches, hidden wiring, built-in shelving and LED accent lighting.',
    seo: {
      title: 'Custom Media Wall & TV Wall Builders in Kitchener-Waterloo, Bradford & GTA',
      description:
        'Custom media walls and TV feature walls in Kitchener, Waterloo, Cambridge, Bradford, Toronto and the GTA. Recessed TV niches, hidden wiring, built-in shelving and LED lighting. Free estimates.',
    },
    h1: 'Custom Media Walls & TV Feature Walls',
    intro: [
      'A media wall turns a plain living-room wall into the focal point of the room. We design and build custom TV walls with a recessed TV niche, a media shelf for your components, built-in display shelving and LED accent lighting — with every cable hidden inside the wall.',
      `Each wall is designed around your room, your TV size and how you use the space, then framed, finished and painted by our own team across ${AREAS}.`,
    ],
    included: [
      'Design and layout sized to your TV, room and furniture',
      'Custom wood framing anchored to the existing wall',
      'Solid backing for a secure flush or tilting TV mount',
      'Hidden power, HDMI and low-voltage wiring',
      'Recessed TV niche, media shelf and display niches',
      'LED puck or strip lighting in shelves and niches',
      'Drywall, corner bead, taping, sanding, primer and paint',
      'Optional electric fireplace insert and soundbar recess',
    ],
    sections: [
      {
        heading: 'Designed around your TV and your room',
        paragraphs: [
          'We start with the size of your TV, your seating distance and the width of the wall. From there we plan the TV niche, shelf heights and side towers so the wall looks balanced and the TV sits at a comfortable viewing height.',
        ],
      },
      {
        heading: 'Clean lines, no visible wires',
        paragraphs: [
          'Because the wall is framed out from the original, power outlets, HDMI and network cables run inside it. The result is a clean, built-in look with nothing hanging below the TV. Any new electrical work is done by a licensed electrician.',
        ],
      },
      {
        heading: 'Media walls in basements and living rooms',
        paragraphs: [
          'Media walls are one of the most popular upgrades in Kitchener-Waterloo living rooms and finished basements. If you are finishing your basement, we can build the media wall as part of the same project.',
        ],
      },
    ],
    faqs: [
      { q: 'How long does it take to build a media wall?', a: 'Most media walls take about one to two weeks from framing to paint, depending on size, lighting and finishes. Drywall compound needs drying time between coats. You get a written schedule with your quote.' },
      { q: 'Can you hide the TV wires inside the wall?', a: 'Yes. The wall is framed out from the existing wall, so power, HDMI and network cables run inside it and nothing is visible below the TV.' },
      { q: 'Can a media wall include a fireplace?', a: 'Yes. We can frame an opening for an electric fireplace insert below or beside the TV and plan the power for it.' },
      { q: 'Do I need a permit for a media wall?', a: 'A non-structural media wall usually does not need a building permit. New electrical circuits may need an ESA notification, which our licensed electrician handles.' },
    ],
    photos: [
      { src: '/images/media-walls/kitchener-waterloo-media-wall-after.jpg', alt: 'Custom media wall with recessed TV niche and LED-lit display niches in Kitchener-Waterloo' },
      { src: '/images/media-walls/kitchener-waterloo-media-wall-step-6-finished-tv.jpg', alt: 'Living room media wall with wall-mounted TV and built-in shelving' },
      { src: '/images/media-walls/kitchener-waterloo-media-wall-built-in-shelving-side-view.jpg', alt: 'Side view of a custom media wall with built-in shelving towers' },
    ],
    featuredProjectId: 'kitchener-waterloo-media-wall',
    related: ['basement-finishing', 'home-renovation', 'painting', 'flooring-installation'],
  },
  {
    slug: 'basement-finishing',
    name: 'Basement Finishing & Legal Suites',
    icon: 'basement',
    summary: 'Finished basements and legal secondary suites — separate entrances, egress, fire separation, kitchens and bathrooms built to code.',
    seo: {
      title: 'Basement Finishing & Legal Basement Suites — KW, Bradford & GTA',
      description:
        'Basement finishing and legal basement apartments in Kitchener-Waterloo, Bradford, Toronto and the GTA. Permits, separate entrances, egress and fire separation. Free estimates.',
    },
    h1: 'Basement Finishing & Legal Basement Suites',
    intro: [
      'A finished basement adds living space without adding to your home’s footprint. We build family rooms, home offices, gyms and guest areas, as well as legal secondary suites that can be rented out.',
      'A legal basement apartment has specific requirements for exits, fire separation, smoke and CO alarms, ceiling height and ventilation. We plan the suite around those requirements from the start and handle the building permit and inspections.',
    ],
    included: [
      'Framing, insulation and vapour barrier',
      'Drywall, ceilings, trim and paint',
      'Walk-up separate entrances and egress windows',
      'Fire separation and interconnected smoke/CO alarms',
      'Basement kitchens, kitchenettes and bathrooms',
      'Flooring suited to below-grade spaces',
      'Permit drawings, applications and inspections',
    ],
    sections: [
      {
        heading: 'Legal secondary suites',
        paragraphs: [
          'To be legal, a basement apartment must meet the Ontario Building Code and Ontario Fire Code requirements for a second unit and pass municipal inspections. Ontario now permits additional residential units on most urban residential lots, so many homeowners are adding income suites.',
          'We review your basement during the estimate and tell you what is needed — for example a separate entrance, egress window, added fire separation or ceiling height changes — before you commit.',
        ],
      },
    ],
    faqs: [
      { q: 'Do I need a permit to finish my basement?', a: 'In most Ontario municipalities, finishing a basement — especially adding a bathroom or creating a second unit — requires a building permit. We prepare the application and book the inspections.' },
      { q: 'What makes a basement apartment legal?', a: 'It must meet the building and fire code requirements for a second unit — exits, fire separation, smoke and CO alarms, ceiling height and ventilation — and pass municipal inspections.' },
      { q: 'Can you add a separate entrance to my basement?', a: 'Yes. Walk-up side or rear entrances are common for basement suites and require a permit. We handle the design, permit and construction.' },
    ],
    photos: [
      { src: '/images/basements/basement-walk-up-separate-entrance.jpg', alt: 'Basement walk-up separate entrance for a legal secondary suite' },
      { src: '/images/kitchens/basement-suite-kitchen-white-cabinets-island.jpg', alt: 'Basement suite kitchen with island' },
      { src: '/images/basements/basement-bedroom-laminate-flooring.jpg', alt: 'Finished basement bedroom with laminate flooring' },
      { src: '/images/kitchens/basement-suite-kitchenette-laundry.jpg', alt: 'Basement suite kitchenette with laundry' },
    ],
    related: ['bathroom-renovation', 'media-wall-installation', 'flooring-installation', 'home-renovation'],
  },
  {
    slug: 'load-bearing-wall-removal',
    name: 'Load-Bearing Wall Removal',
    icon: 'wall',
    summary: 'Open up your main floor safely — engineered beams, permits and temporary shoring for load-bearing wall removal.',
    seo: {
      title: 'Load-Bearing Wall Removal in Kitchener-Waterloo, Bradford & GTA',
      description:
        'Load-bearing wall removal in Kitchener, Waterloo, Bradford, Toronto and the GTA. Engineered beam design, building permits, shoring and finishing for open-concept living.',
    },
    h1: 'Load-Bearing Wall Removal',
    intro: [
      'Removing a wall is the most effective way to turn a closed-off main floor into an open-concept space. When that wall carries the weight of the floors or roof above, it has to be replaced with a properly designed beam and supports.',
      'We manage the whole process: confirming whether the wall is load-bearing, working with a structural engineer on the beam design, obtaining the building permit, installing temporary shoring, and finishing the ceiling and floors afterwards.',
    ],
    included: [
      'Assessment of whether the wall is load-bearing',
      'Structural engineer’s beam and post design',
      'Building permit application and inspections',
      'Temporary shoring while the wall is removed',
      'LVL, steel or flush beam installation',
      'Relocating wiring, plumbing or ductwork in the wall',
      'Drywall, ceiling, flooring repairs and paint',
    ],
    sections: [
      {
        heading: 'Why engineering and a permit matter',
        paragraphs: [
          'A load-bearing wall transfers weight down to the foundation. Removing it without a correctly sized beam and posts can cause sagging floors, cracked drywall or worse. In Ontario, structural changes like this require a building permit, and the beam is designed by a qualified engineer or designer.',
        ],
      },
      {
        heading: 'Flush beams and clean finishes',
        paragraphs: [
          'Where the framing allows, a flush beam can be hidden in the ceiling so there is no dropped bulkhead. We discuss the options with you and the engineer before work begins.',
        ],
      },
    ],
    faqs: [
      { q: 'How do I know if a wall is load-bearing?', a: 'Walls running perpendicular to floor joists, walls near the centre of the house and walls with posts or walls directly above or below are common clues — but only an on-site assessment can confirm it.' },
      { q: 'Do I need a permit to remove a load-bearing wall?', a: 'Yes. Removing a load-bearing wall is a structural change and requires a building permit and an engineered beam design.' },
      { q: 'Can the beam be hidden in the ceiling?', a: 'Often, yes. A flush beam sits within the ceiling joists so the ceiling stays flat. Whether it is possible depends on the span and the framing above.' },
    ],
    photos: [
      { src: '/images/kitchens/open-concept-kitchen-living-room.jpg', alt: 'Open-concept main floor after wall removal' },
      { src: '/images/renovations/mississauga-wall-opening-new-header.jpg', alt: 'Wall opening framed with a new header during a Mississauga renovation', portrait: true },
      { src: '/images/renovations/mississauga-wall-removal-framing.jpg', alt: 'Opened wall with new framing between kitchen and dining room', portrait: true },
    ],
    featuredProjectId: 'mississauga-wall-removal',
    related: ['kitchen-remodeling', 'home-renovation', 'flooring-installation', 'painting'],
  },
  {
    slug: 'flooring-installation',
    name: 'Flooring Installation',
    icon: 'flooring',
    summary: 'Hardwood, engineered wood, vinyl plank, laminate and tile — with proper subfloor prep, stairs and trim.',
    seo: {
      title: 'Flooring Installation in Kitchener-Waterloo, Bradford & GTA',
      description:
        'Flooring installation in Kitchener-Waterloo, Bradford, Toronto and the GTA: hardwood, engineered, vinyl plank, laminate and tile. Subfloor prep, stairs and trim. Free estimates.',
    },
    h1: 'Flooring Installation',
    intro: [
      'New flooring changes the feel of a whole floor. We install hardwood, engineered wood, luxury vinyl plank, laminate and tile in kitchens, living areas, bedrooms, bathrooms and basements.',
      'Most flooring problems start with the subfloor, so we check and level it before installation, and finish with new baseboards and transitions.',
    ],
    included: [
      'Removal and disposal of old flooring',
      'Subfloor repairs and levelling',
      'Hardwood and engineered hardwood',
      'Luxury vinyl plank (LVP) and laminate',
      'Porcelain and ceramic tile',
      'Stair treads and nosings',
      'Baseboards, quarter-round and transitions',
    ],
    sections: [
      {
        heading: 'The right floor for each room',
        paragraphs: [
          'Waterproof vinyl plank or tile is usually best for basements, bathrooms and entryways. Hardwood or engineered wood suits main living areas and bedrooms. We walk you through the options before you order materials.',
        ],
      },
      {
        heading: 'Stairs that match your new floor',
        paragraphs: [
          'Old carpeted or worn hardwood stairs can be refaced with vinyl or hardwood treads, matching nosings and painted risers, so the staircase flows with the new floor. We can also replace the handrail, newel posts and spindles at the same time.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the best flooring for a basement?', a: 'Because basements can see moisture, waterproof luxury vinyl plank or tile are usually the safest choices. Engineered wood can work with the right underlayment and moisture control.' },
      { q: 'Can you put vinyl flooring on stairs?', a: 'Yes. We reface stairs with vinyl stair treads and matching nosings, and paint or cap the risers, so the stairs match your new vinyl plank floor.' },
      { q: 'Can you install new flooring over my existing floor?', a: 'Sometimes. It depends on the condition and height of the existing floor and the new material. We assess it on site and recommend removal where it would cause problems.' },
    ],
    photos: [
      { src: '/images/flooring/mississauga-vinyl-plank-flooring-open-concept.jpg', alt: 'Vinyl plank flooring installed in a Mississauga living room', portrait: true },
      { src: '/images/flooring/mississauga-vinyl-plank-flooring-front-entry.jpg', alt: 'Vinyl plank flooring at the front entry with staircase', portrait: true },
      { src: '/images/flooring/mississauga-staircase-after-vinyl-treads.jpg', alt: 'Staircase refaced with vinyl stair treads and white risers', portrait: true },
      { src: '/images/flooring/mississauga-staircase-vinyl-treads-new-railing.jpg', alt: 'Stairs with vinyl treads and a new wood handrail', portrait: true },
      { src: '/images/basements/basement-bedroom-laminate-flooring.jpg', alt: 'Laminate flooring in a finished basement bedroom' },
      { src: '/images/basements/finished-basement-marble-tile-floor.jpg', alt: 'Large-format porcelain floor tile in a basement', portrait: true },
    ],
    featuredProjectId: 'mississauga-home-renovation',
    related: ['basement-finishing', 'kitchen-remodeling', 'painting', 'home-renovation'],
  },
  {
    slug: 'painting',
    name: 'Interior & Exterior Painting',
    icon: 'paint',
    summary: 'Painting with proper prep — drywall repair, ceilings, trim, doors, feature walls and exteriors.',
    seo: {
      title: 'Interior & Exterior Painting in Kitchener-Waterloo, Bradford & GTA',
      description:
        'House painting in Kitchener-Waterloo, Bradford, Toronto and the GTA. Drywall repair, ceilings, trim, doors, feature walls and low-VOC paints. Free estimates.',
    },
    h1: 'Interior & Exterior Painting',
    intro: [
      'A professional paint job is mostly preparation. We protect your floors and furniture, repair drywall and patch holes, sand and prime where needed, then apply even coats with clean lines.',
      'We paint single rooms, whole homes, ceilings, trim, doors and exteriors, and add feature walls and panel moulding — or finish a larger renovation.',
    ],
    included: [
      'Furniture and floor protection',
      'Drywall repair, patching and sanding',
      'Walls, ceilings, trim, doors and baseboards',
      'Feature walls and panel moulding',
      'Low-VOC and zero-VOC paints',
      'Exterior siding, trim and doors',
      'Clean-up every day',
    ],
    sections: [
      {
        heading: 'Preparation makes the difference',
        paragraphs: ['Paint only looks as good as the surface underneath it. We fill, sand and prime before painting so patches, nail pops and old repairs do not show through.'],
      },
    ],
    faqs: [
      { q: 'Do you move furniture before painting?', a: 'Yes. We move and cover furniture and protect floors before we start, and put everything back when we are done.' },
      { q: 'Do you use low-VOC paint?', a: 'Yes. Low-VOC and zero-VOC paints are available for every interior project and are a good choice for bedrooms, nurseries and occupied homes.' },
    ],
    photos: [
      { src: '/images/flooring/mississauga-vinyl-plank-flooring-living-room.jpg', alt: 'Freshly painted living room in Mississauga with brick fireplace and pot lights', portrait: true },
      { src: '/images/painting/mississauga-drywall-repair-paint-prep.jpg', alt: 'Drywall patching and sanding before painting', portrait: true },
      { src: '/images/interiors/mississauga-slat-accent-wall-floating-shelf.jpg', alt: 'Wood slat accent wall with a floating shelf', portrait: true },
      { src: '/images/interiors/feature-wall-panel-moulding.jpg', alt: 'Feature wall with panel moulding before paint', portrait: true },
    ],
    featuredProjectId: 'mississauga-dining-room-paint',
    related: ['home-renovation', 'flooring-installation', 'basement-finishing', 'media-wall-installation'],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServices(slugs: ServiceSlug[]) {
  return slugs.map((s) => getService(s)).filter((s): s is Service => Boolean(s));
}

export const serviceHref = (slug: ServiceSlug) => `/services/${slug}`;
