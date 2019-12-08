import React from 'react'
import { Global, css } from '@emotion/core'

import { $h1Mobile, $h1, $h2Mobile, $h2, $mobile } from './Variables'

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
        font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial,
          sans-serif;
      }

      body {
        margin: 0 auto;
        font-size: 1.2rem;
      }

      h1 {
        font-size: ${$h1Mobile};
        font-weight: 700;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial,
          sans-serif;

        @media (min-width: ${$mobile}) {
          font-size: ${$h1};
        }
      }

      h2 {
        font-size: ${$h2Mobile};
        font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial,
          sans-serif;

        @media (min-width: ${$mobile}) {
          font-size: ${$h2};
        }
      }

      a {
        color: #5183f5;
        text-decoration: none;
        font-weight: 600;
      }

      a.button {
        -webkit-appearance: none;
        display: inline-block;
        border: 2px solid #5183f5;
        border-radius: 4px;
        background: #5183f5;
        color: #fff;
        font-weight: 600;
        font-size: 1.1rem;
        text-transform: none;
        padding: 0.6rem 0.9rem;
        margin: 0 0 0.5rem;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        line-height: 1;
      }

      .twitter-follow-button {
        margin-bottom: 0;
      }
    `}
  />
)

export default GlobalStyles
