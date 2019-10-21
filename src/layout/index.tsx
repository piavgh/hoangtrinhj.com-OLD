import React from 'react'
import Helmet from 'react-helmet'

import GlobalStyles from '../styles/GlobalStyles'
import config from '../../data/SiteConfig'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = props => {
  const { children } = props
  return (
    <div>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <Header title={config.siteTitleShort} menuLinks={config.menuLinks} />
      <div style={{ marginTop: '92px', minHeight: 'calc(100vh - 219px)' }}>{children}</div>
      <Footer config={config} />
      <GlobalStyles />
    </div>
  )
}

export default MainLayout
