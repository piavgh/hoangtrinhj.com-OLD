import styled from "styled-components"

const BlogPostsWrapper = styled.div`
  margin: 0 auto;
  padding-top: 120px;
  position: relative;
  .post_card {
    margin-bottom: 120px;
    @media (max-width: 990px) {
      margin-bottom: 90px;
    }
    @media (max-width: 575px) {
      margin-bottom: 60px;
    }
  }
  @media (min-width: 990px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  }
  @media (min-width: 1400px) {
    width: 1170px;
  }
  @media (max-width: 990px) {
    padding: 80px 45px 0 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }
`
export default BlogPostsWrapper
