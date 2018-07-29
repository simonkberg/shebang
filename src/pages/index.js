// @flow strict
import React from 'react'
import styled from 'react-emotion'

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
}

const IndexPage = ({ data }: Props) => (
  <div>
    <p>{data.site.siteMetadata.description}</p>
    <p>
      For inquires contact{' '}
      <Link href="mailto:simon@shebang.consulting">
        simon@shebang.consulting
      </Link>
      .
    </p>
  </div>
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
