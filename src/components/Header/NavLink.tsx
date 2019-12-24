import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { $grey, $mobile } from '../../styles/Variables'

const NavLink = styled(Link)`
  color: ${$grey};
  font-weight: 500;
  margin: 0 0.5rem;
  padding: 0.5rem 0.25rem;
  font-size: 12px;

  &:hover {
    color: #111;
  }

  @media (min-width: ${$mobile}) {
    margin: 0 1rem;
    padding: 1rem 0.5rem;
    font-size: 16px;
  }
`

export default NavLink
