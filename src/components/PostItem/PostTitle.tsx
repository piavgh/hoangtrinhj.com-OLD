import styled from '@emotion/styled'

import { $mobile } from '../../styles/Variables'

const PostTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;

  @media (min-width: ${$mobile}) {
    font-size: 1.3rem;
  }
`

export default PostTitle
