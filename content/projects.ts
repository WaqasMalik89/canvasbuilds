// content/projects.ts
// ---------------------------------------------------------------------------
// PROJECT PHOTOS & CASE STUDIES
// - featuredProjects: before/after case studies (slider + build steps).
// - gallery: every photo on the /projects page, grouped by category.
// Photos live in /public/images/<category>/ with descriptive file names
// (Google reads file names and alt text).
// ---------------------------------------------------------------------------

import type { FeaturedProject, ProjectCategory, ProjectPhoto } from './types';

const BATH = '/images/bathrooms';
const MEDIA = '/images/media-walls';
const KITCHEN = '/images/kitchens';
const FLOOR = '/images/flooring';
const PAINT = '/images/painting';

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'kitchener-waterloo-bathroom',
    title: 'Full Bathroom Renovation in Kitchener-Waterloo',
    area: 'Kitchener-Waterloo, Ontario',
    service: 'bathroom-renovation',
    stepsTitle: 'How we built it — behind the tile',
    summary: [
      'This dated bathroom had a curtain shower, a pedestal sink and worn floor tile. We took the room down to the studs and subfloor and rebuilt it as a modern spa-style bathroom with a glass walk-in shower, a wall-hung toilet and a floating vanity.',
      'Drag the slider to compare the room before and after, then scroll through the build to see what goes on behind the tile.',
    ],
    highlights: [
      'Gutted to the studs and subfloor',
      'Wall-hung toilet on an in-wall carrier',
      'Glass walk-in shower with built-in niches',
      'Cement board and sloped mortar shower base',
      'Liquid waterproofing membrane on all wet walls',
      'Large-format porcelain tile on walls and floor',
      'Floating vanity, LED mirror and pot lights',
    ],
    before: {
      src: `${BATH}/kitchener-waterloo-bathroom-before.jpg`,
      alt: 'Bathroom before renovation with curtain shower, pedestal sink and dark floor tile',
      portrait: true,
    },
    after: {
      src: `${BATH}/kitchener-waterloo-bathroom-after.jpg`,
      alt: 'Same bathroom after renovation with glass walk-in shower, floating vanity and wall-hung toilet',
      portrait: true,
    },
    steps: [
      {
        src: `${BATH}/kitchener-waterloo-bathroom-step-1-plumbing-rough-in.jpg`,
        alt: 'Bathroom gutted to the studs with an in-wall carrier for a wall-hung toilet and new drain lines in the subfloor',
        title: 'Demolition & plumbing rough-in',
        caption: 'Walls and floor opened up, new drain and supply lines run, and an in-wall carrier installed for the floating toilet.',
      },
      {
        src: `${BATH}/kitchener-waterloo-bathroom-step-2-structural-backing.jpg`,
        alt: 'Framing and structural backing around the in-wall toilet carrier with cement board going up',
        title: 'Framing & structural backing',
        caption: 'Solid framing and backing so the wall-hung toilet, vanity and glass shower are anchored securely.',
        portrait: true,
      },
      {
        src: `${BATH}/kitchener-waterloo-bathroom-step-3-cement-board.jpg`,
        alt: 'Shower walls in cement board with a built-in niche and a sloped mortar shower base checked with a level',
        title: 'Cement board & shower base',
        caption: 'Cement board on the shower walls, a recessed niche framed in, and a mortar base sloped to the drain.',
        portrait: true,
      },
      {
        src: `${BATH}/kitchener-waterloo-bathroom-step-4-waterproofing.jpg`,
        alt: 'Liquid waterproofing membrane on shower walls and membrane across the bathroom floor',
        title: 'Waterproofing',
        caption: 'A continuous waterproofing membrane on the shower walls and across the floor before any tile goes down.',
        portrait: true,
      },
      {
        src: `${BATH}/kitchener-waterloo-bathroom-step-5-tile.jpg`,
        alt: 'Large-format grey porcelain tile installed on bathroom walls with a tile levelling system',
        title: 'Tile installation',
        caption: 'Large-format porcelain set with a levelling system for flat, tight joints on the walls and floor.',
        portrait: true,
      },
      {
        src: `${BATH}/kitchener-waterloo-bathroom-finished.jpg`,
        alt: 'Completed bathroom with floating vanity, LED mirror, wall-hung toilet and glass walk-in shower',
        title: 'The finished bathroom',
        caption: 'Glass walk-in shower, floating vanity with LED mirror, wall-hung toilet and new pot lights.',
        portrait: true,
      },
    ],
  },
  {
    id: 'mississauga-home-renovation',
    title: 'Main Floor & Kitchen Renovation in Mississauga',
    area: 'Mississauga, Ontario',
    service: 'home-renovation',
    stepsTitle: 'The story of this kitchen — from first conversation to final reveal',
    stepsAspect: 'landscape',
    summary: [
      'The homeowner loved her neighbourhood but not her kitchen. It was dark, closed-in and cut off from the dining room by a load-bearing wall, with dated cabinets, worn tile and too little storage. She wanted a bright, open space where the family could cook, eat and spend time together.',
      'We designed the new kitchen with her in 3D, chose every finish together, then took out the wall and rebuilt the main floor around it. Drag the slider to see the difference, then follow the story step by step.',
    ],
    highlights: [
      '3D design and finish selection before work began',
      'Load-bearing wall replaced with a new beam',
      'Navy island, white shaker cabinets and quartz',
      'Floor-to-ceiling pantry storage',
      'Waterproof vinyl plank floors and refaced stairs',
      'Fresh paint and pot lights throughout',
    ],
    before: {
      src: `${KITCHEN}/mississauga-kitchen-before-2.jpg`,
      alt: 'Mississauga kitchen during renovation with old floor tile being removed and appliances covered',
      portrait: true,
    },
    after: {
      src: `${KITCHEN}/mississauga-kitchen-after-navy-island-white-cabinets.jpg`,
      alt: 'Renovated Mississauga kitchen with navy island, white shaker cabinets and vinyl plank flooring',
      portrait: true,
    },
    steps: [
      {
        src: `${KITCHEN}/mississauga-kitchen-before-1.jpg`,
        alt: 'Original Mississauga kitchen with dark wood cabinets, tile floor and the load-bearing wall beside the fridge',
        title: 'Where it started',
        caption: 'Dark cabinets, worn tile and a load-bearing wall boxing in the kitchen. We sat down with the homeowner on site to hear how she cooks, how the family uses the space and what wasn’t working.',
      },
      {
        src: `${KITCHEN}/mississauga-kitchen-3d-design-rendering.jpg`,
        alt: '3D design rendering of the new kitchen layout with pantry wall, island and range',
        title: 'Seeing it before we build it',
        caption: 'We measured the room and designed a new open layout, then presented it as a 3D rendering. She could see the island, pantry wall and appliance spots, and fine-tune them, before a single wall came down.',
      },
      {
        src: `${KITCHEN}/mississauga-kitchen-3d-rendering-colours-hardware.jpg`,
        alt: '3D rendering showing navy lower cabinets, white uppers, marble-look backsplash and brass handles',
        title: 'Choosing every finish together',
        caption: 'Navy lowers or all white? Brass or black handles? We reviewed samples and renderings together to choose cabinets, countertop, backsplash, hardware, flooring, paint colours and even the stair spindles, so there were no surprises later.',
      },
      {
        src: `${KITCHEN}/mississauga-kitchen-3d-rendering-pantry-storage.jpg`,
        alt: '3D rendering of floor-to-ceiling white pantry cabinets with brass hardware beside the patio door',
        title: 'Planning the storage',
        caption: 'A wall of floor-to-ceiling pantry cabinets beside the patio door solved the storage problem. Planning it in 3D meant it lined up perfectly with the door and window trim.',
      },
      {
        src: '/images/renovations/mississauga-wall-removal-framing.jpg',
        alt: 'Load-bearing wall removed between the kitchen and dining area, with the new beam carrying the floor joists above',
        title: 'Taking down the wall',
        caption: 'The biggest change of all. With the floor above safely supported, we removed the load-bearing wall and installed a new beam to carry the joists, opening the kitchen to the dining area for good.',
        portrait: true,
      },
      {
        src: `${FLOOR}/mississauga-old-tile-removal.jpg`,
        alt: 'Crew removing old ceramic floor tile from the main floor',
        title: 'Back to a clean slate',
        caption: 'The old ceramic tile and thinset came up across the whole main floor, leaving a clean, flat subfloor ready for one continuous new floor.',
        portrait: true,
      },
      {
        src: `${FLOOR}/mississauga-vinyl-stair-treads-installation.jpg`,
        alt: 'Vinyl stair treads and risers being installed on the staircase',
        title: 'One floor, from the kitchen to the stairs',
        caption: 'Waterproof vinyl plank now runs through the kitchen, dining and living areas, and the stairs were refaced with matching treads and nosings so everything flows.',
        services: ['home-renovation', 'flooring-installation', 'painting'],
        portrait: true,
      },
      {
        src: `${FLOOR}/mississauga-vinyl-plank-flooring-living-room.jpg`,
        alt: 'Painted living room with new vinyl plank flooring, pot lights and brick fireplace',
        title: 'Light, bright and repainted',
        caption: 'The dark walls are gone. Warm, light paint and new pot lights brighten every room, including the living room around the original fireplace.',
        services: ['home-renovation', 'flooring-installation', 'painting'],
        portrait: true,
      },
      {
        src: `${KITCHEN}/mississauga-kitchen-white-pantry-cabinets.jpg`,
        alt: 'Finished kitchen with floor-to-ceiling white pantry cabinets and stainless fridge',
        title: 'The reveal',
        caption: 'Exactly what she saw in the 3D design: a wall of white pantry storage, a navy island with quartz counters, brass hardware and stainless appliances.',
        portrait: true,
      },
      {
        src: `${KITCHEN}/mississauga-kitchen-after-navy-island-white-cabinets-side-view.jpg`,
        alt: 'Finished Mississauga kitchen from the side, showing the navy island, white shaker cabinets, quartz counters and the open dining area',
        title: 'Made for gathering',
        caption: 'Where a wall used to divide the rooms, the kitchen, island and dining area now flow together, with space to cook, eat and spend time as a family.',
        portrait: true,
      },
    ],
    video: {
      src: '/videos/mississauga-home-renovation-walkthrough.mp4',
      poster: `${FLOOR}/mississauga-home-renovation-walkthrough-poster.jpg`,
      title: 'Walk through the finished main floor',
      caption: 'Take a short tour of the finished main floor: living room, front entry, hallway and the new kitchen.',
      portrait: true,
    },
  },
  {
    id: 'mississauga-dining-room-paint',
    title: 'Dining Room Repaint in Mississauga',
    area: 'Mississauga, Ontario',
    service: 'painting',
    summary: [
      'Dark brown walls made this dining area feel small. We repaired the drywall, primed over the dark colour and repainted the walls, ceiling and trim in light, warm neutrals, then added pot lights and new flooring.',
    ],
    highlights: ['Drywall patching and sanding', 'Stain-blocking primer over dark paint', 'Walls, ceiling and trim painted', 'New pot lights and baseboards'],
    before: {
      src: `${PAINT}/mississauga-dining-room-before-dark-walls.jpg`,
      alt: 'Mississauga dining area before painting with dark brown walls and old light fixture',
      portrait: true,
    },
    after: {
      src: `${PAINT}/mississauga-dining-room-after-paint.jpg`,
      alt: 'Same dining area after repainting in light neutral colours with pot lights and vinyl plank floor',
      portrait: true,
    },
  },
  {
    id: 'mississauga-wall-removal',
    title: 'Load-Bearing Wall Removal in Mississauga',
    area: 'Mississauga, Ontario',
    service: 'load-bearing-wall-removal',
    beforeLabel: 'During',
    afterLabel: 'After',
    summary: [
      'A wall between the kitchen and the dining area made this main floor feel closed in. We supported the floor above, removed the wall and installed a new beam and posts, so the kitchen now opens onto the dining area and the patio doors.',
      'Drag the slider to compare the opened-up structure with the finished open-concept kitchen.',
    ],
    highlights: [
      'Temporary shoring while the wall came out',
      'New beam carrying the floor joists above',
      'New posts and framing at each end',
      'Drywall, paint and pot lights to finish',
      'New kitchen and vinyl plank flooring',
    ],
    before: {
      src: '/images/renovations/mississauga-wall-removal-framing.jpg',
      alt: 'Load-bearing wall removed between kitchen and dining area with floor joists and new beam exposed',
      portrait: true,
    },
    after: {
      src: `${KITCHEN}/mississauga-kitchen-after-navy-island-white-cabinets.jpg`,
      alt: 'Open-concept kitchen after load-bearing wall removal, with navy island, white cabinets and patio doors',
      portrait: true,
    },
  },
  {
    id: 'kitchener-waterloo-media-wall',
    title: 'Custom Media Wall in Kitchener-Waterloo',
    area: 'Kitchener-Waterloo, Ontario',
    service: 'media-wall-installation',
    beforeLabel: 'Framing',
    afterLabel: 'Finished',
    stepsTitle: 'How we built it — from studs to lighting',
    summary: [
      'The homeowners wanted a living-room feature wall that hides every cable and gives the TV a proper home. We designed and built a full-width media wall with a recessed TV niche, a low media shelf, display towers on both sides and LED lighting in every niche.',
      'Drag the slider to compare the framed structure with the finished wall, then follow the build step by step.',
    ],
    highlights: [
      'Custom 2x4 framing anchored to the wall',
      'Recessed TV niche with solid mounting backing',
      'Hidden power and low-voltage wiring',
      'Display towers with lit niches',
      'Drywall, corner bead and three-coat finish',
      'Primed and painted in a two-tone finish',
    ],
    before: {
      src: `${MEDIA}/kitchener-waterloo-media-wall-before-framing.jpg`,
      alt: 'Wood stud framing for a custom media wall with TV niche and side shelving towers in a Kitchener-Waterloo living room',
    },
    after: {
      src: `${MEDIA}/kitchener-waterloo-media-wall-after.jpg`,
      alt: 'Finished media wall with recessed TV niche, media shelf and LED-lit display niches on both sides',
    },
    steps: [
      {
        src: `${MEDIA}/kitchener-waterloo-media-wall-step-1-framing.jpg`,
        alt: 'Media wall framing with header, TV opening, media shelf and side towers',
        title: 'Design and framing',
        caption: 'We laid out the TV opening, shelves and towers to suit the room, then framed the whole wall square and level.',
      },
      {
        src: `${MEDIA}/kitchener-waterloo-media-wall-step-2-drywall.jpg`,
        alt: 'Drywall installed over media wall framing with openings for shelves and TV niche',
        title: 'Wiring and drywall',
        caption: 'Power and cable runs went in before boarding, with blocking behind the TV niche for a secure mount.',
      },
      {
        src: `${MEDIA}/kitchener-waterloo-media-wall-step-3-taping-mudding.jpg`,
        alt: 'Corner bead, taping and drywall compound on a custom media wall',
        title: 'Taping and mudding',
        caption: 'Corner bead on every edge and three coats of compound give the niches crisp, straight lines.',
      },
      {
        src: `${MEDIA}/kitchener-waterloo-media-wall-step-4-primer.jpg`,
        alt: 'Sanded and primed media wall with TV mounting backing installed',
        title: 'Sanding and primer',
        caption: 'Everything was sanded smooth and primed, ready for paint and the TV mount.',
      },
      {
        src: `${MEDIA}/kitchener-waterloo-media-wall-step-5-paint-led-lighting.jpg`,
        alt: 'Painted media wall with LED lights being installed in the display niches',
        title: 'Paint and niche lighting',
        caption: 'A two-tone paint finish, with LED puck lights recessed into each display niche.',
      },
      {
        src: `${MEDIA}/kitchener-waterloo-media-wall-step-6-finished-tv.jpg`,
        alt: 'Completed media wall with large wall-mounted TV, media shelf and built-in shelving',
        title: 'TV mounted, wall finished',
        caption: 'The TV sits flush in its niche with every wire hidden, and the side towers are ready for decor.',
      },
    ],
    video: {
      src: '/videos/kitchener-waterloo-media-wall-framing.mp4',
      poster: `${MEDIA}/kitchener-waterloo-media-wall-video-poster.jpg`,
      title: 'Walk through the framing',
      caption: 'A quick look at the framing before drywall — this is the structure that holds the TV and shelves.',
    },
  },
  {
    id: 'freestanding-tub-ensuite',
    title: 'Ensuite Renovation with Freestanding Tub',
    service: 'bathroom-renovation',
    summary: [
      'An ensuite finished with a corner glass shower, a freestanding soaker tub and new tile throughout.',
    ],
    highlights: ['Corner glass shower', 'Freestanding soaker tub', 'Floor and wall tile', 'New fixtures and lighting'],
    before: {
      src: `${BATH}/freestanding-tub-bathroom-before.jpg`,
      alt: 'Ensuite during renovation with freestanding tub waiting to be installed',
      portrait: true,
    },
    after: {
      src: `${BATH}/freestanding-tub-corner-shower-after.jpg`,
      alt: 'Finished ensuite with corner glass shower and freestanding soaker tub',
      portrait: true,
    },
  },
];

export function getFeaturedProject(id?: string) {
  return id ? featuredProjects.find((p) => p.id === id) : undefined;
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: 'kitchens', label: 'Kitchens' },
  { id: 'bathrooms', label: 'Bathrooms' },
  { id: 'media-walls', label: 'Media walls' },
  { id: 'flooring', label: 'Flooring & stairs' },
  { id: 'painting', label: 'Painting' },
  { id: 'basements', label: 'Basements' },
  { id: 'interiors', label: 'Interiors' },
  { id: 'outdoor', label: 'Outdoor' },
];

export const gallery: ProjectPhoto[] = [
  // Kitchens
  { category: 'kitchens', src: `${KITCHEN}/open-concept-kitchen-white-shaker-quartz-island-pendants.jpg`, alt: 'Open-concept kitchen with white shaker cabinets, quartz island and crystal pendant lights' },
  { category: 'kitchens', src: `${KITCHEN}/kitchen-remodel-before-after-white-shaker-quartz-island.jpg`, alt: 'Kitchen before and after: white shaker cabinets, marble-look quartz, stainless appliances and a quartz-topped island replace a dated kitchen', portrait: true },
  { category: 'kitchens', src: `${KITCHEN}/mississauga-kitchen-after-navy-island-white-cabinets.jpg`, alt: 'Finished Mississauga kitchen with a navy island, white shaker cabinets and vinyl plank flooring', portrait: true },
  { category: 'kitchens', src: `${KITCHEN}/mississauga-kitchen-island-stainless-appliances.jpg`, alt: 'Kitchen with navy island, quartz counters and stainless appliances in Mississauga', portrait: true },
  { category: 'kitchens', src: `${KITCHEN}/mississauga-kitchen-white-pantry-cabinets.jpg`, alt: 'Floor-to-ceiling white pantry cabinets beside a sliding patio door', portrait: true },
  { category: 'kitchens', src: '/images/kitchens/open-concept-kitchen-living-room.jpg', alt: 'Open-concept kitchen and living room with large island and pendant lights' },
  { category: 'kitchens', src: '/images/kitchens/basement-suite-kitchen-white-cabinets-island.jpg', alt: 'Basement suite kitchen with white shaker cabinets, island and stainless appliances' },
  { category: 'kitchens', src: '/images/kitchens/basement-kitchen-grey-island-marble-tile.jpg', alt: 'Kitchen with grey island, white cabinets and marble-look porcelain floor' },
  { category: 'kitchens', src: '/images/kitchens/modern-kitchenette-wine-fridge.jpg', alt: 'Modern kitchenette with wood-grain cabinets, black countertop and wine fridge' },
  { category: 'kitchens', src: '/images/kitchens/basement-suite-kitchenette-laundry.jpg', alt: 'Basement suite kitchenette with stacked laundry and marble-look tile' },
  // Bathrooms
  { category: 'bathrooms', src: '/images/bathrooms/kitchener-waterloo-bathroom-finished.jpg', alt: 'Kitchener-Waterloo bathroom renovation with floating vanity and glass walk-in shower', portrait: true },
  { category: 'bathrooms', src: '/images/bathrooms/modern-bathroom-black-hex-tile-shower.jpg', alt: 'Modern bathroom with black hex tile shower floor and black-framed glass panel', portrait: true },
  { category: 'bathrooms', src: '/images/bathrooms/freestanding-tub-corner-shower-after.jpg', alt: 'Ensuite with corner glass shower and freestanding tub', portrait: true },
  { category: 'bathrooms', src: '/images/bathrooms/glass-shower-marble-tile-bathroom.jpg', alt: 'Bathroom with sliding glass shower and marble-look porcelain floor', portrait: true },
  { category: 'bathrooms', src: '/images/bathrooms/sliding-glass-shower-door.jpg', alt: 'Walk-in shower with sliding glass door and large-format tile', portrait: true },
  { category: 'bathrooms', src: '/images/bathrooms/white-vanity-granite-countertop.jpg', alt: 'White bathroom vanity with granite countertop and framed mirror', portrait: true },
  // Media walls
  { category: 'media-walls', src: `${MEDIA}/kitchener-waterloo-media-wall-after.jpg`, alt: 'Kitchener-Waterloo living room feature wall with a recessed TV niche and lit display shelves' },
  { category: 'media-walls', src: `${MEDIA}/kitchener-waterloo-media-wall-step-6-finished-tv.jpg`, alt: 'Finished TV wall with the television mounted flush and built-in side shelving' },
  { category: 'media-walls', src: `${MEDIA}/kitchener-waterloo-media-wall-built-in-shelving-side-view.jpg`, alt: 'Angled view of built-in shelving towers on a custom TV wall' },
  // Flooring & stairs
  { category: 'flooring', src: `${FLOOR}/mississauga-vinyl-plank-flooring-open-concept.jpg`, alt: 'Vinyl plank flooring in an open-concept Mississauga living area with staircase', portrait: true },
  { category: 'flooring', src: `${FLOOR}/mississauga-vinyl-plank-flooring-front-entry.jpg`, alt: 'Front entry with vinyl plank flooring and black spindle staircase railing', portrait: true },
  { category: 'flooring', src: `${FLOOR}/mississauga-staircase-after-vinyl-treads.jpg`, alt: 'Mississauga staircase after refacing with vinyl plank treads, nosings and painted risers', portrait: true },
  { category: 'flooring', src: `${FLOOR}/mississauga-staircase-vinyl-treads-new-railing.jpg`, alt: 'Stairs with new vinyl treads and a new wood newel post and handrail', portrait: true },
  // Painting
  { category: 'painting', src: `${PAINT}/mississauga-dining-room-after-paint.jpg`, alt: 'Dining area repainted in light neutral colours', portrait: true },
  { category: 'painting', src: `${FLOOR}/mississauga-vinyl-plank-flooring-living-room.jpg`, alt: 'Freshly painted living room with brick fireplace and pot lights', portrait: true },
  // Basements
  { category: 'basements', src: '/images/basements/basement-walk-up-separate-entrance.jpg', alt: 'Basement walk-up separate entrance with railing for a secondary suite' },
  { category: 'basements', src: '/images/basements/basement-bedroom-laminate-flooring.jpg', alt: 'Finished basement bedroom with laminate flooring and closet doors' },
  { category: 'basements', src: '/images/basements/finished-basement-marble-tile-floor.jpg', alt: 'Finished basement room with marble-look porcelain floor', portrait: true },
  // Interiors
  { category: 'interiors', src: '/images/interiors/feature-wall-panel-moulding.jpg', alt: 'Feature wall with panel moulding and trim work', portrait: true },
  { category: 'interiors', src: '/images/interiors/mississauga-slat-accent-wall-floating-shelf.jpg', alt: 'Wood slat accent wall with a floating walnut shelf in a hallway', portrait: true },
  // Outdoor
  { category: 'outdoor', src: '/images/outdoor/backyard-patio-fire-table.jpg', alt: 'Backyard patio with wide steps, outdoor seating and fire table' },
  { category: 'outdoor', src: '/images/outdoor/interlock-driveway-border.jpg', alt: 'Interlock driveway with paver border and garden bed' },
  { category: 'outdoor', src: '/images/outdoor/natural-stone-front-steps.jpg', alt: 'Natural stone front steps with metal railing' },
  { category: 'outdoor', src: '/images/outdoor/front-porch-natural-stone.jpg', alt: 'Front porch with natural stone paving' },
  { category: 'outdoor', src: '/images/outdoor/backyard-patio-string-lights.jpg', alt: 'Backyard patio with string lights and raised garden beds' },
  { category: 'outdoor', src: '/images/outdoor/front-steps-landscape-lighting.jpg', alt: 'Front steps and walkway with landscape lighting at night' },
];
