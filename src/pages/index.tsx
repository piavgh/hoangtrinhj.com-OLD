import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import GitHubButton from 'react-github-btn'

import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import hoangAvatar from '../../content/images/hoang.jpg'
import { Container, Section, SubscribeButton } from '../styles/Styles'

const Index = ({ data }) => {
  const latestPostEdges = data.latest.edges
  const popularPostEdges = data.popular.edges

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Container>
        <div className="lead">
          <div className="elevator">
            <h1>I&apos;m Hoang</h1>
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
                  data-show-count
                  aria-label="Follow @piavgh on GitHub"
                >
                  Follow
                </GitHubButton>
              </div>
            </div>
          </div>

          <div className="newsletter-section">
            <img src={hoangAvatar} className="newsletter-avatar" alt="Hoang Avatar" />
            <div>
              <h3>Get updates</h3>
              <p>Open source projects and development tutorials</p>
              <SubscribeButton href="https://hoangtrinhj.substack.com">Subscribe</SubscribeButton>
            </div>
          </div>
        </div>
      </Container>

      <Container className="front-page">
        <Section>
          <h2>
            Latest Articles
            <Link to="/blog" className="view-all">
              View all
            </Link>
          </h2>
          <PostListing postEdges={latestPostEdges} />
        </Section>

        <Section>
          <h2>
            Most Popular
            <Link to="/categories/popular" className="view-all">
              View all
            </Link>
          </h2>
          <PostListing postEdges={popularPostEdges} />
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
      limit: 100
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
