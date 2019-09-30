import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'

const PostTags = ({ tags }) => {
  return (
    <div className="post-tag-container">
      {tags &&
        tags.map((tag: string) => (
          <Link
            key={tag}
            style={{ textDecoration: 'none' }}
            to={`/tags/${_.kebabCase(tag)}`}
          >
            <button type="button">{tag}</button>
          </Link>
        ))}
    </div>
  )
}

export default PostTags
