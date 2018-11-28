// @flow strict
import * as React from 'react'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import sanitize from '!raw-loader!sanitize.css'

import iosevkaWoff from '../assets/iosevka-ss08-regular.woff'
import iosevkaWoff2 from '../assets/iosevka-ss08-regular.woff2'
import iosevkaBoldWoff from '../assets/iosevka-ss08-bold.woff'
import iosevkaBoldWoff2 from '../assets/iosevka-ss08-bold.woff2'
import fbShareImage from '../assets/facebook.png'
import favicon from '../assets/favicon.ico'
import Header from './header'

const globalStyles = css`
  ${sanitize};

  @font-face {
    font-family: 'Iosevka';
    font-display: fallback;
    src: url('${iosevkaWoff2}') format('woff2'),
      url('${iosevkaWoff}') format('woff');
  }

  @font-face {
    font-family: 'Iosevka';
    font-weight: 700;
    font-display: fallback;
    src: url('${iosevkaBoldWoff2}') format('woff2'),
      url('${iosevkaBoldWoff}') format('woff');
  }

  :root {
    font: 100%/1.5 Iosevka, monospace;
  }
`

const ensureNoSlash = str => (str.endsWith('/') ? str.slice(0, -1) : str)

const Content = styled('div')`
  margin: 0 auto;
  max-width: 48rem;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`

type Props = {
  children: React.Node,
  location: { pathname: string },
}

type StaticQueryData = {
  site: {
    siteMetadata: {
      siteUrl: string,
      title: string,
      description: string,
    },
  },
}

const Layout = ({ children, location }: Props) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteUrl
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryData) => {
      const canonicalUrl = `${data.site.siteMetadata.siteUrl}${ensureNoSlash(
        location.pathname
      )}`

      return (
        <div>
          <Global styles={globalStyles} />
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            titleTemplate={`%s – ${data.site.siteMetadata.title}`}
            defaultTitle={data.site.siteMetadata.title}
            meta={[
              { name: 'theme-color', content: '#151515' },
              { property: 'og:url', content: canonicalUrl },
              { property: 'og:type', content: 'website' },
              { property: 'og:title', content: data.site.siteMetadata.title },
              { property: 'og:image', content: fbShareImage },
              {
                name: 'description',
                property: 'og:description',
                content: data.site.siteMetadata.description,
              },
            ]}
            link={[
              { rel: 'shortcut icon', href: favicon },
              { rel: 'canonical', href: canonicalUrl },
              {
                rel: 'preload',
                href: iosevkaWoff2,
                as: 'font',
                type: 'font/woff2',
                crossOrigin: 'anonymous',
              },
              {
                rel: 'preload',
                href: iosevkaBoldWoff2,
                as: 'font',
                type: 'font/woff2',
                crossOrigin: 'anonymous',
              },
            ]}
          />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Content>{children}</Content>
        </div>
      )
    }}
  />
)

export default Layout
