import React from 'react'
import Grid from '@material-ui/core/Grid'

import {
  Container,
  StyledLinkGroup,
  FooterLinkImage,
  FooterImage,
  FooterLink,
} from '../styles/Styles'
import netlify from '../../content/thumbnails/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/thumbnails/github.png'

const Footer = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <StyledLinkGroup>
            <FooterLink href="https://patreon.com/hoangtrinhj">Patreon</FooterLink>
          </StyledLinkGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledLinkGroup right>
            <FooterLinkImage
              href="https://github.com/piavgh"
              target="_blank"
              rel="noopener noreferrer"
              title="Open-source on GitHub"
            >
              <FooterImage src={github} alt="GitHub" />
            </FooterLinkImage>
            <FooterLinkImage
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              title="Built with Gatsby"
            >
              <FooterImage src={gatsby} alt="Gatsby" />
            </FooterLinkImage>
            <FooterLinkImage
              href="https://www.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Hosted by Netlify"
            >
              <FooterImage src={netlify} alt="Netlify" />
            </FooterLinkImage>
          </StyledLinkGroup>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
