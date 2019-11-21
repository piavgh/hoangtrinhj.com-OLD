import React from 'react'
import { Link } from 'gatsby'

import Logo from '../Logo'
import Wrapper from './Wrapper'
import NavContainer from './NavContainer'
import NavLinkContainer from './NavLinkContainer'
import NavLink from './NavLink'

interface Props {
  menuLinks: Array<any>
}

const Header: React.FC<Props> = ({ menuLinks }) => {
  return (
    <Wrapper>
      <NavContainer>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div>
          {menuLinks.map(link => (
            <NavLinkContainer key={link.title}>
              <NavLink to={link.link}>{link.title}</NavLink>
            </NavLinkContainer>
          ))}
        </div>
      </NavContainer>
    </Wrapper>
  )
}

export default Header
