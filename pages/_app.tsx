// Core page: all other pages are wrappped around this key app page

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
