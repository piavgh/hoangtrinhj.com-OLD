import styled from '@emotion/styled'

import { $mobile } from '../../styles/Variables'

const Img = styled.img`
  margin: 0;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;

  @media (min-width: ${$mobile}) {
    width: 72px;
    height: 72px;
  }
`

export default Img
