import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Renke Brixel's Portfolio</title>
      <meta
        name="description"
        content="Welcome to Renke Brixel's portfolio showcasing skills and projects as an entry-level web and app developer."
      />
      <body id="root" className="bg-zinc-900 text-zinc-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
