import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import config from '../../data/SiteConfig'
import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import SEO from '../components/SEO/SEO'
import { Container, Section } from '../styles/Styles'

const BlogPage = ({ data }) => {
  const postEdges = data.posts.edges

  return (
    <Layout>
      <Helmet title={`Articles – ${config.siteTitle}`} />
      <SEO />

      <Container className="front-page">
        <Section>
          <h1>Articles</h1>
          <PostListing postEdges={postEdges} />
        </Section>
      </Container>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
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
  }
`
