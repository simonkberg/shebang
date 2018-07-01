import React from 'react'
import styled from 'react-emotion'

const Link = styled('a')`
  color: inherit;
`

const IndexPage = () => (
  <div>
    <p>
      Fullstack web consulting, specialized in React, Node.js, GraphQL and
      frontend architecture.
    </p>
    <p>
      For inquires contact{' '}
      <Link href="mailto:simon@shebang.consulting">
        simon@shebang.consulting
      </Link>.
    </p>
  </div>
)

export default IndexPage
