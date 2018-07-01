import React from 'react'
import styled from 'react-emotion'

const Title = styled('h2')`
  font-size: 1rem;
  font-weight: bold;
`

const SubTitle = styled('span')`
  font-weight: normal;
`

const NotFoundPage = () => (
  <div>
    <Title>
      /dev/null
      <SubTitle> - 404 Not Found</SubTitle>
    </Title>
  </div>
)

export default NotFoundPage
