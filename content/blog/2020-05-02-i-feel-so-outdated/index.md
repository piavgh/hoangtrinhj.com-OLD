---
author: Hoang Trinh
date: 2020-05-02 08:11:00+00:00
layout: post
slug: i-feel-so-outdated
title: I feel so outdated
thumbnail: '../thumbnails/react.png'
cover: './preview.jpg'
template: post
categories:
  - Testing
  - CI/CD
  - Scrum
  - Dev Life
tags:
  - testing
  - ci/cd
  - scrum
  - dev-life
---

I remember the old days, when people usually ask "Are you using PHP or ASP.NET?", when the most sophisticated technology at the frontend is jQuery, when we can deploy a website using Filezilla, or when Docker is not a common term yet ...

It's just 6 or 7 years ago ...

Technology is moving so fast!

---

Recently, I've just joined a new company. After working in 3 others (both product and outsourcing companies), I thought I know a lot about software development. I know some backend languages: Node.js, Golang, Python, PHP. Also, my frontend skill with React.js is pretty good: redux, redux-saga, styled-components, webpack, ... I know all those stuff.

Turn out, it's not, I don't know a lot about software development!

There are at least 3 things that I'm lack of while busy chasing cool programming languages, frameworks, libraries:

[1. Automation Testing](#1-automation-testing)

[2. CI/CD](#2-cicd)

[3. Scrum (or Agile process framework in general)](#3-scrum)

And now I can see how these 3 things are combined to make the software development a much faster and enjoyable process.

### 1. Automation Testing

In my new company, there are more test cases than I've ever seen in my whole life.

That's a lot. The testing stage when CI runs can take half an hour or even more.

But those test cases make us so confident when we need to add a new feature, to fix a small bug, or just to refactor an old piece of code.

The more important thing is: we don't need QA employees to do the manual testing any time a single developer pushes a new code. It helps us to spend human resources on something that really matters. But don't get me wrong, we still need QA in our software development process, it's just we don't need to waste their time on tedious and boring tasks.

Without automation testing, CI/CD is not possible, or at least, not reliable.

### 2. CI/CD

Since 2016, I heard a lot about Jenkins, TravisCI, CircleCI, ... But those technologies meant nothing to me at that moment. Because of the fact that all my previous companies didn't have testing, so they couldn't integrate CI/CD in the development process.

I remember in my previous companies, the development process worked like this:

- One of the developer guys pushed an update (usually after 3 days or even a week because he needs to manually test in his local machine).
- After that, the guy who manages the server needs to deploy that piece of code on the staging server.
- QA then had to go to the staging server and do all the manual test cases.
- After QA confirmed that the staging site is OK, the "server guy" will deploy that code to the production server.
- And QA needs to do this all one more time on the production server to confirm everything is OK.
- If there is any bug, the whole process restarts.

That costs us lots of time and human resources. Even a small bug fix took a week to be ready.

In my new company, although there is not an end-to-end test, the integration tests help reduce lots of work for QA.

- After a developer pushes an update, the CI (Continuous Integration) process will do all the automation testing, so in just about half an hour, the developer knows that if he causes any issue. And he can fix it immediately.
- If the code is OK, we don't need the "server guy" to do all the manual work anymore. The CD (Continuous Delivery) process will do it for us automatically. Now the server guy only needs to review the deployment and press a button if we configured to do so.

So new changes will be live on the production server in a matter of hours. What a great savior of productivity!

### 3. Scrum

Before joining my new company, I thought Scrum is just a buzzword in software development. And because of the fact that in my previous companies, there was no testing or CI/CD, so the methodology of Scrum couldn't be applied. Because with no testing, no CI/CD, how can you guarantee a 2-weeks sprint if one small bug takes a week?

Sprint planning, daily meetings, sprint grooming, sprint review, ... all are good for one purpose: to deliver the product to customers as fast as possible, which brings more customer satisfaction, which is ... more revenue.

## Conclusion

Now you know how automation testing and CI/CD play an important role in modern software development.

I guess that now I need to keep my eyes on other things than just "best programming language to learn" or "best frontend frameworks"

Here are some resources that you can use to learn more about this:

1. [GitLab CI/CD](https://docs.gitlab.com/ee/ci/README.html)
2. [How to build a CI/CD pipeline with Docker](https://circleci.com/blog/build-cicd-piplines-using-docker/)

Happy coding!
