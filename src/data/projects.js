// Every project on the site lives in this file.
//
// To add images: put the original in originals/portfolio-pics/, add a line to
// scripts/assets.txt, then run npm run images. That makes the web-sized copies
// in public/images/work/.
//
// featured: true makes the project a big tile on the home grid.
// The summaries are drafts in my voice. Change anything that isn't right.
//
// Each image lists the categories it belongs to, following the folders I sorted
// my work into. A project's categories come from its images, and choosing a
// category on the home page shows exactly the images tagged with it.

export const categories = [
  'Concept Art',
  'Digital Art',
  'Vector Illustration',
  'Branding',
  'Packaging Design',
  'Campaign Ads',
  'Social Media',
  'Website Design',
  'Booth Design',
  'Catalogues',
  'Merchandise',
  'Photography',
  'Video and GIFs',
]

// An image made by npm run images: a large copy plus a small one for grids.
const work = (path, alt, types) => ({
  src: `/images/work/${path}.webp`,
  small: `/images/work/${path}-small.webp`,
  alt,
  categories: types,
})

// A still from a video, linking out to where the video is posted.
const video = (path, alt, link) => ({ ...work(`video/${path}`, alt, ['Video and GIFs']), link })

// A single artwork shown on its own page.
const piece = (slug, title, path, alt, types) => ({
  slug,
  title,
  cover: path,
  images: [work(path, alt, types)],
})

export const projects = [
  {
    slug: 'bayani',
    title: 'Bayani',
    featured: true,
    summary:
      'Branding and an ad campaign for Bayani, a beauty brand. I illustrated the muses in woven headdresses and flowers, designed the eyeshadow palettes and business cards, and laid out the website.',
    cover: 'bayani/portrait-headdress',
    images: [
      work('bayani/portrait-headdress', 'Illustrated woman in a woven red headdress on an orange background', ['Campaign Ads', 'Vector Illustration']),
      work('bayani/website-home', 'Bayani website home page with eyeshadow palettes', ['Campaign Ads', 'Website Design']),
      work('bayani/portrait-hibiscus', 'Illustrated woman with a red hibiscus in her hair, holding a makeup sponge', ['Campaign Ads', 'Vector Illustration']),
      work('bayani/portrait-flower-crown', 'Illustrated woman wearing a crown of pink and white flowers', ['Campaign Ads', 'Vector Illustration']),
      work('bayani/palettes-red', 'Bayani eyeshadow palettes and brushes on a deep red background', ['Campaign Ads', 'Packaging Design']),
      work('bayani/palettes-orange', 'Bayani palettes on a red and orange background', ['Campaign Ads', 'Packaging Design']),
      work('bayani/portrait-makeup', 'Illustrated woman in a woven headdress applying blush, framed by white lilies', ['Vector Illustration']),
      work('bayani/river', 'Illustrated woman with long green hair that turns into a river', ['Campaign Ads']),
      work('bayani/website-sale', 'Bayani website page with a 10% off offer', ['Campaign Ads', 'Website Design']),
      work('bayani/business-cards', 'Bayani business cards', ['Campaign Ads']),
    ],
  },
  {
    slug: 'mistborn',
    title: 'Mistborn concept art',
    featured: true,
    summary:
      "Concept art for Brandon Sanderson's Mistborn: character sheets with turnarounds and colour palettes, a full cast line-up, props and weapons, and places like Kredik Shaw, the Pits of Hathsin and the Lord Ruler's throne room.",
    cover: 'mistborn/kredik-shaw',
    images: [
      work('mistborn/characters', 'Line-up of the full cast of characters', ['Concept Art']),
      work('mistborn/kredik-shaw', 'Dark spired palace of Kredik Shaw against an orange sky', ['Concept Art']),
      work('mistborn/kelsier', 'Character sheet for Kelsier, with turnaround, close-ups and colour palette', ['Concept Art']),
      work('mistborn/lord-ruler', 'Character sheet for the Lord Ruler, with turnaround, close-ups and colour palette', ['Concept Art']),
      work('mistborn/throne-room', "The Lord Ruler's throne room, lit in purple", ['Concept Art']),
      work('mistborn/pits-of-hathsin', 'A cavern in the Pits of Hathsin with light falling from above', ['Concept Art']),
      work('mistborn/ballroom', 'A golden ballroom with a chandelier', ['Concept Art']),
      work('mistborn/props', 'Props and weapons: a book, daggers, bracers, a necklace and vials', ['Concept Art']),
    ],
  },
  {
    slug: 'little-rotti',
    title: 'Little Rotti',
    featured: true,
    summary: 'Logo and colour variations for Little Rotti, an Indian food brand, plus social posts and food photography.',
    cover: 'little-rotti/authentic-taste',
    images: [
      work('little-rotti/authentic-taste', 'Little Rotti poster, When heritage meets authentic taste, over a spread of dishes', ['Social Media']),
      work('little-rotti/logos', 'Little Rotti logo in six colour variations', ['Branding']),
      work('little-rotti/food', 'A plate of spiced meat with tomatoes on a wooden table', ['Photography']),
    ],
  },
  {
    slug: 'event-booths',
    title: 'Grand Baby Fair and event booths',
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
      work('events/grand-baby-fair', 'Circus-themed Grand Baby Fair display with a ringmaster mascot', ['Booth Design']),
      work('events/baby-fair-entrance', 'Baby fair entrance with a big ferris wheel display', ['Booth Design']),
      work('events/information-counter', 'Staff at a red and white striped information counter', ['Booth Design']),
      work('events/package-counter', 'Package counter with deposit and claim signs', ['Booth Design']),
      work('events/pup-up-store', 'Plan for the Pup-Up Store booth with measurements', ['Booth Design']),
    ],
  },
  piece('golden-city', 'Golden City', 'illustration/golden-city', 'A golden city at sunset with a figure in white in the foreground', ['Digital Art']),
  piece('self-reflection', 'Self Reflection', 'digital-art/self-reflection', 'A woman with long dark hair looking into a glowing swirl of light under the stars', ['Digital Art']),
  piece('zuri-in-wonderland', 'Zuri in Wonderland', 'digital-art/zuri-in-wonderland', 'A blue-haired kid among eyeball flowers, mushrooms and goldfish in bright colours', ['Digital Art']),
  piece('travel-trip', 'Travel Trip', 'digital-art/travel-trip', 'Friends in a pink convertible heading to the 5th Dimension, with aliens and planets around them', ['Digital Art']),
  piece('hero', 'Hero', 'digital-art/hero', 'A figure in green reaching through flames as dark hands full of eyes close in', ['Digital Art']),
  piece('universe', 'Universe', 'digital-art/universe', 'A figure floating asleep in a purple and blue galaxy swirl', ['Digital Art']),
  piece('fire', 'Fire', 'digital-art/fire', 'A white-haired man in a dark hood surrounded by flames', ['Digital Art']),
  piece('prisoner', 'Prisoner', 'digital-art/prisoner', 'A fox-eared woman in a white gown beside a tall gothic window', ['Digital Art']),
  piece('seox', 'Seox', 'digital-art/seox', 'An armoured fox-eared warrior with glowing eyes and blades', ['Digital Art']),
  piece('land-of-sin', 'Land of Sin', 'digital-art/land-of-sin', 'Two figures in ornate clothes by a window, one seated in a red chair', ['Digital Art']),
  piece('strange-boy', 'Strange Boy', 'digital-art/strange-boy', 'A grinning ram-horned boy in a small top hat among golden roses', ['Digital Art']),
  {
    slug: 'packaging',
    title: 'Packaging',
    summary:
      'Pouches, labels and boxes, from dielines and mechanical drawings to printed sheets coming off the cutter and the finished pieces.',
    cover: 'packaging/yema-balls',
    images: [
      work('packaging/yema-balls', 'Two Yema Balls pouches', ['Packaging Design']),
      work('packaging/jacobina-dieline', 'Dieline for a Jacobina biscuit box', ['Packaging Design']),
      work('packaging/silka-dieline', 'Dieline for a green Silka soap box', ['Packaging Design']),
      work('packaging/printing-boxes', 'Printed green box sheets stacked at the press', ['Packaging Design']),
      work('packaging/printing-crunch', 'Printed Crunch in No Time sheets on the cutting table', ['Packaging Design']),
      work('packaging/red-box', 'Flat printed red box with a white pattern', ['Packaging Design']),
      work('packaging/kraft-box', 'Folded kraft paper box sample', ['Packaging Design']),
      work('packaging/mechanical-drawing', 'Mechanical drawing for a box', ['Packaging Design']),
      work('packaging/candy-label', "M&M's label with a Buy 2, save as much as 15 pesos offer", ['Packaging Design']),
    ],
  },
  {
    slug: 'petspeak',
    title: 'PetSpeak',
    summary: "The logo and packaging for PetSpeak's probiotic paste for dogs and cats.",
    cover: 'petspeak/probiotics',
    images: [
      work('petspeak/probiotics', 'PetSpeak Probiotics Multiboost Paste tube and box', ['Packaging Design']),
      work('petspeak/logo', 'PetSpeak logo with a red paw heart', ['Branding']),
    ],
  },
  {
    slug: 'shelf-design',
    title: 'Shelf design',
    summary: 'In-store displays: a gondola, counter display, hanging sign and shelf banner for Quaker, and a counter display box for PetSpeak.',
    cover: 'packaging/quaker-displays',
    images: [
      work('packaging/quaker-displays', 'Quaker displays: a gondola, a counter display, a hanging sign and a shelf banner', ['Booth Design']),
      work('petspeak/display-box', 'Dieline for the PetSpeak counter display box', ['Packaging Design']),
    ],
  },
  {
    slug: 'logos',
    title: 'Logos',
    summary:
      'Logos and colour variations for Offscript, Sightlines Film Lab and Showcase, WonderQ, Insty Prints, Team Champion and the AI and Technology in Aged Care Forum.',
    cover: 'logos/offscript',
    images: [
      work('logos/offscript', 'Offscript logo in six colour variations', ['Branding']),
      work('logos/sightlines', 'Sightlines Film Lab and Showcase logo in three colour variations', ['Branding']),
      work('logos/team-champion', 'Team Champion logo in red', ['Branding']),
      work('logos/wonderq', 'WonderQ logo in dark grey, with a skewer of red and orange shapes inside the Q', ['Branding']),
      work('logos/insty-prints', 'Insty Prints logo in black, with overlapping cyan, magenta, yellow and black dots', ['Branding']),
      work('logos/aged-care-forum', 'AI and Technology in Aged Care Forum logo', ['Branding']),
    ],
  },
  piece('flowers', 'Tropical flowers', 'illustration/flowers', 'Illustrated white, red and pink tropical flowers on black', ['Vector Illustration']),
  {
    slug: 'cafes',
    title: 'Cafes and coffee',
    summary: "A Women's Month post for a cafe, and a GrabFood launch post for Big's Coffee.",
    cover: 'cafes/bigs-coffee',
    images: [
      work('cafes/womens-month', "Happy Women's Month post with women's faces inside a coffee cup", ['Social Media']),
      work('cafes/bigs-coffee', "Big's Coffee is now on GrabFood post with iced coffee and pizza", ['Social Media']),
    ],
  },
  {
    slug: 'surplus',
    title: 'Surplus catalogs',
    summary: "Catalog pages for Surplus: gifts and outfits for Mother's Day, outdoor gear and sleep essentials.",
    cover: 'surplus/gifts-for-moms',
    images: [
      work('surplus/gifts-for-moms', 'Gifts for Moms catalog page with fitness products and prices', ['Catalogues']),
      work('surplus/celebrate-moms', 'Celebrate Moms catalog page with a model in a co-ord set', ['Catalogues']),
      work('surplus/sleeping-right', 'Sleeping right is sleeping tight catalog page with memory foam pillows', ['Catalogues']),
      work('surplus/outdoor-essentials', 'Outdoor Essentials catalog page with a fan light and chillbox', ['Catalogues']),
    ],
  },
  {
    slug: 'sky-fiber',
    title: 'Sky Fiber',
    summary: "Ads for Sky Fiber's internet and cable bundles.",
    cover: 'sky-fiber/unli-fiber',
    images: [
      work('sky-fiber/unli-fiber', 'Sky Fiber ad for a 10Mbps plan with a man using a laptop', ['Social Media']),
      work('sky-fiber/build-your-own', 'Build Your Own bundle ad with plan prices', ['Social Media']),
      work('sky-fiber/two-versions', 'Two versions of the Build Your Own ad side by side', ['Social Media']),
    ],
  },
  {
    slug: 'janus-steel',
    title: 'Janus Steel',
    summary: 'A brochure and a door catalog for Janus Steel, and its booth at the SMX Convention Center.',
    cover: 'janus-steel/happening-now',
    images: [
      work('janus-steel/happening-now', 'Happening Now post showing the Janus Steel booth at SMX Convention Center Manila', ['Booth Design']),
      work('janus-steel/brochure', 'Janus Steel brochure with contact details and client logos', ['Catalogues']),
      work('janus-steel/doors-catalog', 'Catalog page of flush, fire exit and louvered doors', ['Catalogues']),
    ],
  },
  {
    slug: 'youthcan',
    title: '#YOUthCan',
    summary: 'A mural design and billboard video ads for the #YOUthCan event in Davao City, August 2019.',
    cover: 'youthcan/the-youth',
    images: [
      work('youthcan/banner', '#YOUthCan mural design, Unleashing the Power of the Youth', ['Campaign Ads']),
      work('youthcan/the-youth', 'Billboard video ad on a digital standee in a mall, showing The Youth', ['Campaign Ads']),
      work('youthcan/join-us', 'Billboard video ad on a digital standee reading Join us', ['Campaign Ads']),
      work('youthcan/billboards', 'Billboard video ads on a standee and a building, reading Make up 25% of the population', ['Campaign Ads']),
      work('youthcan/long-banner', 'The full #YOUthCan mural layout', ['Campaign Ads']),
    ],
  },
  {
    slug: 'furniture-catalogs',
    title: 'Furniture catalogs',
    summary: 'Catalog pages for furniture collections: Sapphire banquet chairs, the Brazen, Amity and Candor ranges, and the Gallant mobile bar.',
    cover: 'sapphire/collection',
    images: [
      work('sapphire/collection', 'Sapphire catalog page with six banquet chairs', ['Catalogues']),
      work('sapphire/banquet-chair', 'Sapphire banquet chair page with a labelled drawing', ['Catalogues']),
      work('sapphire/collections', 'Catalog pages for the Brazen, Amity and Candor collections', ['Catalogues']),
      work('events/gallant-mobile-bar', 'Gallant mobile bar in black with red shelving', ['Catalogues']),
    ],
  },
  {
    slug: 'toy-kingdom',
    title: 'Toy Kingdom',
    summary: "Catalog pages for Toy Kingdom's princess dolls and its Rainbows and Unicorns collection.",
    cover: 'toy-kingdom/rainbows-and-unicorns',
    images: [
      work('toy-kingdom/rainbows-and-unicorns', 'Rainbows and Unicorns catalog page', ['Catalogues']),
      work('toy-kingdom/princess-dolls', 'Princess dolls catalog page with prices', ['Catalogues']),
    ],
  },
  {
    slug: 'shopwise',
    title: 'Shopwise',
    summary: 'Holiday store hours and a holiday basket post for Shopwise.',
    cover: 'shopwise/holiday-basket',
    images: [
      work('shopwise/holiday-basket', 'Shopwise Celebrations 2021 Holiday Basket post', ['Social Media']),
      work('shopwise/holiday-hours', 'Shopwise holiday store hours for each branch', ['Social Media']),
    ],
  },
  {
    slug: 'pet-food',
    title: 'Pet food',
    summary: 'Product photography for Pate cat food and Gaucho freeze-dried dog treats.',
    cover: 'pet-food/pate',
    images: [
      work('pet-food/pate', 'Hands holding Pate cat food pouches above a stack of boxes', ['Photography']),
      work('pet-food/gaucho', 'A white dog next to Gaucho freeze-dried treats', ['Photography']),
    ],
  },
  {
    slug: 'merchandise',
    title: 'Merchandise',
    summary: 'Anniversary mugs, doodle mugs and a Christmas tote bag.',
    cover: 'merchandise/doodle-mugs',
    images: [
      work('merchandise/doodle-mugs', 'White mugs covered in small black doodles', ['Merchandise']),
      work('merchandise/anniversary-mugs', 'Mugs printed with a 25 years logo', ['Merchandise']),
      work('merchandise/christmas-tote', 'Merry Christmas tote bags', ['Merchandise']),
    ],
  },
  {
    slug: 'photography',
    title: 'Photography',
    summary: 'City lights at night, a resort pool, a sunset at sea, and product shots of coffee cups.',
    cover: 'photography/city-night',
    images: [
      work('photography/city-night', 'City towers lit up at night', ['Photography']),
      work('photography/pool', 'Infinity pool and palm trees by the sea', ['Photography']),
      work('photography/sea-sunset', 'Pink clouds over a calm sea at sunset', ['Photography']),
      work('cafes/cups', "Product photo of coffee cups for Sikhay, Cafe au Lait and Gaia's Cafe", ['Photography']),
    ],
  },
  {
    slug: 'video-and-gifs',
    title: 'Video and GIFs',
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

// A project's categories, in the order of the list above, come from its images.
for (const project of projects) {
  project.categories = categories.filter((c) => project.images.some((image) => image.categories.includes(c)))
}

// Every image tagged with a category, with the project it belongs to and its
// position there, in the order the projects are listed.
export function imagesIn(category) {
  return projects.flatMap((project) =>
    project.images.flatMap((image, index) => (image.categories.includes(category) ? [{ ...image, project, index }] : [])),
  )
}

// The image used as a project's tile.
export function coverOf(project) {
  return project.images.find((image) => image.src.includes(`/${project.cover}.webp`)) ?? project.images[0]
}
