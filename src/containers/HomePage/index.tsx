import * as React from "react"
import PersonalBlogWrapper from "./style"
import Intro from "./Intro"

type PersonalBlogProps = {}

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  ...props
}) => {
  return (
    <PersonalBlogWrapper {...props}>
      <Intro />
    </PersonalBlogWrapper>
  )
}

export default PersonalBlog
