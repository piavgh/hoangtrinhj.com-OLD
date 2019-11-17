import styled from '@emotion/styled'
import { lighten, darken } from 'polished'

import { $yellow } from '../../styles/Colors'
import { $borderRadius, $mobile } from '../../styles/Variables'

const StatusNew = styled.div`
  display: inline-block;
  font-size: 0.9rem;
  background-color: ${lighten(0.26, $yellow)};
  color: ${darken(0.18, $yellow)};
  border-radius: ${$borderRadius};
  padding: 0.5rem 0.75rem;
  text-align: center;

  @media (min-width: ${$mobile}) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`

export default StatusNew
