import Head from 'next/head';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

{
  /* Preload Critical Resources */
}
const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  const { title, description, url, image, keywords, author } = pageProps;

  return (
    <>
      <Head>
        <title>{title || "Renke's WebDev Portfolio"}</title>
        <meta name="description" content={description || "Renke Brixel's Entry Level Web- & App Developer Portfolio"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content={keywords || 'web development, portfolio, Renke Brixel, entry level developer'} />
        <meta name="author" content={author || 'Renke Brixel'} />
        <meta httpEquiv="content-language" content="en" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title || "Renke's WebDev Portfolio"} />
        <meta property="og:description" content={description || "Renke's WebDev Portfolio"} />
        <meta property="og:url" content={url || 'https://renke-brixel.netlify.app/'} />
        <meta property="og:image" content={image || '/project-imgs/og-image.avif'} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || "Renke's WebDev Portfolio"} />
        <meta name="twitter:description" content={description || "Renke's WebDev Portfolio"} />
        <meta name="twitter:image" content={image || '/project-imgs/og-image.avif'} />

        {/* Favicon and Theme Color */}
        <link rel="icon" href="/favicon.ico" />
        {/* can adjust the bar of the mobile browser */}
        <meta name="theme-color" content="#18181b" />
        <link rel="canonical" href={url || 'https://renke-brixel.netlify.app/'} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: "Renke's WebDev Portfolio",
            description: description || "Renke Brixel's Entry Level Web- & App Developer Portfolio",
            url: url || 'https://renke-brixel.netlify.app/',
            author: {
              '@type': 'Person',
              name: 'Renke Brixel',
            },
          })}
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
