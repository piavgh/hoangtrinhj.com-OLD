import styled from '@emotion/styled'
import Img from 'gatsby-image'

const PostThumbnail = styled(Img)`
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 0;
    transition-delay: 500ms;
  }
`

export default PostThumbnail
