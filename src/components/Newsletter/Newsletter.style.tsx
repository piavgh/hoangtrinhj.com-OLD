import styled from "styled-components"
import { themeGet } from "styled-system"
import NewsletterBG from "../../images/newsletter-bg.webp"

export const NewsletterWrapper = styled.div`
  margin: 0 auto;
  padding: 30px;
  background-image: url(${NewsletterBG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 3px;
  margin-top: 120px;

  @media (min-width: 990px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  }
  @media (min-width: 1400px) {
    width: 1170px;
  }
  @media (max-width: 990px) {
    width: calc(100% - 90px);
    margin-top: 90px;
    padding: 25px;
  }
  @media (max-width: 575px) {
    width: calc(100% - 50px);
    margin-top: 60px;
    padding: 15px;
  }
`

export const NewsletterInnerWrapper = styled.div`
  background: #fff;
  padding: 90px;
  height: 100%;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 1200px) {
    padding: 70px 50px;
  }
  @media (max-width: 990px) {
    padding: 50px 40px;
  }
  @media (max-width: 575px) {
    padding: 30px;
  }
`

export const NewsletterTitle = styled.h1`
  font-size: 30px;
  color: ${themeGet("colors.textColor", "#292929")};
  font-weight: ${themeGet("fontWeights.6", "700")};
  margin-bottom: 20px;
  font-family: ${themeGet("fontFamily.0", "'Fira Sans',sans-serif")};
  @media (max-width: 1200px) {
    font-size: 26px;
  }
  @media (max-width: 990px) {
    font-size: 21px;
    margin-bottom: 10px;
  }
  @media (max-width: 575px) {
    font-size: 18px;
  }
`

export const NewsletterDescription = styled.p`
  font-size: ${themeGet("fontSizes.3", "15")}px;
  line-height: ${themeGet("lineHeights.text", "2")};
  font-weight: ${themeGet("fontWeights.3", "400")};
  color: ${themeGet("colors.textColor", "#292929")};
  margin: 0;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 575px) {
    font-size: 13px;
  }
`

export const NewsletterInputWrapper = styled.form`
  display: flex;
  align-items: flex-end;
  width: 570px;
  max-width: 100%;
  margin-top: 90px;
  min-height: 44px;
  @media (max-width: 1200px) {
    margin-top: 90px;
  }
  @media (max-width: 990px) {
    margin-top: 70px;
  }
  @media (max-width: 575px) {
    margin-top: 60px;
    display: block;
  }

  .field-wrapper {
    flex-grow: 1;
    margin-right: 15px;
    @media (max-width: 575px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
    .inner-wrap {
      input {
        border-width: 0 0 1px 0;
        border-color: ${themeGet("colors.textColor", "#292929")};
      }
    }
  }
  .button {
    @media (max-width: 575px) {
      width: 100%;
      height: 42px;
    }
  }
`

export const ErrorMessage = styled.div`
  width: 570px;
  max-width: 100%;
  margin-top: 10px;
  text-align: justify;
  font-size: 13px;

  > span {
    color: #d8000c;
  }
  a {
    color: #d10068;
  }
`

export const SuccessMessage = styled.div`
  font-size: 22px;
  line-height: 1.7;
  text-align: center;
  width: 100%;

  @media (max-width: 990px) {
    font-size: 18px;
  }
  @media (max-width: 575px) {
    font-size: 16px;
  }
`
