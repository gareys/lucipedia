import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="A wiki and various tools for learning about Sam Spratt's Luci paintings."
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="A wiki and various tools for learning about Sam Spratt's Luci paintings."
          />
          <meta property="og:title" content="Lucipedia" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Lucipedia" />
          <meta
            name="twitter:description"
            content="A wiki and various tools for learning about Sam Spratt's Luci paintings."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
