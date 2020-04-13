import * as React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { IoMdArrowRoundBack } from "react-icons/io"
import {
  NotFoundWrapper,
  NotFoundContent,
  NotFoundImage,
  Goback,
  Icon,
} from "./style"

interface NotFoundProps {}

const NotFound: React.FunctionComponent<NotFoundProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/404.png/" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
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
    <NotFoundWrapper>
      <NotFoundContent>
        <h1>This Page Was Lost</h1>
        <p>
          The Page You are looking for isn’t available. Try to search again or
          use the Go Back button below.
        </p>
        <Goback>
          <Link to="/">
            <Icon>
              <IoMdArrowRoundBack />
            </Icon>
            Go Back
          </Link>
        </Goback>
      </NotFoundContent>
      <NotFoundImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </NotFoundImage>
    </NotFoundWrapper>
  )
}

export default NotFound
