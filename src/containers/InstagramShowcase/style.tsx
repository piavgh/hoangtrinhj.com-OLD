import styled from "styled-components"
import { themeGet } from "styled-system"

const InstShowcaseWrapper = styled.div`
  padding: 120px 75px 0 75px;
  @media (max-width: 1400px) {
    padding: 120px 35px 0 35px;
  }
  @media (max-width: 990px) {
    padding: 90px 25px 0 25px;
  }
  @media (max-width: 575px) {
    padding: 60px 10px 0 10px;
  }
`

export const InstashowcaseRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
`

export const InstashowcaseCol = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding: 0 5px;
  @media (max-width: 767px) {
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
    &:nth-child(n + 4) {
      display: none;
    }
  }
`

export const ShowcaseTitle = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: ${themeGet("colors.textColor", "#292929")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  font-family: ${themeGet("fontFamily.0", "'Fira Sans',sans-serif")};
  @media (max-width: 575px) {
    margin-bottom: 20px;
  }
`

export default InstShowcaseWrapper
