# Portfolio Next.js Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/mehedihassandev/portfolio-nextjs.git
cd portfolio-nextjs

Install the dependencies:

npm install
# or
yarn install
# or
pnpm install
# or
bun install

Run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.
```

## Project Structure

- `.next/`: Contains the build output.

  - `app-build-manifest.json`: Manifest file for the app build.
  - `build-manifest.json`: Manifest file for the build.
  - `cache/`: Cache files.
    - `.tsbuildinfo`: TypeScript build info.
    - `eslint/`: ESLint cache.
    - `images/`: Cached images.
    - `swc/`: SWC cache.
    - `webpack/`: Webpack cache.
  - `server/`: Server-side files.
    - `_error.js`: Error page.
    - `app/`: Server-side application files.
    - `app-paths-manifest.json`: Manifest file for app paths.
    - `interception-route-rewrite-manifest.js`: Interception route rewrite manifest.
  - `static/`: Static files.
    - `chunks/`: JavaScript chunks.
    - `css/`: CSS files.
  - `trace`: Trace files.
  - `types/`: Type definitions.

- `public/`: Static assets.

  - `assets/`: Project-specific assets.

- `src/`: Source code of the application.

  - `app/`: Application-specific code.
  - `app/_constant/portfolio-constant.ts`: Portfolio constants.

- `tailwind.config.ts`: Tailwind CSS configuration.
- `tsconfig.json`: TypeScript configuration.
- `.eslintrc.json`: ESLint configuration.
- `.gitignore`: Git ignore file.
- `next-env.d.ts`: Next.js environment types.
- `next.config.mjs`: Next.js configuration.
- `package.json`: Project dependencies and scripts.
- `postcss.config.mjs`: PostCSS configuration.
- `README.md`: Project documentation.

Scripts

- `dev`: Runs the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to check for linting errors.
- Dependencies
- `next`: Next.js framework.
- `react`: React library.
- `react-dom`: React DOM library.
- `react-icons`: Icon library for React.
- `zod`: TypeScript-first schema declaration and validation library.

Dev Dependencies

- `@types/node`: TypeScript definitions for Node.js.
- `@types/react`: TypeScript definitions for React.
- `@types/react-dom`: TypeScript definitions for React DOM.
- `eslint`: Linting utility for JavaScript and TypeScript.
- `eslint-config-next`: ESLint configuration for Next.js.
- `postcss`: Tool for transforming CSS with JavaScript plugins.
- `tailwindcss`: Utility-first CSS framework.
- `typescript`: TypeScript language.

Features

- `Next.js`: The React framework for production.
- `Tailwind CSS`: A utility-first CSS framework for rapid UI development.
- `TypeScript`: A strongly typed programming language that builds on JavaScript.
- `ESLint`: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- `Zod`: TypeScript-first schema declaration and validation library.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details. ```
