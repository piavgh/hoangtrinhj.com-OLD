import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { $light, $grey, $dark } from './Colors'
import { $width, $mobile, $borderRadius } from './Variables'

export const NavContainer = styled.div`
  max-width: ${$width};
  padding: 0 2rem 0;
  margin-left: auto;
  margin-right: auto;
`

export const BrandLink = styled(Link)`
  color: ${$dark};
  font-weight: 500;

  &:hover {
    color: #111;
  }
`

export const NavLink = styled(Link)`
  color: ${$grey};
  font-weight: 500;
  margin: 0 1rem;
  padding: 1rem 0.5rem;

  &:hover {
    color: #111;
  }
`

export const Container = styled.div`
  max-width: ${$width};
  padding: 0 2rem 0;
  margin-left: auto;
  margin-right: auto;
`

export const Section = styled.section`
  margin: 4rem 0;

  & > h2 {
    display: flex;
    align-items: center;
    border-bottom: 0;
    padding-bottom: 0;
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

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`

export const StyledUserLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`

export const FooterLink = styled.a`
  color: ${$grey};
  font-weight: 500;
  margin: 0 1rem;
  padding: 1rem 0.5rem;

  &:hover {
    color: #111;
  }
`
