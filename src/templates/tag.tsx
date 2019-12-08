import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import config from '../../data/SiteConfig'
import Layout from '../layout'
import { Container } from '../styles/Styles'
import PostListing from '../components/PostListing'

const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const postEdges = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Helmet title={`Posts tagged as "${tag}" - ${config.siteTitleShort}`} />
      <Container className="tag-container">
        <h1>
          Posts tagged as <u>{tag}</u>
        </h1>
        <PostListing postEdges={postEdges} />
      </Container>
    </Layout>
  )
}

export default TagTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
