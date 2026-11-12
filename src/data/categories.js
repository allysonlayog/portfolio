// The category pages. The front page shows one tile for each, in the order of
// the categories list in projects.js, and each page shows every image tagged
// with that category.
//
// cover: the image on the category's tile (its path under public/images/work).
// featured: true makes the tile big on the front page.
// The summaries are drafts in my voice. Change anything that isn't right.

import { categories, imagesIn } from './projects.js'

const details = {
  'Concept Art': {
    cover: 'mistborn/kredik-shaw',
    featured: true,
    summary:
      "Concept art for Brandon Sanderson's Mistborn: character sheets with turnarounds and colour palettes, the full cast, props and weapons, and the places where the story happens.",
  },
  'Digital Art': {
    cover: 'digital-art/zuri-in-wonderland',
    featured: true,
    summary: 'My personal digital paintings: characters, strange creatures and dreamlike worlds, usually with a lot of colour.',
  },
  'Vector Illustration': {
    cover: 'bayani/portrait-headdress',
    featured: true,
    summary: 'Vector illustrations, including the Bayani muses in woven headdresses and flowers, and a set of tropical flowers.',
  },
  Branding: {
    cover: 'little-rotti/logos',
    summary: 'Logos and colour variations for brands, events and businesses, from Little Rotti and PetSpeak to Offscript and Team Champion.',
  },
  'Packaging Design': {
    cover: 'packaging/yema-balls',
    featured: true,
    summary: 'Pouches, boxes and labels, from dielines and mechanical drawings to printed sheets at the press and the finished product.',
  },
  'Campaign Ads': {
    cover: 'youthcan/billboards',
    summary: 'Ad campaigns across print, web and billboards: the Bayani beauty launch, and the #YOUthCan mural and billboard video ads.',
  },
  'Social Media': {
    cover: 'little-rotti/authentic-taste',
    summary: 'Posts and ads for cafes, food brands, retailers and an internet provider.',
  },
  'Website Design': {
    cover: 'bayani/website-home',
    summary: 'Website pages for Bayani, from the home page to a sale offer.',
  },
  'Booth Design': {
    cover: 'events/grand-baby-fair',
    summary:
      'Event booths and in-store displays: a circus-themed Grand Baby Fair, the Janus Steel booth at SMX, a pop-up store plan and Quaker shelf displays.',
  },
  Catalogues: {
    cover: 'toy-kingdom/rainbows-and-unicorns',
    summary: 'Catalog pages and brochures for furniture, toys, home and outdoor goods, and steel doors.',
  },
  Merchandise: {
    cover: 'merchandise/doodle-mugs',
    summary: 'Mugs and tote bags for anniversaries, holidays and everyday use.',
  },
  Photography: {
    cover: 'photography/city-night',
    summary: 'Product, food and travel photos: pet food, coffee cups, city lights and the sea.',
  },
  'Video and GIFs': {
    cover: 'video/toy-sale',
    summary: 'Animated explainers, seasonal greetings and sale videos for social media. Each still links to the posted video.',
  },
}

const slugOf = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-')

// The address of a category's page, e.g. /category/packaging-design
export const categoryPath = (name) => `/category/${slugOf(name)}`

export const categoryPages = categories.map((name) => {
  const images = imagesIn(name)
  const { cover, ...rest } = details[name]
  return {
    name,
    slug: slugOf(name),
    ...rest,
    images,
    cover: images.find((image) => image.src.includes(`/${cover}.webp`)) ?? images[0],
  }
})
