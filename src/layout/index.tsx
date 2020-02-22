import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'emotion-theming'

import { lightTheme, darkTheme } from '../styles/Theme'
import GlobalStyles from '../styles/GlobalStyles'
import config from '../../data/SiteConfig'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

const MainLayout = props => {
  const { children } = props

  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <Header menuLinks={config.menuLinks} theme={theme} toggleTheme={toggleTheme} />
      <MainContent>{children}</MainContent>
      <Footer config={config} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MainLayout
