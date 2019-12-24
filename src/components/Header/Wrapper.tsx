import styled from '@emotion/styled'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  background-color: ${props => props.theme.body};
`

export default Wrapper
