import * as React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Layout from '../components/layout'

const Title = styled('h2')`
  font-size: 1rem;
  font-weight: bold;
`

const SubTitle = styled('span')`
  font-weight: normal;
`

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <Title>
      /dev/null
      <SubTitle> - 404 Not Found</SubTitle>
    </Title>
  </Layout>
)

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default NotFoundPage
