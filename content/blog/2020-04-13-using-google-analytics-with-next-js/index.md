---
author: Hoang Trinh
date: 2020-04-13 13:46:00+00:00
layout: post
slug: using-google-analytics-with-next-js
title: Using Google Analytics with Next.js
thumbnail: '../thumbnails/react.png'
cover: './preview.jpg'
template: post
categories:
  - Next.js
  - Google Analytics
  - React.js
  - Javascript
tags:
  - next.js
  - google-analytics
  - react.js
  - javascript
---

There are lots of tutorials online that give you instruction on how to set up Google Analytics with Next.js project.

But most of them requires you to use `react-ga`, a library that basically wrap Google Analytics logic inside a React component.

This is good, but I personally prefer a solution that:

- Does not require an external dependency (`react-ga` in this case)
- Easy to implement (you don't need to make a thousand lines of custom code)
- Is recommended officialy

My solution is based on an official example of Next.js team here: [Example app with analytics](https://github.com/zeit/next.js/tree/canary/examples/with-google-analytics)

You can also check this Github issue for some of other workarounds that people used: [Adding GA script tag? #160](https://github.com/zeit/next.js/issues/160)

Let's get started!

### Table of contents

1. Create GA Helper
2. Update \_document.js
3. Update \_app.js
4. Conclusion

### 1. Create GA Helper

This helper file stores your Google Analytics tracking ID and provide some methods that you need to track your page views.

Add this to `lib/gtag.js`:

```javascript
export const GA_TRACKING_ID = 'UA-XXXXXXXXX-X' // This is your GA Tracking ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
```

### Update \_document.js

Create a custom `_document.js` that will load our Google Analytics script for us. We will only load this script in production so that we don't track items locally. In the pages directory create a new file, `_document.js` and add the following code:

**File:** `pages/_document.js`

```javascript
import { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import FavIcon from '../assets/image/favicon.png'

import { GA_TRACKING_ID } from '../lib/gtag'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    const initialProps = await Document.getInitialProps(ctx)

    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production'

    return {
      ...initialProps,
      isProduction,
    }
  }

  render() {
    const { isProduction } = this.props

    return (
      <html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />

          {/* We only want to add the scripts if in production */}
          {isProduction && (
            <Fragment>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
```

### 3. Update \_app.js

You will trigger pageview event here, when the router detects route is changed.

**File:** `pages/_app.js`

```javascript
import React, { Fragment } from 'react'
import Router from 'next/router'

import * as gtag from 'common/src/lib/gtag'

// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}
```

### 4. Conclusion

Now you can see how easy it is to make Google Analytics works with Next.js without any external dependency.

Happy coding!
