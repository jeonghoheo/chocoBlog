import styled from "styled-components"
import { Link } from "gatsby"
import {
  HeaderBackGroundColor,
  HeaderTitleColor,
  HeaderTitleHoverColor,
  MenuColor,
  MenuHoverColor,
} from "../colors"

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${HeaderBackGroundColor};
  margin-bottom: 1.45rem;
  padding: 20px;
  -webkit-box-shadow: 4px 17px 27px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 17px 27px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 17px 27px -12px rgba(0, 0, 0, 0.75);
`
export const TitleContainer = styled.div`
  flex: 1;
`
export const Title = styled.h1`
  margin: 0;
`
export const SLink = styled(Link)`
  color: ${HeaderTitleColor};
  text-decoration: none;
  :hover {
    color: ${HeaderTitleHoverColor};
  }
`
export const AboutContainer = styled.div``

export const AboutTitle = styled.h3`
  margin: 0;
  color: white;
`
export const ChildLink = styled(Link)`
  text-decoration: none;
  color: ${MenuColor};
  :hover {
    color: ${MenuHoverColor};
  }
`
