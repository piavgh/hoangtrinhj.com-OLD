import React, { FC } from 'react'
import { Link } from 'gatsby'

interface PostEdge {
  node: any
}

interface PostList {
  path: string
  tags: Array<string>
  cover: string
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
        cover: postEdge.node.frontmatter.cover,
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
      {/* Your post list here. */}
      {postList.map(post => (
        <Link to={post.path} key={post.title}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </div>
  )
}

export default PostListing
