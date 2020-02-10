import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import config from '../../data/SiteConfig'
import { formatDate, editOnGithub } from '../utils/global'

import SEO from '../components/SEO'
import PostHeader from '../components/PostHeader'
import PostMeta from '../components/PostHeader/PostMeta'
import PostTags from '../components/PostTags'
import { Container } from '../styles/Styles'
import './b16-tomorrow-dark.css'

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { slug } = pageContext
    const postNode = data.markdownRemark
    const post = postNode.frontmatter
    let thumbnail

    if (!post.id) {
      post.id = slug
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

    if (post.thumbnail) {
      thumbnail = post.thumbnail.childImageSharp.fixed
    }

    const date = formatDate(post.date)
    const githubLink = editOnGithub(post)
    const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(post.title)}&url=${
      config.siteUrl
    }/${post.slug}/&via=hoangtrinhj.com`

    return (
      <div>
        <Helmet>
          <title>{`${post.title} - ${config.siteTitleShort}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Container>
          <PostHeader thumbnail={thumbnail}>
            {thumbnail && <Img fixed={post.thumbnail.childImageSharp.fixed} />}

            <div className="flex">
              <h1>{post.title}</h1>
              <PostMeta>
                <time className="date">{date}</time>/
                <a className="twitter-link" href={twitterShare}>
                  Share
                </a>
                /
                <a
                  className="github-link"
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Edit
                  <span role="img" aria-label="Edit">
                    ✏️
                  </span>
                </a>
              </PostMeta>
              <PostTags tags={post.tags} />
            </div>
          </PostHeader>

          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </Container>
      </div>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        slug
        categories
        tags
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      fields {
        slug
        date
      }
    }
  }
`
