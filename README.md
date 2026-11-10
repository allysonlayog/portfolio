# Allyson Layog portfolio

A dark, artwork-first portfolio: the home page is a grid of every project, with filters by type,
and each project opens its own page with a large image viewer.
It is a static site made with React, Vite, Tailwind CSS and Motion, with no backend or database.

## Run it

    npm install
    npm run dev

## Edit content

- Projects: `src/data/projects.js`
- Bio, email, links and resume: `src/data/site.js`
- Images: see below

## Add or replace images

The full-size originals live in `originals/portfolio-pics/`. That folder is kept out of git
because the files are far too big for a website (over 300 MB).

1. Put the new file in `originals/portfolio-pics/`.
2. Add a line to `scripts/assets.txt` saying which project it belongs to.
3. Run `npm run images`. This makes a large and a small web copy of each one in
   `public/images/work/` and records their sizes. Requires ImageMagick.
4. Add the image to its project in `src/data/projects.js`.

## Before publishing

- Have Allyson approve every project summary in `src/data/projects.js` (they are drafts).
- Confirm the email address, video links and permission to show client work.
- The video stills were captured from the posted videos. The printed shorts video is left out because its link pointed to the Loving Summertime video; add it back with the right link.
- Add a one-page resume file to `public/` and set `resumeUrl`.

## Link previews

When the link is shared, Facebook, LinkedIn and Messenger show `public/og-image.jpg`.

- Set `SITE_URL` to the site's full address (for example `https://allysonlayog.com`), either in a `.env.local` file or in the hosting settings. Without it, previews show no image.
- To update the image after changing the work, run `npm run dev`, open `http://localhost:5173/scripts/share-card.html` in a 1200 x 630 window, and save a screenshot over `public/og-image.jpg`.

Hosting on Netlify needs no setup beyond the build command `npm run build` and the publish folder `dist`.
