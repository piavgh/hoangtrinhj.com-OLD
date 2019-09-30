import React from 'react'
import './UserLinks.css'

const UserLinks = ({ config, labeled }) => {
  const getLinkElements = () => {
    const { userLinks } = config
    return userLinks.map(link => (
      <a key={link.label} href={link.url}>
        {labeled ? link.label : ''}
      </a>
    ))
  }

  const { userLinks } = config
  if (!userLinks) {
    return null
  }
  return <div className="user-links">{getLinkElements()}</div>
}

export default UserLinks
