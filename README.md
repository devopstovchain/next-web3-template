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
    └── middleware  # Middleware of nextjs can modify the response by rewriting, redirecting, .etc

> Use short lowercase names at least for the top-level files and folders except `README.md`

## 3rd party libraries

Below is a list of libraries used in this base. If you are not familiar with the different technologies used in this base, please refer to the respective docs.

- [Next.js](https://nextjs.org)
- [Wagmi](https://wagmi.sh/react/installation)
- [Jotai](https://jotai.org/docs)
- [date-fns](https://date-fns.org/docs/Getting-Started)
- [material-ui](https://mui.com/material-ui/getting-started/usage/)
