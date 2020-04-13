import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostCard from "../../../components/PostCard/postCard"
import Pagination from "../../../components/Pagination/pagination"
import BlogPostsWrapper from "./style"

type PostsProps = {}

const Posts: React.FunctionComponent<PostsProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allSitePage(filter: { path: { eq: "/page/1" } }) {
        nodes {
          context {
            numPages
            currentPage
          }
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 4
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 300)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD [<span>] MMM [</span>]")
              title
              description
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 1170, maxHeight: 690, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const Posts = Data.allMarkdownRemark.edges
  const TotalPage = Data.allSitePage.nodes[0].context.numPages
  const CurrentPage = Data.allSitePage.nodes[0].context.currentPage

  return (
    <BlogPostsWrapper>
      {Posts.map(({ node }: any) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <PostCard
            key={node.fields.slug}
            title={title}
            image={
              node.frontmatter.cover == null
                ? null
                : node.frontmatter.cover.childImageSharp.fluid
            }
            url={node.fields.slug}
            description={node.frontmatter.description || node.excerpt}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
          />
        )
      })}

      {TotalPage >> 1 ? (
        <Pagination
          nextLink="/page/2"
          currentPage={CurrentPage}
          totalPage={TotalPage}
        />
      ) : (
        ""
      )}
    </BlogPostsWrapper>
  )
}

export default Posts
