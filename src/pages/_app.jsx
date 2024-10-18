import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { title, description, url, image } = pageProps;

  return (
    <>
      <Head>
        <title>{title || 'Your Portfolio Title'}</title>
        <meta name="description" content={description || "Renke Brixel's Entry Level Web- & App Developer Portfolio"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content={title || "Renke's WebDev Portfolio"} />
        <meta property="og:description" content={description || "Renke's WebDev Portfolio"} />
        <meta property="og:url" content={url || 'https://renke-brixel.netlify.app/'} />
        <meta property="og:image" content={image || '/project-imgs/og-image.avif'} />
        <link rel="canonical" href={url || 'https://renke-brixel.netlify.app/'} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
