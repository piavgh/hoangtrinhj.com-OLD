import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import SocialProfile from 'components/SocialProfile/SocialProfile'
import SocialLinks from 'config/SocialLinks'
import { AboutWrapper, AboutImage, AboutPageTitle, AboutDetails, AboutDesciption, SocialProfiles } from './style'

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = (props) => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>About Me</h2>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>Hi there, what’s up?</h2>
        <AboutDesciption>I’m Hoang Trinh, a web developer, technical writer from Ha Noi, Viet Nam.</AboutDesciption>
        <AboutDesciption>
          At present, I am working full time at Linagora, a company dedicated to open-source solution. We provide tools
          for enterprise such as mail, calendar, contact management, chat, video conference, file sharing ...
        </AboutDesciption>
        <AboutDesciption>
          At night, I am building products on Google ecosystem (G Suite and Google Cloud Platform).
        </AboutDesciption>
        <AboutDesciption>
          This is my recent product:{' '}
          <a
            href="https://gsuite.google.com/marketplace/app/choice_removal/570025479237"
            target="_blank"
            rel="noopener noreferrer"
          >
            Choice Removal
          </a>
          , which has more than 300k users in just 3 months after launching.
        </AboutDesciption>
        <AboutDesciption>
          I work mainly as a backend developer (Node.js, Golang) but I can also work with React.js. My main focus now is
          to become a cloud native engineer.
        </AboutDesciption>
        <AboutDesciption>
          You can check my resume here for more information:{' '}
          <a href="https://resume.hoangtrinhj.com/" target="_blank" rel="noopener noreferrer">
            resume.hoangtrinhj.com
          </a>
          .
        </AboutDesciption>
        <AboutDesciption>
          In my free time, I try to learn as much as I can about Machine Learning / Deep Learning with Python. Because I
          believe those technologies will soon change our world drastically, in a better way (but yeah, I am also a fan
          of the{' '}
          <a href="https://en.wikipedia.org/wiki/Terminator_(character)" target="_blank" rel="noopener noreferrer">
            Terminator
          </a>
          ).
        </AboutDesciption>
        <AboutDesciption>
          I started this website as a place to document everything I learned. I love self-learning and write about
          everything I know.
        </AboutDesciption>
        <AboutDesciption>
          I aim to create a beautiful corner of the web free of ads, sponsored posts, newsletter pop-ups, affiliate
          links, and the rest of the annoying noise we are so accustomed to seeing on the internet these days.
        </AboutDesciption>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
