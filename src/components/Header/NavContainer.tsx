import styled from '@emotion/styled'

import { $width } from '../../styles/Variables'

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${$width};
  height: 90px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem 0;
`

export default NavContainer
