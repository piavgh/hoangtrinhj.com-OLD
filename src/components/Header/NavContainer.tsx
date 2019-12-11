import styled from '@emotion/styled'

import { $mobile, $width } from '../../styles/Variables'

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${$width};
  height: 55px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem 0;

  @media (min-width: ${$mobile}) {
    height: 90px;
  }
`

export default NavContainer
