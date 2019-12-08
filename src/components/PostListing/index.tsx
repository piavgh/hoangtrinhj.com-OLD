import React, { FC } from 'react'

import PostItem from '../PostItem'

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
  categories: string[]
}

interface Props {
  postEdges: Array<PostEdge>
  simple?: boolean
}

const PostListing: FC<Props> = props => {
  const { simple, postEdges } = props

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
        categories: postEdge.node.frontmatter.categories,
      })
    })
    return postList
  }

  const postList = getPostList()

  return (
    <section>
      {postList.map(post => {
        let thumbnail
        if (post.thumbnail) {
          thumbnail = post.thumbnail.childImageSharp.fixed
        }

        return <PostItem simple={simple} key={post.title} post={post} thumbnail={thumbnail} />
      })}
    </section>
  )
}

export default PostListing
