import React from 'react'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'

import { Container } from '../Styles/Styles'

interface ListLinkProps {
  to: string
}

interface Props {
  title: string
  menuLinks: Array<any>
}

const ListLink: React.FC<ListLinkProps> = ({ to, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </li>
)

const Header: React.FC<Props> = ({ title, menuLinks }) => {
  return (
    <nav
      className="nav"
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 3, width: '100%', background: '#fff' }}
    >
      <div style={{ height: '90px' }}>
        <Grid container alignItems="center" spacing={2} style={{ height: '100%' }}>
          <Grid item xs={3}>
            <Link to="/" style={{ textShadow: `none` }}>
              <h3 style={{ display: `inline` }}>{title}</h3>
            </Link>
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
      </div>
    </nav>
  )
}

export default Header
