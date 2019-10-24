import React from 'react'
import { Global, css } from '@emotion/core'

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

      a {
        display: block;
        text-decoration: none;
        font-weight: 500;
      }

      .twitter-follow-button {
        margin-bottom: 0;
      }
    `}
  />
)

export default GlobalStyles
