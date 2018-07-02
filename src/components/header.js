// @flow strict
import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const Wrapper = styled('header')`
  color: #fff;
  background: #000;
  margin-bottom: '1.45rem';
`

const Container = styled('div')`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Title = styled('h1')`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`

type Props = {
  siteTitle: string,
}

const Header = ({ siteTitle }: Props) => (
  <Wrapper>
    <Container>
      <Title>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Title>
    </Container>
  </Wrapper>
)

export default Header
