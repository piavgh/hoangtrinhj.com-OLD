import React from 'react'
import Grid from '@material-ui/core/Grid'

import { NavContainer, BrandLink, NavLink } from '../styles/Styles'

interface ListLinkProps {
  to: string
}

interface Props {
  title: string
  menuLinks: Array<any>
}

const ListLink: React.FC<ListLinkProps> = ({ to, children }) => (
  <li style={{ display: `inline-block`, marginBottom: 0 }}>
    <NavLink to={to}>{children}</NavLink>
  </li>
)

const Header: React.FC<Props> = ({ title, menuLinks }) => {
  return (
    <nav
      className="nav"
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 3, width: '100%', background: '#fff' }}
    >
      <NavContainer style={{ height: '90px' }}>
        <Grid container alignItems="center" spacing={2} style={{ height: '100%' }}>
          <Grid item xs={3}>
            <BrandLink to="/" style={{ textShadow: `none` }}>
              <h3 style={{ display: `inline` }}>{title}</h3>
            </BrandLink>
          </Grid>
          <Grid item xs={9}>
            <ul style={{ listStyle: `none`, float: `right`, margin: 0 }}>
              {menuLinks.map(link => (
                <ListLink key={link.title} to={link.link}>
                  {link.title}
                </ListLink>
              ))}
            </ul>
          </Grid>
        </Grid>
      </NavContainer>
    </nav>
  )
}

export default Header
