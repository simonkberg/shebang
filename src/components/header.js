import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Wrapper = styled('header')`
  color: #fff;
  background: #151515;
  margin-bottom: '1.45rem';
`

const Container = styled('div')`
  margin: 0 auto;
  max-width: 48rem;
  padding: 1.45rem 1.0875rem;
`

const Title = styled('h1')`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  text-transform: lowercase;
`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Container>
      <Title>
        <StyledLink to="/">#!/{siteTitle}</StyledLink>
      </Title>
    </Container>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
