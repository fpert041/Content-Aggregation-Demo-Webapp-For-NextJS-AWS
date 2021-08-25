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


## Project parts

### CSS / Styling

On this project we deleted the default styling and replaced them with [Material UI](https://www.williamkurniawan.com/blog/step-by-step-guidelines-to-implement-material-ui-in-next-js-2020)

Using the NextJS [setup example](https://github.com/vercel/next.js/tree/canary/examples/with-material-ui)

Istall package via:

- `yarn add @material-ui/core`
- `yarn add @material-ui/icons`

### Set up a default styles theme via a CSS library (MaterialUI)

*DOING 1*
Got to the [MaterialUI](https://material-ui.com/customisation/color), heat to *tools by the community* and then to the MaterialUI theme editor. There you will be able to make a theme in a visual way, preview it live, and then download the end result as a set of CSS instructions in a JSON file.

You can then paste this into your `src/theme.ts` file.

*Dev idea for atom: can you find a plugin to highlight css colours in the editor and preview colours?*

Functions imported/used from MaterialUI:
- responsiveFontSizes()

### Add GraphQL API via AWS schema

*Doing 2*
With the AWS CLI installed, we use the `amplify add api` command to setup a graphQL API via the AWS schema setup.

In the `schema.graphql` file we use:
- `@model`, `@connection`, and `@key` definitions to types to create the correct types and create the required one-to-one and one-to-one relationships amongst theme. Used types:
  - Post
  - Comment
- `@auth` to create authorisation rules to read, create, and/or edit an object of a certain type (via an array of `rules`)

To commit changes to the API we use `amplify push`. We export the code when prompted to have AWS set up all the required code to leverage this API in the webapp.

To review the AWS API we use `api console`

By default, the schema syncs to an AWS **DynamoDB** instance.

### Forms: [React Hook Form](https://react-hook-form.com)

*Doing 3*

Installed via `yarn add react-hook-form` then integrate via MateriaUI/.

*Dev note: can you install an ES7 React snippet plugin in Atom to help you build functions using shortcodes? (eg 'tsrfc' for a boilerplate 'typescript react functional component')*

All setup for a **Sign up Form** is stored in a new page: `src/pages/signup.tsx`


## TODO

https://github.com/fpert041/Content-Aggregation-Demo-Webapp-For-NextJS-AWS

- Add AWS Amplify API (GraphQL schema) + Authentication (via Cognito user pool) + Auth Context
- Frontend dynamic data
- ...
