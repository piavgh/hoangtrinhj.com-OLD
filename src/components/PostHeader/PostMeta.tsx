import styled from '@emotion/styled'

import { $lightFontColor, $primaryColor, $mobile } from '../../styles/Variables'

const PostMeta = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.text};
  display: inline-block;
  margin-bottom: 1rem;

  .date {
    margin-right: 0.5rem;
  }

  a {
    color: ${props => props.theme.text};

    &.comment-link,
    &.twitter-link,
    &.github-link {
      margin: 0 0.5rem;
    }
  }

  @media (min-width: ${$mobile}) {
    font-size: 0.9rem;
  }
`

export default PostMeta
