import styled from '@emotion/styled'

import { $light } from './Colors'
import { $width } from './Variables'

export const Container = styled.div`
  max-width: ${$width};
  padding: 60px 2rem 0;
  margin-left: auto;
  margin-right: auto;
`

export const IntroductionSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`

export const HeadlineSection = styled.div`
  & > h1 {
    margin-top: 0;
    font-weight: 700;
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }

  & > p {
    font-size: 1.5rem;
    max-width: 550px;
  }

  & > .button {
    margin-right: 0.5rem;
  }

  & > .social-buttons {
    display: flex;
    align-items: center;
  }

  & > .social-buttons :first-child {
    margin-right: 0.5rem;
    margin-bottom: 0;
  }
`

export const NewsletterSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: $border-radius;
  margin: 2rem 0;
  padding: 1.5rem;
  text-align: center;
  background: ${$light};
`

export const NewsletterAvatar = styled.img`
  margin-top: 0.5rem;
  border-radius: 8px;
  width: 50px;
`

export const PostItem = styled.div`
  & > .each {
    display: grid;
    align-items: center;
    padding: 0.5rem 1rem;
    margin: 0;
    border: 2px solid transparent;
    border-bottom: 2px solid #f2f2f2;
  }

  & > .each > h2 {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.3;
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
  }
`
