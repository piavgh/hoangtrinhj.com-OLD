import styled from '@emotion/styled'

import { $mobile } from '../../styles/Variables'

const ToggleContainer = styled.div`
  cursor: pointer;

  width: 2rem;
  height: 1.5rem;

  svg {
    height: auto;
    width: 1.5rem;
    transition: all 0.3s linear;
  }

  @media (min-width: ${$mobile}) {
    width: 4rem;
    height: 2.5rem;

    svg {
      width: 2.5rem;
    }
  }
`

export default ToggleContainer
