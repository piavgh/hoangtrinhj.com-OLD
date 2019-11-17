import React, { FC } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Wrapper from './Wrapper'

interface InterfacePostItem {
  path: string
  title: string
}

interface Props {
  post: InterfacePostItem
  thumbnail: string
}

const PostItem: FC<Props> = props => {
  const { post, thumbnail } = props

  return (
    <div>
      <Link to={post.path} key={post.title}>
        <Wrapper>
          {thumbnail ? <Img fixed={thumbnail} /> : <div />}
          <h2>{post.title}</h2>
        </Wrapper>
      </Link>
    </div>
  )
}

export default PostItem
