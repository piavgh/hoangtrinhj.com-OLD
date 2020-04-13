import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../containers/About'

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = (props) => {
  return (
    <Layout>
      <SEO
        title="About Me"
        description="MintColab is a business SaaS solutions provider. We help you save time on trivial tasks and focus on making revenue your unique value."
      />

      <About />
    </Layout>
  )
}

export default AboutPage
