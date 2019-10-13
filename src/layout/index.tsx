import React from 'react'
import Helmet from 'react-helmet'

import GlobalStyles from './GlobalStyles'
import config from '../../data/SiteConfig'
import { Container } from '../components/Styles/Styles'
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
      <Container style={{ marginTop: '92px', minHeight: 'calc(100vh - 219px)' }}>
        {children}
      </Container>
      <Footer config={config} />
      <GlobalStyles />
    </div>
  )
}

export default MainLayout
