This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependency:

```bash
npm install
# or
yarn install
# or
bun install
```

Now we can run the development server:

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

The actual source files of a project are stored inside the
`src` folder

    .
    ├── app         # App router for next
    ├── assets      # Store static asset like svg
    ├── components  # Folder containing components (Classify components by purpose of use like Buttons, Modals, .etc)
    ├── config      # Often used to store 3rd party configurations
    ├── hooks       # Store custom hooks
    ├── jotai       # Jotai store and function
    ├── services    # Handle API stuff (Nextjs prefer use fetch for fetching data)
    ├── theme       # Custom theme for MUI
    ├── utils       # Store util function
    ├── constant    # Store constant variable
    └── middleware  # Middleware of nextjs can modify the response by rewriting, redirecting, .etc

> Use short lowercase names at least for the top-level files and folders except `README.md`

## Public folder

`public/images/logo` ⇒ logo images of app

`public/favicon.ico` ⇒ icon of app in tab menu

`public/thumbnail.png` ⇒ thumbnail of app when paste link in social app (discord, tele, facebook,...)

`public/robots.txt` ⇒ replace APP_URL by your app base url (ex: https://app.orchai.io/sitemap.xml)

`public/sitemap.xml` ⇒ declare all page url of your project for gg search can read all routes of your project

## Change constant/metadata file

Search and change these following keys:

**`SITE_URL`** ⇒ link web of production

```html
<meta property="og:url" content="SITE_URL" />
```

**`SITE_TITLE`** ⇒ title of app (ex: Orchai, Centic, Thorn, ....)

```html
<meta property="og:title" content="SITE_TITLE" /> <title>SITE_TITLE</title>
```

**`SITE_DESCRIPTION`** ⇒ description of app

**`LINK_FONT_FAMILY_OF_APP`** ⇒ link font family of app (ex: https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap)

**`SITE_THUMBNAIL_WIDTH`** ⇒ width of thumbnail image (in pixel unit) (ex: 6251)

**`SITE_THUMBNAIL_HEIGHT`** ⇒ height of thumbnail image (in pixel unit) (ex: 2084)

**`KEYWORD`** => for gg search, list keys words relative with project

```html
<meta
  name="keywords"
  content="Orchai, lend, borrow, crypto, lowcode defi, Oraichain, Blockchain, marketplace, loans, best profit, AI, Lending Platform, ecosystem, AI Oracle."
/>
```

## 3rd party libraries

Below is a list of libraries used in this base. If you are not familiar with the different technologies used in this base, please refer to the respective docs.

- [Next.js](https://nextjs.org)
- [Wagmi](https://wagmi.sh/react/installation)
- [Jotai](https://jotai.org/docs)
- [date-fns](https://date-fns.org/docs/Getting-Started)
- [material-ui](https://mui.com/material-ui/getting-started/usage/)
