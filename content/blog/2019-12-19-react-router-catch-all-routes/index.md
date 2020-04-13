---
author: Hoang Trinh
date: 2019-12-19 10:37:00+00:00
layout: post
slug: react-router-catch-all-routes
title: Handling 404 pages (catch all routes) with React Router v4
thumbnail: '../thumbnails/react.png'
cover: './preview.jpg'
template: post
categories:
  - React.js
tags:
  - react.js
  - react-router
---

A common use case for when you’re building an app with React Router is to have a “catch all” route that will be rendered if none of your other routes match. A good example of this is if you wanted your client-side router to render a 404 page. To see how this works, let’s first render a navbar with the following paths - `/`, `/will-match`, `/will-not-match`, and `/also/will/not/match`.

```javascript
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    ;<Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/will-match">Will Match</Link>
          </li>
          <li>
            <Link to="/will-not-match">Will Not Match</Link>
          </li>
          <li>
            <Link to="/also/will/not/match">Also Will Not Match</Link>
          </li>
        </ul>
      </div>
    </Router>
  }
}

export default App
```

Now that we have the navbar set up, let’s create three different components to render - `Home`, which will match on `/`, `WillMatch` which will match on `/will-match`, and `NoMatch`, which will be the catch-all component which will render if none of the other route’s match.

```javascript
const Home = () => <h1>Home</h1>

const WillMatch = () => <h3>Matched!</h3>

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
)
```

Now that we have the components which are going to be rendered, we need to actually render some `Routes`. `Home` and `WillMatch` are straight forward, they just get rendered as they normally would.

```javascript
render() {
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/will-match">Will Match</Link></li>
        <li><Link to="/will-not-match">Will Not Match</Link></li>
        <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
      </ul>

      <Route path="/" exact component={Home}/>
      <Route path="/will-match" component={WillMatch}/>
    </div>
  </Router>
}
```

But how do we render `NoMatch`? Here’s one tip that will get us closer. If you render a `Route` but don’t specify a `path` prop, that route will always be rendered. Knowing that, we could throw a new `Route` with no `path` that rendered `NoMatch` at the end of our routes?

```javascript
<Route path="/" exact component={Home}/>
<Route path="/will-match" component={WillMatch}/>
<Route component={NoMatch} />
```

Ok, cool. But it still doesn’t work. Now the app renders the `Home` and `WillMatch` components properly but it also always renders the `NoMatch` component no matter what path we’re on, because the `Route` has no `path`, and if it has no `path`, it will always be rendered… 👨‍💻

What we need is a way to tell React Router that we only want to render the first `Route` that matches, even if there’s more than one match. This way, if the `/` or `/will-match` paths match, the router will render the associated component, and if not, it will render the `NoMatch` component. The good news is React Router comes with a component that does exactly this and it’s called `Switch`. All we need to do is wrap our `Routes` inside of a `Switch` then just as we wanted, only the first match will ever be rendered.

```javascript
render() {
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/will-match">Will Match</Link></li>
        <li><Link to="/will-not-match">Will Not Match</Link></li>
        <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
      </ul>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/will-match" component={WillMatch}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
}
```

Now if the user isn’t at `/` or `/will-match`, the `NoMatch` component will be rendered.
