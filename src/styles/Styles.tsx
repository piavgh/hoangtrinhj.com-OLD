import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { $light, $grey, $dark } from './Colors'
import { $width, $mobile, $borderRadius } from './Variables'

interface SectionProps {
  last?: boolean
}

interface StyledLinkGroupProps {
  right?: boolean
}

export const Container = styled.div`
  max-width: ${$width};
  padding: 0 2rem 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`

export const Section = styled.div<SectionProps>`
  margin-bottom: ${props => (props.last ? '0' : '4rem')};

  & > h2 {
    display: flex;
    align-items: center;
    border-bottom: 0;
    padding-bottom: 0;
    margin: 0 0 1rem;

    @media (min-width: ${$mobile}) {
      margin: 0 0 2rem;
    }
  }
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
`

export const SocialButtons = styled.div`
  display: flex;
  align-items: center;
`

export const NewsletterSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: ${$borderRadius};
  margin: 2rem 0;
  padding: 1.5rem;
  text-align: center;
  background: ${$light};
`

export const NewsletterAvatar = styled.img`
  margin-top: 0.5rem;
  border-radius: 8px;
  width: 50px;

  @media (min-width: ${$mobile}) {
    width: 75px;
  }
`

export const SubscribeButton = styled.a`
  font-size: 1.2rem;
  padding: 1.1rem;

  @media (min-width: ${$mobile}) {
    font-size: 1.5rem;
    padding: 1.2rem;
  }
`

export const ViewAllButton = styled(Link)`
  display: inline-block;
  padding: 0.4rem 0.6rem;
  background: #f2f2f2;
  border-radius: 4px;
  color: #5a5a5a;
  font-size: 1rem;
  font-weight: 500;
  margin: 0.25rem 1rem 0 2rem;
`

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`

export const StyledLinkGroup = styled.div<StyledLinkGroupProps>`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: ${$mobile}) {
    justify-content: ${props => (props.right ? 'flex-end' : 'flex-start')};
  }
`

export const FooterLink = styled.a`
  color: ${$grey};
  margin: 0 1rem;
  padding: 1rem 0.5rem;

  &:hover {
    color: #111;
  }
`

export const FooterLinkImage = styled.a`
  margin-right: 1.5rem;
`

export const FooterImage = styled.img`
  height: 30px;
  width: 30px;
  margin-bottom: 0;
`
