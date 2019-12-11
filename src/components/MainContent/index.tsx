import styled from '@emotion/styled'

import { $mobile } from '../../styles/Variables'

const MainContent = styled.div`
  margin-top: 55px;
  padding: 40px 0 0;
  min-height: calc(100vh - 162px);

  @media (min-width: ${$mobile}) {
    margin-top: 92px;
    min-height: calc(100vh - 219px);
    padding: 60px 0 0;
  }
`

export default MainContent
