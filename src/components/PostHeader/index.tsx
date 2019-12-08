import styled from '@emotion/styled'

import { $mobile } from '../../styles/Variables'

interface Props {
  thumbnail: string
}

const PostHeader = styled.header<Props>`
  display: ${props => (props.thumbnail ? 'grid' : 'flex')};
  margin-bottom: 30px;

  .gatsby-image-wrapper {
    height: 50px !important;
    width: 50px !important;
  }

  .flex {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin: 0.5rem 0;
    font-weight: 600;
  }

  @media (min-width: ${$mobile}) {
    display: grid;
    grid-template-columns: 180px 1fr;
    margin-bottom: 80px;

    .gatsby-image-wrapper {
      height: 150px !important;
      width: 150px !important;
    }

    h1 {
      margin: 0 0 0.5rem 0;
    }
  }
`

export default PostHeader
