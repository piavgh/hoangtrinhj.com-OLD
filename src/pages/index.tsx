import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import GitHubButton from 'react-github-btn'

import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import hoangAvatar from '../../content/images/hoangtrinh.jpg'
import {
  Container,
  IntroductionSection,
  HeadlineSection,
  NewsletterSection,
  NewsletterAvatar,
} from '../components/Styles/Styles'

const Index = ({ data }) => {
  const latestPostEdges = data.latest.edges
  const popularPostEdges = data.popular.edges

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Container>
        <IntroductionSection>
          <HeadlineSection>
            <h1>I'm Hoang</h1>
            <p>
              I build products on Google Cloud Platform and write about modern JavaScript, Node.js,
              design and web development.
            </p>
            <div className="social-buttons">
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
                  data-show-count="true"
                  aria-label="Follow @piavgh on GitHub"
                >
                  Follow
                </GitHubButton>
              </div>
            </div>
          </HeadlineSection>
          <NewsletterSection>
            <NewsletterAvatar src={hoangAvatar} className="newsletter-avatar" alt="Hoang Avatar" />
            <div>
              <h3>Get updates</h3>
              <p>Open source projects and development tutorials</p>
              <a className="button" href="https://taniarascia.substack.com">
                Subscribe
              </a>
            </div>
          </NewsletterSection>
        </IntroductionSection>
      </Container>

      <Container className="front-page">
        <section className="section">
          <h2>
            Latest Articles
            <Link to="/blog" className="view-all">
              View all
            </Link>
          </h2>
          <PostListing postEdges={latestPostEdges} />
        </section>
      </Container>

      <Container className="front-page">
        <section className="section">
          <h2>
            Most Popular
            <Link to="/categories/popular" className="view-all">
              View all
            </Link>
          </h2>
          <PostListing postEdges={popularPostEdges} />
        </section>
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
            cover
            date
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
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
            cover
            date
          }
        }
      }
    }
  }
`
