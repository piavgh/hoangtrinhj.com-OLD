---
author: Hoang Trinh
date: 2018-07-21 11:42:41+00:00
layout: post
link: https://hoangtrinhj.com/map-vs-foreach-in-javascript
slug: map-vs-foreach-in-javascript
title: Map vs forEach in Javascript
description: Test.
thumbnail: '../thumbnails/js.png'
cover: './preview.jpg'
template: post
categories:
  - Javascript
  - Interview Questions
tags:
  - javascript
  - interview-questions
---

> What is the difference between the array methods map() and forEach()?

## Answer

Both methods iterate through the elements of an array. map() maps each element to a new element by invoking the callback function on each element and returning a new array.

On the other hand, forEach() invokes the callback function for each element but does not return a new array. forEach() is generally used when causing a side effect on each iteration, whereas map() is a common functional programming technique.

## Good to hear

- Use forEach() if you need to iterate over an array and cause mutations to the elements without needing to return values to generate a new array.
- map() is the right choice to keep data immutable where each value of the original array is mapped to a new array.

## Code Examples

```javascript
let arr = [1, 2, 3, 4, 5]
```

### forEach()

```javascript
arr.forEach((num, index) => {
  return (arr[index] = num * 2)
})
```

```javascript
// arr = [2, 4, 6, 8, 10]
```

### map()

```javascript
let doubled = arr.map((num) => {
  return num * 2
})
```

```javascript
// doubled = [2, 4, 6, 8, 10]
// arr = [1, 2, 3, 4, 5] => arr is unchanged
```

## Functional Programming

If you want to follow functional programming paradigm, map() is a better choice because forEach() will mutate the array elements directly, while map() will create a new array and keep the original array unchange.

## Additional links

- [MDN docs for forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN docs for map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)
