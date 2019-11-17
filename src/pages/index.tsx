import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import GitHubButton from 'react-github-btn'
import Grid from '@material-ui/core/Grid'

import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import hoangAvatar from '../../content/images/hoangtrinh.jpg'
import {
  Container,
  Section,
  HeadlineSection,
  SocialButtons,
  SubscribeButton,
  NewsletterSection,
  NewsletterAvatar,
  ViewAllButton,
} from '../styles/Styles'

const Index = ({ data }) => {
  const latestPostEdges = data.latest.edges
  const popularPostEdges = data.popular.edges

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={7}>
            <HeadlineSection>
              <h1>I&apos;m Hoang</h1>
              <p>
                I build products on Google Cloud Platform and write about modern JavaScript,
                Node.js, design and web development.
              </p>
              <SocialButtons>
                <div>
                  <a
                    className="twitter-follow-button"
                    href="https://twitter.com/hoangtrinhj"
                    data-size="large"
                    data-show-screen-name="false"
                  >
                    Follow @hoangtrinhj
                  </a>
                </div>
                <div>
                  <GitHubButton
                    href="https://github.com/piavgh"
                    data-size="large"
                    data-show-count
                    aria-label="Follow @piavgh on GitHub"
                  >
                    Follow
                  </GitHubButton>
                </div>
              </SocialButtons>
            </HeadlineSection>
          </Grid>

          <Grid item xs={12} sm={5}>
            <NewsletterSection>
              <NewsletterAvatar
                src={hoangAvatar}
                className="newsletter-avatar"
                alt="Hoang Avatar"
              />
              <div>
                <h3>Get updates</h3>
                <p>Open source projects and development tutorials</p>
                <SubscribeButton href="https://hoang.substack.com">Subscribe</SubscribeButton>
              </div>
            </NewsletterSection>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Section>
          <h2>
            Latest Articles
            <ViewAllButton to="/blog">View all</ViewAllButton>
          </h2>
          <PostListing simple postEdges={latestPostEdges} />
        </Section>

        <Section last>
          <h2>
            Most Popular
            <ViewAllButton to="/categories/popular">View all</ViewAllButton>
          </h2>
          <PostListing simple postEdges={popularPostEdges} />
        </Section>
      </Container>
    </Layout>
  )
}

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { in: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
