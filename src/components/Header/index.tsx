import React from 'react'
import { Link } from 'gatsby'

import Logo from '../Logo'
import Wrapper from './Wrapper'
import NavContainer from './NavContainer'
import MenuContainer from './MenuContainer'
import NavLink from './NavLink'
import Toggle from '../Toggle'

interface Props {
  menuLinks: Array<any>
}

const Header: React.FC<Props> = ({ menuLinks, theme, toggleTheme }) => {
  return (
    <Wrapper>
      <NavContainer>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <MenuContainer>
          {menuLinks.map(link => (
            <div key={link.title}>
              <NavLink to={link.link}>{link.title}</NavLink>
            </div>
          ))}
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </MenuContainer>
      </NavContainer>
    </Wrapper>
  )
}

export default Header
