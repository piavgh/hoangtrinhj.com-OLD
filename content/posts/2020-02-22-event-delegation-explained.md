---
author: Hoang Trinh
date: 2020-02-22 11:16:00+00:00
layout: post
slug: event-delegation-explained
title: Event Delegation Explained
thumbnail: '../thumbnails/interview-questions.png'
template: post
categories:
  - Interview Questions
  - Javascript
tags:
  - interview-questions
  - javascript
---

> What is event delegation and why is it useful? Can you show an example of how to use it?

## Answer

Event delegation is a technique of delegating events to a single common ancestor. Due to event bubbling, events "bubble" up the DOM tree by executing any handlers progressively on each ancestor element up to the root that may be listening to it.

DOM events provide useful information about the element that initiated the event via Event.target. This allows the parent element to handle behavior as though the target element was listening to the event, rather than all children of the parent or the parent itself.

This provides two main benefits:

- It increases performance and reduces memory consumption by only needing to register a single event listener to handle potentially thousands of elements.
- If elements are dynamically added to the parent, there is no need to register new event listeners for them.

Instead of:

```javascript
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', handleButtonClick)
})
```

Event delegation involves using a condition to ensure the child target matches our desired element:

```javascript
document.addEventListener('click', e => {
  if (e.target.closest('button')) {
    handleButtonClick()
  }
})
```

## Good to hear

- The difference between event bubbling and capturing

## Additional links

- [Event Delegation](https://davidwalsh.name/event-delegate)
