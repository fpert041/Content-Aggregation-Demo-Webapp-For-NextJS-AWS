# Content Aggregation Webapp Demo for NextJS + AWS Amplify

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The home page is hosted at `src/pages/index.tsx` (formerly `src/pages/index.js`) and the app wrapped around `src/pages/app.tsx`.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `src/pages/api/hello.tsx`.

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

The project uses Typescript: `tsconfig.json` + node modules `@types/react` and `@types/node`

## NextJS ─ Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## AWS Amplify (for deployment)

To deploy this project on AWS and take advantage of the Amplify ecosystem, it requires the [Amplify Cli](https://docs.amplify.aws/cli/start/install) and an AWS Account.

- `npm install -g @aws-amplify/cli`
- `amplify configure` (+ configuration steps on AWS's website via browser and via the console)
- `amplify init`

Some next steps:
`amplify status` will show you what you've added already and if it's locally configured or deployed
`amplify add <category>` will allow you to add features like user login or a backend API
`amplify push` will build all your local backend resources and provision it in the cloud
`amplify console` to open the Amplify Console and view your project status
`amplify publish` will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try `amplify add api` to create a backend API and then `amplify publish` to deploy everything

## Typescript, Eslint, pretties setup

`yarn add --dev PACKAGE_NAME` or `npm install PACKAGENAME --save_dev` + installation if needed (`npx PACKAGENAME --init`) and setup (i.e. in []`.prettierrc`](https://prettier.io/docs/en/options.html), `.prettierignore`, `eslintrc`, `.eslintrc.json`, `.eslintignore`)

PACKAGENAMEs:

- eslint
- prettier
- eslint-config-prettier

Check out this blog as per [how and why](https://decodenatura.com/how-to-set-up-nextjs-typescript-eslint-prettier/)

For the above to work on your local IDe you might need to install the relevant plugins

## CSS / Styling

On this project we deleted the default styling and replaced them with [Material UI](https://www.williamkurniawan.com/blog/step-by-step-guidelines-to-implement-material-ui-in-next-js-2020)

Using the NextJS [setup example](https://github.com/vercel/next.js/tree/canary/examples/with-material-ui)

Istall package via:

- `yarn add @material-ui/core`
- `yarn add @material-ui/icons`

## TODO

https://www.youtube.com/watch?v=cLKLqpxPSws&t=24s&ab_channel=JarrodWatts
