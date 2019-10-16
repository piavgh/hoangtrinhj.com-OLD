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
      }

      body {
        margin: 0 auto;
        font-size: 1.2rem;
      }

      a {
        display: block;
        text-decoration: none;
        background-color: transparent;
        color: rgba(0,0,0,.45)
        font-weight: 500;

        &:hover {
          color: #f2f2f2;
        }

        &:visited {
          color: rgba(0, 0, 0, 0.45);
        }

        &:active {
          color: #f2f2f2;
        }

        &:focus {
          color: #f2f2f2;
        }
      }
    `}
  />
)

export default GlobalStyles
