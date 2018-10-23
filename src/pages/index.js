// @flow strict
import React from 'react'
import styled from 'react-emotion'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Link = styled('a')`
  color: inherit;
`

type Props = {
  data: {
    site: {
      siteMetadata: {
        description: string,
      },
    },
  },
  location: { pathname: string },
}

const email = 'simon@shebang.consulting'
const website = 'simonkjellberg.com'

const IndexPage = ({ data, location }: Props) => (
  <Layout location={location}>
    <p>{data.site.siteMetadata.description}</p>
    <p>Located in Stockholm, Sweden.</p>
    <p>
      For inquires contact <Link href={`mailto:${email}`}>{email}</Link> or
      visit <Link href={`https://${website}`}>{website}</Link>.
    </p>
  </Layout>
)

export default IndexPage

// $FlowFixMe: resolve in gatsby v2
export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`
