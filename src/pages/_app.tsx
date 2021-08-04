// Core page: all other pages are wrappped around this key app page
// See HERE: https://nextjs.org/docs/advanced-features/custom-app

import type { AppProps /* , AppContext */ } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
