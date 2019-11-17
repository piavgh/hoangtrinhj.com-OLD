import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;

  & > h2 {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.3;
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 0;
    transition-delay: 500ms;
  }
`

export default Wrapper
