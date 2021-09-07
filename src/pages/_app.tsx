// Core page: all other pages are wrappped around this key app page
// See HERE: https://nextjs.org/docs/advanced-features/custom-app

import React, { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import type { AppProps } from "next/app";
import AuthContext from "../context/AuthContext";

// Import AWS Amplify modules at APP scope level (Careful with performance as it will be imported on every page!)
// importing modularly as per: https://dabit3.medium.com/modular-imports-with-aws-amplify-daeb387b6985
import Amplify from "@aws-amplify/core";

import awsconfig from "../aws-exports"; // relative import to the project's Amplify config file
// Amplify.configure(awsconfig); // Without SSR
Amplify.configure({ ...awsconfig, ssr: true }); // Configure Amplify for SSR w/ NextJS

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Content Aggregator Webapp</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AuthContext>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContext>
    </React.Fragment>
  );
}

export default MyApp;
