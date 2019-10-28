import React from 'react'

import { StyledUserLinks, FooterLink } from '../styles/Styles'

const UserLinks = ({ config, labeled }) => {
  const getLinkElements = () => {
    const { userLinks } = config

    return userLinks.map(link => (
      <FooterLink key={link.label} href={link.url}>
        {labeled ? link.label : ''}
      </FooterLink>
    ))
  }

  const { userLinks } = config

  if (!userLinks) {
    return null
  }

  return <StyledUserLinks>{getLinkElements()}</StyledUserLinks>
}

export default UserLinks
