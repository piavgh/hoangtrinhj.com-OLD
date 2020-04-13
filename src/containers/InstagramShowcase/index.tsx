import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import InstShowcaseWrapper, {
  InstashowcaseCol,
  InstashowcaseRow,
  ShowcaseTitle,
} from "./style"
import InstagramGrid from "../../components/InstagramGrid/instagramGrid"
import { IoLogoInstagram } from "react-icons/io"

interface ShowcaseProps {}

const InstagramShowcase: React.FunctionComponent<ShowcaseProps> = props => {
  const InstaData = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 5) {
        edges {
          node {
            id
            likes
            comments
            localFile {
              childImageSharp {
                fluid(maxWidth: 350, maxHeight: 350, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const InstaPosts = InstaData.allInstaNode.edges

  return (
    <InstShowcaseWrapper>
      <ShowcaseTitle>
        <IoLogoInstagram
          style={{
            display: "block",
            marginRight: "12px",
            fontSize: "20px",
          }}
        />
        Me On Instagram
      </ShowcaseTitle>
      <InstashowcaseRow>
        {InstaPosts && (
          <>
            {InstaPosts.map(({ node }: any) => (
              <InstashowcaseCol key={node.id}>
                <InstagramGrid
                  image={node.localFile.childImageSharp.fluid}
                  like={node.likes}
                  comment={node.comments == null ? "0" : node.comments}
                  url={`https://www.instagram.com/p/${node.id}`}
                />
              </InstashowcaseCol>
            ))}
          </>
        )}
      </InstashowcaseRow>
    </InstShowcaseWrapper>
  )
}

export default InstagramShowcase
