# FE Template app

This Repo is an example template to be used to create new nextjs projects for Urbint.
The template was created using the nextjs framework and the tools we are using in our projects for tests, lints, and so on.

To start a new project using this template you should run:

```
yarn create next-app <project-name> -e https://github.com/urbint/fe-app-project
```

This command will create a folder with the <project-name> and the necessary files and configurations.

> Your project name should not have space and should be all lowercase.

## Folder structure

This project is structured with tools configurations (package.json, eslintrc, prettierrc, etc) on the root level besides two folders: public and src.

- The `public` folder holds public files and assets

- The `src` folder holds the source code of your project

## The `src` folder structure

Components folder = Here you have all your components with the colocated architecture.

> The colocated architecture means that everything related to your component should stay in your component folder: tests, styles, GraphQL fragments, etc.

> Do not put your components in the page folder because all JS or TS files inside this folder will be interpreted as pages for nextjs and it will decrease the build time of your project. NextJS does tree shaking so don't worry about that.

Pages folder = Here resides the pages of your application using the routeing strategy from nextjs, more info about pages [here](https://nextjs.org/docs/basic-features/pages) and routing [here](https://nextjs.org/docs/routing/introduction)

## Documentation

Since it's a NextJS project you should always check the nextjs documentation if you want any information related to integration with tools, environments, and most importantly best practices. Below you have info on how to start your project.

## NextJS commands

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
