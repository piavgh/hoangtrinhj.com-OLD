---
author: Hoang Trinh
date: 2021-07-11 16:19:00+00:00
layout: post
slug: deploy-rust-rocket-on-heroku-error-r10-boot-timeout
title: Error R10 (Boot timeout) when deploying Rust Rocket project on Heroku
cover: './preview.jpg'
template: post
categories:
- Rust
tags:
- rust
---

If you've followed [this series](https://www.youtube.com/playlist?list=PLzIwronG0sE56c6hDYOKW3-rPxmIyttoe), I want to congratulate you, because you are making a great bookmarking tool that is usable right now.

But at the step ["#11 - Deploy to Heroku"](https://www.youtube.com/watch?v=oNoTS-itpi8&list=PLzIwronG0sE56c6hDYOKW3-rPxmIyttoe&index=12), I guess that you had this error after checking `heroku logs --tail`:

> Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch

The reason is very simple, but it was hard for me to google to find the result.

Luckily, I found it. The author of Rocket framework explained it [here](https://github.com/SergioBenitez/Rocket/issues/1457#issuecomment-723341975)

> Rocket changed its default listening address to 127.0.0.1 across all profiles, including release. This means that, by default, the server only listens on the local interface at 127.0.0.1. To listen on the global interface, the address must be set to 0.0.0.0.

So the solution to this issue is very simple, you need to edit your `Procfile` like this:

```shell
web: ROCKET_PORT=$PORT ROCKET_ADDRESS=0.0.0.0 ./target/release/app
```

Hopefully, you can find this answer on your first Google search query.

See you next time!

You can find all the code in my repository: [https://github.com/piavgh/rust-bookmarking-tool](https://github.com/piavgh/rust-bookmarking-tool)
