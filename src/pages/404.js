// @flow strict
import React from 'react'
import styled from 'react-emotion'
import Layout from '../components/layout'

const Title = styled('h2')`
  font-size: 1rem;
  font-weight: bold;
`

const SubTitle = styled('span')`
  font-weight: normal;
`

type Props = {
  location: { pathname: string },
}

const NotFoundPage = ({ location }: Props) => (
  <Layout location={location}>
    <Title>
      /dev/null
      <SubTitle> - 404 Not Found</SubTitle>
    </Title>
  </Layout>
)

export default NotFoundPage
