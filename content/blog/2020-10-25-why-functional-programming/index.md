---
author: Hoang Trinh
date: 2020-10-25 21:33:00+00:00
layout: post
slug: why-functional-programming
title: Why do we need functional programming?
cover: './preview.jpg'
template: post
categories:
- Programming Paradisms
tags:
- programming-paradisms
- paradisms
---

I assume that you know what the functional programming is.

A great question (and maybe your first question) is:

> "Why do we need functional programming?"

---

The answer to this lies in one of the best books in the programming world: [Clean Architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164) by [Uncle Bob](http://cleancoder.com/)

> "Why would an architect be concerned with the mutability of variables?"

The answer is absurdly simple: All race conditions, deadlock conditions, and concurrent update problems are due to mutable variables. You cannot have a race condition or a concurrent update problem if no variable is ever updated.

You cannot have deadlocks without mutable locks.

In other words, all the problems that we face in concurrent applications - all the problems we face in applications that require multiple threads, and multiple processors - cannot happen if there are no mutable variables.

---

Although there are lots of things to discuss about this statement, but this is the main point.

You can learn more by reading that book from Uncle Bob.

Happy coding!
