import styled from '@emotion/styled'

import { $mobile, $light } from '../../styles/Variables'

interface WrapperProps {
  simple?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  padding: ${props => (props.simple ? '0.5rem 0' : `1rem 0`)};
  border-bottom: 2px solid transparent;
  border-bottom-color: ${props => !props.simple && props.theme.borderColor};

  &:hover {
    background-color: ${props => props.theme.hoverColor};
  }

  .gatsby-image-wrapper {
    margin-right: 1rem;
    width: 30px !important;
    height: 30px !important;
    min-width: 30px !important;
    min-height: 30px !important;
  }

  @media (min-width: ${$mobile}) {
    padding: ${props => (props.simple ? '0.5rem 1rem' : `1rem 2rem`)};

    .gatsby-image-wrapper {
      width: ${props => (props.simple ? '30px' : '50px')} !important;
      height: ${props => (props.simple ? '30px' : '50px')} !important;
      min-width: ${props => (props.simple ? '30px' : '50px')} !important;
      min-height: ${props => (props.simple ? '30px' : '50px')} !important;
    }
  }
`

export default Wrapper
