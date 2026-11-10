// Every project on the site lives in this file.
//
// To add images: put the original in originals/portfolio-pics/, add a line to
// scripts/assets.txt, then run npm run images. That makes the web-sized copies
// in public/images/work/.
//
// featured: true makes the project a big tile on the home grid.
// The summaries are drafts in my voice. Change anything that isn't right.
// Projects follow the categories in my PDF portfolio.

export const categories = ['Illustration', 'Branding', 'Packaging', 'Social media', 'Catalogues', 'Events', 'Merchandise', 'Video', 'Photography']

// An image made by npm run images: a large copy plus a small one for grids.
const work = (path, alt) => ({
  src: `/images/work/${path}.webp`,
  small: `/images/work/${path}-small.webp`,
  alt,
})

// A still from a video, linking out to where the video is posted.
const video = (path, alt, link) => ({ ...work(`video/${path}`, alt), link })

export const projects = [
  {
    slug: 'bayani',
    title: 'Bayani',
    categories: ['Branding', 'Illustration'],
    featured: true,
    summary:
      'Branding and an ad campaign for Bayani, a beauty brand. I illustrated the muses in woven headdresses and flowers, designed the eyeshadow palettes and business cards, and laid out the website.',
    cover: 'bayani/portrait-headdress',
    images: [
      work('bayani/portrait-headdress', 'Illustrated woman in a woven red headdress on an orange background'),
      work('bayani/website-home', 'Bayani website home page with eyeshadow palettes'),
      work('bayani/portrait-hibiscus', 'Illustrated woman with a red hibiscus in her hair, holding a makeup sponge'),
      work('bayani/portrait-flower-crown', 'Illustrated woman wearing a crown of pink and white flowers'),
      work('bayani/palettes-red', 'Bayani eyeshadow palettes and brushes on a deep red background'),
      work('bayani/palettes-orange', 'Bayani palettes on a red and orange background'),
      work('bayani/portrait-makeup', 'Illustrated woman in a woven headdress applying blush, framed by white lilies'),
      work('bayani/river', 'Illustrated woman with long green hair that turns into a river'),
      work('bayani/website-sale', 'Bayani website page with a 10% off offer'),
      work('bayani/business-cards', 'Bayani business cards'),
    ],
  },
  {
    slug: 'mistborn',
    title: 'Mistborn concept art',
    categories: ['Illustration'],
    featured: true,
    summary:
      "Concept art for Brandon Sanderson's Mistborn: character sheets with turnarounds and colour palettes, a full cast line-up, props and weapons, and places like Kredik Shaw, the Pits of Hathsin and the Lord Ruler's throne room.",
    cover: 'mistborn/kredik-shaw',
    images: [
      work('mistborn/characters', 'Line-up of the full cast of characters'),
      work('mistborn/kredik-shaw', 'Dark spired palace of Kredik Shaw against an orange sky'),
      work('mistborn/kelsier', 'Character sheet for Kelsier, with turnaround, close-ups and colour palette'),
      work('mistborn/lord-ruler', 'Character sheet for the Lord Ruler, with turnaround, close-ups and colour palette'),
      work('mistborn/throne-room', "The Lord Ruler's throne room, lit in purple"),
      work('mistborn/pits-of-hathsin', 'A cavern in the Pits of Hathsin with light falling from above'),
      work('mistborn/ballroom', 'A golden ballroom with a chandelier'),
      work('mistborn/props', 'Props and weapons: a book, daggers, bracers, a necklace and vials'),
    ],
  },
  {
    slug: 'little-rotti',
    title: 'Little Rotti',
    categories: ['Branding', 'Social media', 'Photography'],
    featured: true,
    summary: 'Logo and colour variations for Little Rotti, an Indian food brand, plus social posts and food photography.',
    cover: 'little-rotti/authentic-taste',
    images: [
      work('little-rotti/authentic-taste', 'Little Rotti poster, When heritage meets authentic taste, over a spread of dishes'),
      work('little-rotti/logos', 'Little Rotti logo in six colour variations'),
      work('little-rotti/food', 'A plate of spiced meat with tomatoes on a wooden table'),
    ],
  },
  {
    slug: 'event-booths',
    title: 'Grand Baby Fair and event booths',
    categories: ['Events'],
    featured: true,
    summary:
      'A circus-themed Grand Baby Fair, from the entrance and mascot display to the information and package counters, plus a pop-up store plan.',
    credits: [
      {
        label: 'SuperMommyWifey',
        href: 'https://supermommywifey.wordpress.com/2022/06/21/grand-baby-fair-by-baby-company-year-11-june-2022-supermommywifey/',
      },
      { label: 'Mrs. Riv Vlogs', href: 'https://youtu.be/gWPceb7OT5k' },
    ],
    cover: 'events/grand-baby-fair',
    images: [
      work('events/grand-baby-fair', 'Circus-themed Grand Baby Fair display with a ringmaster mascot'),
      work('events/baby-fair-entrance', 'Baby fair entrance with a big ferris wheel display'),
      work('events/information-counter', 'Staff at a red and white striped information counter'),
      work('events/package-counter', 'Package counter with deposit and claim signs'),
      work('events/pup-up-store', 'Plan for the Pup-Up Store booth with measurements'),
    ],
  },
  {
    slug: 'packaging',
    title: 'Packaging',
    categories: ['Packaging'],
    summary:
      'Pouches, labels and boxes, from dielines and mechanical drawings to printed sheets coming off the cutter and the finished pieces.',
    cover: 'packaging/yema-balls',
    images: [
      work('packaging/yema-balls', 'Two Yema Balls pouches'),
      work('packaging/jacobina-dieline', 'Dieline for a Jacobina biscuit box'),
      work('packaging/silka-dieline', 'Dieline for a green Silka soap box'),
      work('packaging/printing-boxes', 'Printed green box sheets stacked at the press'),
      work('packaging/printing-crunch', 'Printed Crunch in No Time sheets on the cutting table'),
      work('packaging/red-box', 'Flat printed red box with a white pattern'),
      work('packaging/kraft-box', 'Folded kraft paper box sample'),
      work('packaging/mechanical-drawing', 'Mechanical drawing for a box'),
      work('packaging/candy-label', "M&M's label with a Buy 2, save as much as 15 pesos offer"),
    ],
  },
  {
    slug: 'petspeak',
    title: 'PetSpeak',
    categories: ['Branding', 'Packaging'],
    summary: "The logo and packaging for PetSpeak's probiotic paste for dogs and cats.",
    cover: 'petspeak/probiotics',
    images: [
      work('petspeak/probiotics', 'PetSpeak Probiotics Multiboost Paste tube and box'),
      work('petspeak/logo', 'PetSpeak logo with a red paw heart'),
    ],
  },
  {
    slug: 'shelf-design',
    title: 'Shelf design',
    categories: ['Packaging'],
    summary: 'In-store displays: a gondola, counter display, hanging sign and shelf banner for Quaker, and a counter display box for PetSpeak.',
    cover: 'packaging/quaker-displays',
    images: [
      work('packaging/quaker-displays', 'Quaker displays: a gondola, a counter display, a hanging sign and a shelf banner'),
      work('petspeak/display-box', 'Dieline for the PetSpeak counter display box'),
    ],
  },
  {
    slug: 'logos',
    title: 'Logos',
    categories: ['Branding'],
    summary:
      'Logos and colour variations for Offscript, Sightlines Film Lab and Showcase, WonderQ, Insty Prints, Team Champion and the AI and Technology in Aged Care Forum.',
    cover: 'logos/offscript',
    images: [
      work('logos/offscript', 'Offscript logo in six colour variations'),
      work('logos/sightlines', 'Sightlines Film Lab and Showcase logo in three colour variations'),
      work('logos/team-champion', 'Team Champion logo in red'),
      work('logos/wonderq', 'WonderQ logo in white'),
      work('logos/insty-prints', 'Insty Prints logo in white'),
      work('logos/aged-care-forum', 'AI and Technology in Aged Care Forum logo'),
    ],
  },
  {
    slug: 'illustration',
    title: 'Illustration',
    categories: ['Illustration'],
    summary: 'A golden city environment at sunset and a set of tropical flowers.',
    cover: 'illustration/flowers',
    images: [
      work('illustration/golden-city', 'A golden city at sunset with a figure in white in the foreground'),
      work('illustration/flowers', 'Illustrated white, red and pink tropical flowers on black'),
    ],
  },
  {
    slug: 'cafes',
    title: 'Cafes and coffee',
    categories: ['Social media'],
    summary: "A Women's Month post for a cafe, and a GrabFood launch post for Big's Coffee.",
    cover: 'cafes/bigs-coffee',
    images: [
      work('cafes/womens-month', "Happy Women's Month post with women's faces inside a coffee cup"),
      work('cafes/bigs-coffee', "Big's Coffee is now on GrabFood post with iced coffee and pizza"),
    ],
  },
  {
    slug: 'surplus',
    title: 'Surplus catalogs',
    categories: ['Catalogues'],
    summary: "Catalog pages for Surplus: gifts and outfits for Mother's Day, outdoor gear and sleep essentials.",
    cover: 'surplus/gifts-for-moms',
    images: [
      work('surplus/gifts-for-moms', 'Gifts for Moms catalog page with fitness products and prices'),
      work('surplus/celebrate-moms', 'Celebrate Moms catalog page with a model in a co-ord set'),
      work('surplus/sleeping-right', 'Sleeping right is sleeping tight catalog page with memory foam pillows'),
      work('surplus/outdoor-essentials', 'Outdoor Essentials catalog page with a fan light and chillbox'),
    ],
  },
  {
    slug: 'sky-fiber',
    title: 'Sky Fiber',
    categories: ['Social media'],
    summary: "Ads for Sky Fiber's internet and cable bundles.",
    cover: 'sky-fiber/unli-fiber',
    images: [
      work('sky-fiber/unli-fiber', 'Sky Fiber ad for a 10Mbps plan with a man using a laptop'),
      work('sky-fiber/build-your-own', 'Build Your Own bundle ad with plan prices'),
      work('sky-fiber/two-versions', 'Two versions of the Build Your Own ad side by side'),
    ],
  },
  {
    slug: 'janus-steel',
    title: 'Janus Steel',
    categories: ['Catalogues', 'Events'],
    summary: 'A brochure and a door catalog for Janus Steel, and its booth at the SMX Convention Center.',
    cover: 'janus-steel/happening-now',
    images: [
      work('janus-steel/happening-now', 'Happening Now post showing the Janus Steel booth at SMX Convention Center Manila'),
      work('janus-steel/brochure', 'Janus Steel brochure with contact details and client logos'),
      work('janus-steel/doors-catalog', 'Catalog page of flush, fire exit and louvered doors'),
    ],
  },
  {
    slug: 'youthcan',
    title: '#YOUthCan',
    categories: ['Events', 'Video'],
    summary: 'A mural design and billboard video ads for the #YOUthCan event in Davao City, August 2019.',
    cover: 'youthcan/the-youth',
    images: [
      work('youthcan/banner', '#YOUthCan mural design, Unleashing the Power of the Youth'),
      work('youthcan/the-youth', 'Billboard video ad on a digital standee in a mall, showing The Youth'),
      work('youthcan/join-us', 'Billboard video ad on a digital standee reading Join us'),
      work('youthcan/billboards', 'Billboard video ads on a standee and a building, reading Make up 25% of the population'),
      work('youthcan/long-banner', 'The full #YOUthCan mural layout'),
    ],
  },
  {
    slug: 'furniture-catalogs',
    title: 'Furniture catalogs',
    categories: ['Catalogues'],
    summary: 'Catalog pages for furniture collections: Sapphire banquet chairs, the Brazen, Amity and Candor ranges, and the Gallant mobile bar.',
    cover: 'sapphire/collection',
    images: [
      work('sapphire/collection', 'Sapphire catalog page with six banquet chairs'),
      work('sapphire/banquet-chair', 'Sapphire banquet chair page with a labelled drawing'),
      work('sapphire/collections', 'Catalog pages for the Brazen, Amity and Candor collections'),
      work('events/gallant-mobile-bar', 'Gallant mobile bar in black with red shelving'),
    ],
  },
  {
    slug: 'toy-kingdom',
    title: 'Toy Kingdom',
    categories: ['Catalogues'],
    summary: "Catalog pages for Toy Kingdom's princess dolls and its Rainbows and Unicorns collection.",
    cover: 'toy-kingdom/rainbows-and-unicorns',
    images: [
      work('toy-kingdom/rainbows-and-unicorns', 'Rainbows and Unicorns catalog page'),
      work('toy-kingdom/princess-dolls', 'Princess dolls catalog page with prices'),
    ],
  },
  {
    slug: 'shopwise',
    title: 'Shopwise',
    categories: ['Social media'],
    summary: 'Holiday store hours and a holiday basket post for Shopwise.',
    cover: 'shopwise/holiday-basket',
    images: [
      work('shopwise/holiday-basket', 'Shopwise Celebrations 2021 Holiday Basket post'),
      work('shopwise/holiday-hours', 'Shopwise holiday store hours for each branch'),
    ],
  },
  {
    slug: 'pet-food',
    title: 'Pet food',
    categories: ['Photography'],
    summary: 'Product photography for Pate cat food and Gaucho freeze-dried dog treats.',
    cover: 'pet-food/pate',
    images: [
      work('pet-food/pate', 'Hands holding Pate cat food pouches above a stack of boxes'),
      work('pet-food/gaucho', 'A white dog next to Gaucho freeze-dried treats'),
    ],
  },
  {
    slug: 'merchandise',
    title: 'Merchandise',
    categories: ['Merchandise'],
    summary: 'Anniversary mugs, doodle mugs and a Christmas tote bag.',
    cover: 'merchandise/doodle-mugs',
    images: [
      work('merchandise/doodle-mugs', 'White mugs covered in small black doodles'),
      work('merchandise/anniversary-mugs', 'Mugs printed with a 25 years logo'),
      work('merchandise/christmas-tote', 'Merry Christmas tote bags'),
    ],
  },
  {
    slug: 'photography',
    title: 'Photography',
    categories: ['Photography'],
    summary: 'City lights at night, a resort pool, a sunset at sea, and product shots of coffee cups.',
    cover: 'photography/city-night',
    images: [
      work('photography/city-night', 'City towers lit up at night'),
      work('photography/pool', 'Infinity pool and palm trees by the sea'),
      work('photography/sea-sunset', 'Pink clouds over a calm sea at sunset'),
      work('cafes/cups', "Product photo of coffee cups for Sikhay, Cafe au Lait and Gaia's Cafe"),
    ],
  },
  {
    slug: 'video-and-gifs',
    title: 'Video and GIFs',
    categories: ['Video'],
    summary: 'Animated explainers, seasonal greetings and sale videos for social media.',
    cover: 'video/toy-sale',
    images: [
      video('ideas-positive', '2D vector animation: What happens in Ideas Positive', 'https://www.facebook.com/share/v/1CCqMh1Vy1/'),
      video('lunar-new-year', 'Happy Lunar New Year video for Surplus', 'https://www.instagram.com/p/CLLJwOnHynI/'),
      video('toy-sale', 'Toy Kingdom Christmas toy sale video', 'https://www.instagram.com/reel/CmOYWalLaZ3/'),
      video('mothers-day', "Happy Mother's Day video with an illustrated baby", 'https://www.facebook.com/reel/505705707139609'),
      video('calazin', 'Calazin video with an illustrated rabbit', 'https://www.facebook.com/reel/468503747680305'),
      video('shopwise-reel', 'Shopwise video with a notebook and coffee', 'https://www.facebook.com/share/v/1DRA1v1QUg/'),
      video('piggy-bank', 'Piggy bank mystery game video', 'https://www.facebook.com/share/v/19P4HDahE2/'),
      video('three-day-sale', 'Three day sale, 50% off video', 'https://www.instagram.com/p/CT_MLz-hCAS/'),
      video('loving-summer', 'Loving Summertime video', 'https://www.facebook.com/watch/?v=3872089966192117'),
    ],
  },
]

// The image used as a project's tile.
export function coverOf(project) {
  return project.images.find((image) => image.src.includes(`/${project.cover}.webp`)) ?? project.images[0]
}
