import styled from '@emotion/styled'

import { $lightFontColor, $primaryColor, $mobile } from '../../styles/Variables'

const PostMeta = styled.div`
  font-size: 0.8rem;
  color: ${$lightFontColor};
  display: inline-block;
  margin-bottom: 1rem;

  .date {
    margin-right: 0.5rem;
  }

  a {
    color: ${$lightFontColor};

    &.comment-link,
    &.twitter-link,
    &.github-link {
      margin: 0 0.5rem;
    }

    &:hover {
      color: ${$primaryColor};
    }
  }

  @media (min-width: ${$mobile}) {
    font-size: 0.9rem;
  }
`

export default PostMeta
