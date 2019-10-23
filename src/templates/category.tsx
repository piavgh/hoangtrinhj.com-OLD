import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import { Container } from '../styles/Styles'
import PostListing from '../components/PostListing/PostListing'
import config from '../../data/SiteConfig'

const CategoryTemplate = ({ pageContext, data }) => {
  const { category } = pageContext
  const postEdges = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Container className="category-container">
        <Helmet title={`Posts in category "${category}" | ${config.siteTitle}`} />
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
            cover
            date
          }
        }
      }
    }
  }
`
