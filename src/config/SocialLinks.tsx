import React from 'react'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMdMail,
} from 'react-icons/io'
import { FaStackOverflow } from 'react-icons/fa'

const SocialLinks = [
  {
    icon: <IoMdMail />,
    url: 'mailto:hoang.trinhj@gmail.com',
    tooltip: 'Email me',
  },
  {
    icon: <IoLogoGithub />,
    url: 'https://github.com/piavgh',
    tooltip: 'Github',
  },
  {
    icon: <FaStackOverflow />,
    url: 'https://stackoverflow.com/users/2667212/hoang-trinh',
    tooltip: 'StackOverflow',
  },
  {
    icon: <IoLogoLinkedin />,
    url: 'https://linkedin.com/in/hoangtrinhj',
    tooltip: 'LinkedIn',
  },
  {
    icon: <IoLogoTwitter />,
    url: 'https://twitter.com/hoangtrinhj',
    tooltip: 'Twitter',
  },
]

export default SocialLinks
