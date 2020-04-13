import * as React from 'react'
import BlogPageContainerWrapper from './style'
import Posts from './Posts'

type PersonalBlogProps = {}

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  ...props
}) => {
  return (
    <BlogPageContainerWrapper {...props}>
      <Posts />
    </BlogPageContainerWrapper>
  )
}

export default PersonalBlog
