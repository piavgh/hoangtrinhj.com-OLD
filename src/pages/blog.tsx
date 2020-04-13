import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogPageContainer from '../containers/BlogPage'
import SEO from '../components/seo'

const BlogPage = (props: any) => {
  const { data } = props

  return (
    <Layout>
      <SEO title="Articles" description={data.site.siteMetadata.description} />
      <BlogPageContainer />
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
