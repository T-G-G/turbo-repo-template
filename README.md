# Turborepo starter

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `ui`: a [Vite](https://vitejs.dev/) app
- `backend`: a [Node.js](https://nodejs.org/) app
- `@repo/ui`: a stub React component library shared by both `ui` and `backend` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/types`: `zod` schemas used throughout the monorepo

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Tailwind](https://tailwindcss.com/) for styling

### Build

To build all apps and packages, run the following command:

```
cd sample-repo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd sample-repo
pnpm dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
