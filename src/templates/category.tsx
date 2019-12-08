import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import config from '../../data/SiteConfig'
import Layout from '../layout'
import { Container } from '../styles/Styles'
import PostListing from '../components/PostListing'

const CategoryTemplate = ({ pageContext, data }) => {
  const { category } = pageContext
  const postEdges = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Helmet title={`Posts in category "${category}" - ${config.siteTitleShort}`} />
      <Container className="category-container">
        <h1>{category}</h1>
        <PostListing postEdges={postEdges} />
      </Container>
    </Layout>
  )
}

export default CategoryTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
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
