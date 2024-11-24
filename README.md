This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

-------------------------------

HOW TO NAVIGATE THE SITE

HEADER:
In the header of the site, you'll find two buttons on the left side: 'All movies' and 'Genres'.
You'll also find the site heading "Movie DB" which is clickable and redirects you to the 'All movies' page.
Lastly, on the right side of the header, you'll find the 'User section' which is a hardcoded placeholder and is not functional in any way.

HEADER BUTTONS:
If you click on the 'All Movies', you'll be redirected to the 'All movies' page with all the movies.
If you click on the 'Genres' page, you'll be redirected to the 'Genres' page with the list of all genres.

*
NOTE: AT ANY POINT and on any page, you can click on the desired movie card - that will redirect you to the page with more details about the selected movie.
*

'ALL MOVIES PAGE':
Once you open [http://localhost:3000], you'll land on the 'All movies' page.
You'll find all the movies that are out there in terms of [The MovieDB](https://www.themoviedb.org/).
You can search for movies using the search bar at the top of the page.
You can also scroll to the very bottom of tha page and find the pagination there that allows you to switch through the pages with movies.

GENRES PAGE:
Once on the 'Genres' page, you can click on any genre - that will redirect you to the page with all the movies related to the selected genre.
You can scroll to the very bottom of the selected genre page in order to switch pages via the pagination.

-------------------------------

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


