import {
  Container,
  TitleContainer,
  Title,
  SLink,
  AboutContainer,
  AboutTitle,
  ChildLink,
} from "./styled"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <Container>
    <TitleContainer>
      <Title>
        <SLink to="/">{siteTitle}</SLink>
      </Title>
    </TitleContainer>
    <AboutContainer>
      <AboutTitle>
        <ChildLink to="/">About</ChildLink>
      </AboutTitle>
    </AboutContainer>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
