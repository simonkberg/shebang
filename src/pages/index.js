import * as React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Link = styled('a')`
  color: inherit;
`

const email = 'simon@shebang.consulting'
const website = 'simon.dev'

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <p>{data.site.siteMetadata.description}</p>
    <p>Located in Stockholm, Sweden.</p>
    <p>
      For inquires contact <Link href={`mailto:${email}`}>{email}</Link> or
      visit <Link href={`https://${website}`}>{website}</Link>.
    </p>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        description: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`
