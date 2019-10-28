import React from 'react'
import { Link } from 'gatsby'
import UserLinks from './UserLinks'
import './Footer.css'

const Footer = ({ config }) => {
  const url = config.siteRss
  const { copyright } = config

  if (!copyright) {
    return null
  }

  return (
    <footer className="footer">
      <UserLinks config={config} labeled />
      <div className="notice-container">
        <h4>{copyright}</h4>
      </div>
    </footer>
  )
}

export default Footer
