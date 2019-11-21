import styled from '@emotion/styled'

import { $mobile } from '../../styles/Variables'

const Img = styled.img`
  margin: 0;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;

  @media (min-width: ${$mobile}) {
    width: 64px;
    height: 64px;
  }
`

export default Img
