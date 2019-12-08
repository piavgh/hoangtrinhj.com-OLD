import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'

import TagContainer from './TagContainer'

interface Props {
  tags: Array<string>
}

const PostTags = ({ tags }: Props) => {
  return (
    <TagContainer>
      {tags &&
        tags.map((tag: string) => (
          <Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${_.kebabCase(tag)}`}>
            <span>{tag}</span>
          </Link>
        ))}
    </TagContainer>
  )
}

export default PostTags
