import React from 'react'
import { Global, css } from '@emotion/core'

import { $mobile } from './Variables'

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      html {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 84% !important;
      }

      body {
        margin: 0 auto;
        font-size: 1.2rem;
      }

      h2 {
        font-size: 1.5rem;

        @media (min-width: ${$mobile}) {
          font-size: 2.2rem;
        }
      }

      a {
        text-decoration: none;
      }

      .twitter-follow-button {
        margin-bottom: 0;
      }
    `}
  />
)

export default GlobalStyles
