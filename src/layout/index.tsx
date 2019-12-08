import React from 'react'
import { Helmet } from 'react-helmet'

import GlobalStyles from '../styles/GlobalStyles'
import config from '../../data/SiteConfig'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

const MainLayout = props => {
  const { children } = props
  return (
    <div>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <Header menuLinks={config.menuLinks} />
      <MainContent>{children}</MainContent>
      <Footer config={config} />
      <GlobalStyles />
    </div>
  )
}

export default MainLayout
