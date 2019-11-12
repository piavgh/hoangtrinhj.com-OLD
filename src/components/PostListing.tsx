import React, { FC } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { PostItem } from '../styles/Styles'

interface PostEdge {
  node: any
}

interface PostList {
  path: string
  tags: Array<string>
  thumbnail: any
  title: string
  date: string
  excerpt: string
  timeToRead: number
}

interface Props {
  postEdges: Array<PostEdge>
}

const PostListing: FC<Props> = ({ postEdges }) => {
  const getPostList = () => {
    const postList: Array<PostList> = []
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        thumbnail: postEdge.node.frontmatter.thumbnail,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      })
    })
    return postList
  }

  const postList = getPostList()

  return (
    <div>
      {postList.map(post => {
        let thumbnail
        if (post.thumbnail) {
          thumbnail = post.thumbnail.childImageSharp.fixed
        }

        return (
          <Link to={post.path} key={post.title}>
            <PostItem>
              {thumbnail ? <Img fixed={thumbnail} /> : <div />}
              <h2>{post.title}</h2>
            </PostItem>
          </Link>
        )
      })}
    </div>
  )
}

export default PostListing