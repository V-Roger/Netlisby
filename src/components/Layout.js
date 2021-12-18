import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description, siteURL } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" class="has-navbar-fixed-top" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix(`${siteURL}/`)}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix(`${siteURL}/`)}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix(`${siteURL}/`)}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix(`${siteURL}/`)}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix(`${siteURL}/`)}img/gregoire_mourlevat_restaurant_tignes_legrattalu-3676.jpg`}
        />
        <link rel="stylesheet" href="https://use.typekit.net/vom1sxe.css"/>
      </Helmet>
      <Navbar />
      <div style={{ minHeight: 'calc(45vh + 3.5rem)' }}>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
