import React from 'react'
import { Global, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

import {
  $h1Mobile,
  $h1,
  $h2Mobile,
  $h2,
  $mobile,
  $yellow,
  $borderRadius,
  $green,
  $error,
  $h3Mobile,
  $h3,
} from './Variables'

interface Theme {
  body: string
  text: string
}

const GlobalStyles = () => {
  const theme: Theme = useTheme()

  return (
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
          background: ${theme.body};
          color: ${theme.text};
        }

        section {
          @media (min-width: ${$mobile}) {
            margin: 3rem 0;
          }
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
          color: ${theme.text};
          font-size: ${$h2Mobile};
          font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial,
            sans-serif;

          @media (min-width: ${$mobile}) {
            font-size: ${$h2};
          }
        }

        h3 {
          font-size: ${$h3Mobile};
          font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial,
            sans-serif;
          margin-top: 30px;

          @media (min-width: ${$mobile}) {
            font-size: ${$h3};
            margin-top: 60px;
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

        blockquote {
          color: ${theme.text};
          border: 2px solid ${$yellow};
          background: lighten(${$yellow}, 28%);
          border-radius: ${$borderRadius};
          font-weight: 500;
          margin: 1.5rem 0;
          padding: 1.5rem;
          line-height: 1.6;
          font-size: 1rem;

          &.success {
            border: 2px solid ${$green};
            background: lighten(${$green}, 48%);
          }

          &.error {
            border: 2px solid ${$error};
            background: lighten(${$error}, 23%);
          }

          p {
            padding: 0;
            font-size: 1.15rem;

            &:last-of-type {
              margin-bottom: 0;
            }
          }

          a {
            color: #111;
            border-bottom: 2px solid ${$yellow} !important;

            &:hover,
            &:active,
            &:focus {
              color: #111 !important;
              background: lighten(${$yellow}, 28%) !important;
            }
          }

          code {
            margin: 1rem 0 0;
          }

          @media (min-width: ${$mobile}) {
            padding: 2rem;

            p {
              font-size: 1.3rem;
            }

            cite {
              font-size: 2rem;
            }
          }
        }
      `}
    />
  )
}

export default GlobalStyles
