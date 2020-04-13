import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../containers/Contact'

type ContactPageProps = {}

const ContactPage: React.FunctionComponent<ContactPageProps> = (props) => {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="MintColab is a business SaaS solutions provider. We help you save time on trivial tasks and focus on making revenue your unique value."
      />

      <Contact />
    </Layout>
  )
}

export default ContactPage
