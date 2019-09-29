import React, { Component } from 'react'
import './UserLinks.css'

const UserLinks = ({ config, labeled }) => {
  const getLinkElements = () => {
    const { userLinks } = config
    return userLinks.map(link => (
      <button key={link.label} href={link.url}>
        {labeled ? link.label : ''}
      </button>
    ))
  }

  const { userLinks } = config
  if (!userLinks) {
    return null
  }
  return <div className="user-links">{getLinkElements()}</div>
}

export default UserLinks
