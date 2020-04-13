---
author: Hoang Trinh
date: 2020-04-03 10:24:00+00:00
layout: post
slug: next-js-with-styled-components
title: Using Next.js ▲ with styled-components 💅 the easy way
thumbnail: '../thumbnails/react.png'
cover: './preview.jpg'
template: post
categories:
  - Next.js
  - Styled Components
  - React.js
  - Javascript
tags:
  - next.js
  - styled-components
  - react.js
  - javascript
---

When you need server-side rendering React app. Next.js is the best choice. And when it comes to styling react component first thing comes in my mind is styled-components. Although it depends on your preference.

Let say you want to pair Next.js with styled-components. But use styled-components with Next.js is not straightforward. It’s a little bit tricky. Let see how we can achieve that.

### Table of contents

1. [Setup Next.js](#1-setup-nextjs-project)
2. [Create our first Next.js page](#2-create-our-first-nextjs-page)
3. [Install styled-components](#3-install-styled-components)
4. [Install and setup styled-components Babel plugin](#4-install-and-setup-styled-components-babel-plugin)
5. [Create \_document.js file](#5-create-custom-_documentjs-file)
6. [Result](#6-result)

### 1. Setup Next.js project

We start by creating a new directory. And cd into this directory.

```shell
mkdir next-with-styled-component && cd next-with-styled-component
```

Now we need to create our `package.json` file. And then run the following command into your terminal.

```shell
npm init
```

It will create a `package.json` file. Now we need to install all Next.js related dependency for our project. Run the following command into your cmd/terminal.

```shell
npm install --save next react react-dom
```

It will create a `node_module` folder and install all Next.js releated dependency into it.

Now open a package.json file into your favorite editor. Add the following content into it.

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

### 2. Create our first Next.js page

Create pages directory and create file name `index.js` under pages directory. Now open `index.js` file and paste the following content into it.

```javascript
function Home() {
  return <div>Hello world!</div>
}

export default Home
```

Now run our first page into the browser using the following command.

```shell
npm run dev
```

It start development server at [http://localhost:3000](http://localhost:3000).

### 3. Install styled-components

Now it time to add styled-component into our project. You can add styled-component using the following command.

```shell
npm install --save styled-components
```

### 4. Install and setup styled-components Babel plugin

We also need `babel-plugin-styled-components`. It helps to consistently hashed component classNames between environments (a must for server-side rendering).

You can install `babel-plugin-styled-components` as a dev dependency using the following command.

```shell
npm install --save-dev babel-plugin-styled-components
```

Then create a `.babelrc` file in the root of the project.

Open `.babelrc` file adds the following things.

> 1. Add “next/babel” as preset
> 2. Add a styled-components plugin and set ssr option to true

Now your .babelrc file looks something this.

```json
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
```

### 5. Create custom \_document.js file

To render our styled-compoents at server side we need to override `_document.js`. for this create a `_document.js` file under pages folder. and add the following content into it.

```javascript
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
```

Here the basic idea is every time our page load at server side we need to insert our stylesheet into the document.

### 6. Result

[Click here to open CodeSandbox](https://codesandbox.io/s/nextjs-with-styledcomponent-c5y2x)
