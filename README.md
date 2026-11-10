# Allyson Layog portfolio

A portfolio built as a table of prints: visitors can pick up and move the work around.
It is a static site made with React, Vite, Tailwind CSS and Motion, with no backend or database.

## Run it

    npm install
    npm run dev

## Edit content

- Projects: `src/data/projects.js`
- Bio, email, links and resume: `src/data/site.js`
- Images: `public/images/<project>/`
- Image rows on a project page: the `rows` list on each project

After adding or replacing images, update their sizes with `npm run sizes`.

## Before publishing

- Replace the placeholder images with high-resolution originals.
- Fill in client, role and result for each project, and have Allyson approve every summary.
- Confirm the email address, video links and permission to show client work.
- Add a one-page resume file to `public/` and set `resumeUrl`.

Hosting on Netlify needs no setup beyond the build command `npm run build` and the publish folder `dist`.
