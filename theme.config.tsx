import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'



const config: DocsThemeConfig = {
  logo: <span>PHY-150</span>,
  project: {
    link: 'https://github.com/sumanchapai/phy-150-rc',
  },
  docsRepositoryBase: 'https://github.com/sumanchapai/phy-150-rc',
  footer: {
    text: 'Luther College | Engineering - 2023FA',
  },
  head: function useHead() {
    const { title } = useConfig()
    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Engineering 101 course at Luther"
        />
        <meta
          name="og:description"
          content="Engineering 101 course at Luther"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={"/og.png"} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + ' – Physics 150 Luther' : 'Physics 150 Luther College'}
        />
        <meta name="og:image" content={"/og.png"} />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
}

export default config
