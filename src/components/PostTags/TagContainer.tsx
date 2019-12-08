import styled from '@emotion/styled'
import { lighten, darken } from 'polished'

import { $borderRadius, $mobile, $light, $fontColor, $secondaryColor } from '../../styles/Variables'

const TagContainer = styled.div`
  span {
    display: inline-block;
    padding: 0.3rem 0.5rem;
    background: ${$light};
    border-radius: ${$borderRadius};
    color: ${lighten(0.1, $fontColor)};
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0 0.5rem 0.5rem 0;

    .count {
      color: ${$secondaryColor};
      font-weight: 700;
      margin-left: 0.25rem;
    }

    &:hover,
    &:active,
    &:focus {
      background: ${darken(0.05, $light)};
      color: ${$fontColor};
    }
  }

  &.articles-page-tags {
    margin-bottom: 1rem;
  }

  @media (min-width: ${$mobile}) {
    span {
      font-size: 0.9rem;
      font-weight: 500;
      padding: 0.3rem 0.8rem;

      .count {
        margin-left: 0.5rem;
      }
    }

    &.articles-page-tags {
      margin-bottom: 2rem;
      display: flex;

      a {
        flex: 1;

        span {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`

export default TagContainer
