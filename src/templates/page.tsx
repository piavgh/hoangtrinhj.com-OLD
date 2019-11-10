import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import { Container } from '../styles/Styles'

export default class PageTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.markdownRemark
    const page = postNode.frontmatter

    if (!page.id) {
      page.id = slug
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${page.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Container>
          <article>
            <header className="page-header">
              <h1>{page.title}</h1>
            </header>
            <div className="page" dangerouslySetInnerHTML={{ __html: postNode.html }} />
          </article>
        </Container>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        template
      }
      fields {
        slug
        date
      }
    }
  }
`
