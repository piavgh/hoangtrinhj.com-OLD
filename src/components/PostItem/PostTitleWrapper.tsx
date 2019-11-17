import styled from '@emotion/styled'

interface PostTitleWrapperProps {
  simple?: boolean
}

const PostTitleWrapper = styled.div<PostTitleWrapperProps>`
  padding-left: ${props => !props.simple && '1.5rem'};
`

export default PostTitleWrapper
