import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { $grey } from '../../styles/Colors'

const NavLink = styled(Link)`
  color: ${$grey};
  font-weight: 500;
  margin: 0 1rem;
  padding: 1rem 0.5rem;

  &:hover {
    color: #111;
  }
`

export default NavLink
