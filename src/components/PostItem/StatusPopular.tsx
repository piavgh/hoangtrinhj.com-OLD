import styled from '@emotion/styled'
import { lighten } from 'polished'

import { $green } from '../../styles/Colors'
import { $borderRadius, $mobile } from '../../styles/Variables'

const StatusPopular = styled.div`
  display: inline-block;
  font-size: 0.8rem;
  background: ${lighten(0.5, $green)};
  color: ${$green};
  border-radius: ${$borderRadius};
  padding: 0.5rem 0.75rem;
  text-align: center;

  @media (min-width: ${$mobile}) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`

export default StatusPopular
