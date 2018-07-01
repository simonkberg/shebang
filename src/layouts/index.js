import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

import Header from '../components/header'
import iosevkaWoff from '../fonts/iosevka-ss08-regular.woff'
import iosevkaWoff2 from '../fonts/iosevka-ss08-regular.woff2'
import iosevkaItalicWoff from '../fonts/iosevka-ss08-italic.woff'
import iosevkaItalicWoff2 from '../fonts/iosevka-ss08-italic.woff2'
import iosevkaBoldWoff from '../fonts/iosevka-ss08-bold.woff'
import iosevkaBoldWoff2 from '../fonts/iosevka-ss08-bold.woff2'
import iosevkaBoldItalicWoff from '../fonts/iosevka-ss08-bolditalic.woff'
import iosevkaBoldItalicWoff2 from '../fonts/iosevka-ss08-bolditalic.woff2'
import sanitize from './sanitize'

injectGlobal`
  ${sanitize};

  @font-face {
    font-family: 'Iosevka';
    font-display: fallback;
    src: url('${iosevkaWoff2}') format('woff2'), url('${iosevkaWoff}') format('woff2');
  }

  @font-face {
    font-family: 'Iosevka';
    font-style: italic;
    font-display: fallback;
    src: url('${iosevkaItalicWoff2}') format('woff2'), url('${iosevkaItalicWoff}') format('woff2');
  }

  @font-face {
    font-family: 'Iosevka';
    font-weight: 700;
    font-display: fallback;
    src: url('${iosevkaBoldWoff2}') format('woff2'), url('${iosevkaBoldWoff}') format('woff2');
  }

  @font-face {
    font-family: 'Iosevka';
    font-weight: 700;
    font-style: italic;
    font-display: fallback;
    src: url('${iosevkaBoldItalicWoff2}') format('woff2'), url('${iosevkaBoldItalicWoff}') format('woff2');
  }

  :root {
    font-family: Iosevka, monospace;
  }
`

const Content = styled('div')`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'theme-color', content: '#000000' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Content>{children()}</Content>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteMetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
