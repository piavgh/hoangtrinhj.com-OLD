import styled from '@emotion/styled'

import { $light } from '../../styles/Colors'

interface WrapperProps {
  simple?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  margin: 0 -1rem;
  padding: ${props => (props.simple ? '0.5rem 1rem' : `1rem 2rem`)};
  border: 2px solid transparent;
  border-bottom-color: ${props => !props.simple && $light};

  .gatsby-image-wrapper {
    margin-right: 1rem;
    height: ${props => (props.simple ? '30px' : '50px')} !important;
    width: ${props => (props.simple ? '30px' : '50px')} !important;
  }
`

export default Wrapper
