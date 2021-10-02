import React from 'react'
import { graphql, Link } from 'gatsby'
import _ from 'lodash'
import urljoin from 'url-join'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostCard from '../components/PostCard/postCard'
import PostDetails from '../components/PostDetails/postDetails'
import { FacebookShareButton, TwitterShareButton, PinterestShareButton, RedditShareButton } from 'react-share'
import { IoLogoFacebook, IoLogoTwitter, IoLogoPinterest, IoLogoReddit } from 'react-icons/io'
import {
  BlogPostDetailsWrapper,
  RelatedPostWrapper,
  RelatedPostItems,
  RelatedPostTitle,
  RelatedPostItem,
  BlogPostFooter,
  PostShare,
  PostTags,
} from './templates.style'

const BlogPostTemplate = (props: any) => {
  const post = props.data.markdownRemark
  const { edges } = props.data.allMarkdownRemark
  const title = post.frontmatter.title
  const slug = post.fields.slug
  const siteUrl = props.data.site.siteMetadata.siteUrl
  const shareUrl = urljoin(siteUrl, slug)

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <BlogPostDetailsWrapper>
        <PostDetails
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          preview={post.frontmatter.cover == null ? null : post.frontmatter.cover.childImageSharp.fluid}
          description={post.html}
        />

        <BlogPostFooter>
          {post.frontmatter.tags == null ? null : (
            <PostTags className="post_tags">
              {post.frontmatter.tags.map((tag: string, index: number) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )}
          <PostShare>
            <span>Share This:</span>
            <FacebookShareButton url={shareUrl} quote={post.excerpt}>
              <IoLogoFacebook />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
              <IoLogoTwitter />
            </TwitterShareButton>
            <PinterestShareButton url={shareUrl} media={urljoin(siteUrl, post.frontmatter.cover.publicURL)}>
              <IoLogoPinterest />
            </PinterestShareButton>
            <RedditShareButton url={shareUrl} title={`${post.frontmatter.title}`}>
              <IoLogoReddit />
            </RedditShareButton>
          </PostShare>
        </BlogPostFooter>
      </BlogPostDetailsWrapper>

      {edges.length !== 0 && (
        <RelatedPostWrapper>
          <RelatedPostTitle>Related Posts</RelatedPostTitle>
          <RelatedPostItems>
            {edges.map(({ node }: any) => (
              <RelatedPostItem key={node.fields.slug}>
                <PostCard
                  title={node.frontmatter.title || node.fields.slug}
                  url={node.fields.slug}
                  image={node.frontmatter.cover == null ? null : node.frontmatter.cover.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                />
              </RelatedPostItem>
            ))}
          </RelatedPostItems>
        </RelatedPostWrapper>
      )}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $tag: [String!]) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMM, YYYY")
        description
        tags
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1170, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: $tag } }, fields: { slug: { ne: $slug } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 370, maxHeight: 220, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
