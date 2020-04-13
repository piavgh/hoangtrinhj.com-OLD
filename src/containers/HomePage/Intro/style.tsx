import styled from "styled-components"
import { themeGet } from "styled-system"

export const IntroWrapper = styled.div`
  width: 610px;
  max-width: 100%;
  margin: 0 auto;
  padding: 150px 10px 0 10px;
  text-align: center;
  @media (max-width: 1400px) {
    padding: 120px 10px 0 10px;
  }
  @media (max-width: 1200px) {
    padding: 100px 10px 0 10px;
  }
  @media (max-width: 990px) {
    padding: 70px 10px 0 10px;
  }
  @media (max-width: 575px) {
    padding: 50px 25px 0 25px;
  }
`

export const IntroImage = styled.div`
  width: 270px;
  height: 270px;
  padding: 30px;
  border-radius: 50%;
  margin: 0 auto;
  border: 1px solid ${themeGet("colors.lightBorderColor", "#ededed")};
  margin-bottom: 30px;
  @media (max-width: 990px) {
    width: 220px;
    height: 220px;
    padding: 25px;
    margin-bottom: 25px;
  }
  @media (max-width: 990px) {
    width: 180px;
    height: 180px;
    padding: 20px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 50%;
  }
`

export const IntroTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  font-family: ${themeGet("fontFamily.1", "'Poppins', sans-serif")};
  color: ${themeGet("colors.textColor", "#292929")};
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 990px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
  @media (max-width: 575px) {
    font-size: 22px;
  }
`

export const Desciption = styled.p`
  color: ${themeGet("colors.textColor", "#292929")};
  font-size: ${themeGet("fontSizes.3", "15")}px;
  line-height: ${themeGet("lineHeights.text", "2")};
  text-align: center;
`
