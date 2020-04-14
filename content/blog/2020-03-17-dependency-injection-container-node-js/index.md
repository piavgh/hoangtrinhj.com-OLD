---
author: Hoang Trinh
date: 2020-03-17 19:01:00+00:00
layout: post
slug: dependency-injection-container-node-js
title: Dependency Injection Container in Node.js
thumbnail: '../thumbnails/js.png'
cover: './preview.jpg'
template: post
categories:
  - Javascript
  - Node.js
  - Design Pattern
tags:
  - javascript
  - node.js
  - design-pattern
---

I’m a developer coming from the PHP (PhalconPHP, Magento) ecosystem and my main concern about javascript has been that, apparently, the community has not adopted one of the practices that, for me, has been the most game changing of all: Dependency Injection.

## What is Dependency Injection

Simply put, Dependency Injection (DI) is a wiring pattern where dependencies are not hardcoded inside of the module but provided as an input by an external entity instead.

Usually, developers import module dependencies using require. This approach is fine but it's not very flexible and harder to unit test. Let's take a look at this quick example:

```javascript
const client = require('./db')

exports.listSuggestions = (username, callback) => {
  client.query(
    `select * from suggestions where username = '${username}'`,
    (err, res) => {
      //...
    }
  )
}

exports.newSuggestion = (username, callback) => {
  //...
}
```

Here’s how we could use DI instead to provide our module with db instance:

```javascript
module.exports = (db) => {
  const movieSuggestion = {}
  movieSuggestion.listSuggestions = (username, callback) => {
    db.query(
      `select * from suggestions where username = '${username}'`,
      (err, res) => {
        //...
      }
    )
  }

  movieSuggestion.newSuggestion = (username, callback) => {
    //...
  }

  return movieSuggestion
}
```

Now imagine we want to unit test this module by providing a dummy database instance. In the first example we would have to alter the code of the module, while in the second example all we have to do is provide the dummy instance as a parameter.

### Pros of Dependency Injection

- Higher reusability — In our case it’s much easier to use our task service with different database instances.
- Easier unit testing — Supplying dummy data for unit testing becomes trivial.

### Cons of Dependency Injection

While DI has a lot of advantages, it also comes with one drawback: as the number of your project’s dependencies grows, it becomes harder to manage them all manually.
For example, let’s take a look at a sample `app.js` file, which we use to setup the dependency graph in our project:

```javascript
// ... app initialization
const DB = require('./utils/db')
const MovieSuggestion = require('./model/ms')
const MovieBot = require('./model/bot/ms')
const MovieController = require('./model/controller/ms')

const db = DB('myDb')
const movieSuggestion = MovieSuggestion(db)
const bot = MovieBot(movieSuggestion)
const movieController = MovieController(bot)

// ... server starts listening
```

In the example above we’re essentially manually setting up the dependency graph for our application. Instantiation of each object depends on the previous one and order of the instantiation is crucial. We can see how this can easily become unmanageable if we continue down this path.

So is it not worth using Dependency Injection then? Well, fortunately there’s a more advanced pattern built on top of DI that mitigates most of its drawbacks.

## Dependency Injection Container

In its essence, Dependency Injection Container is module or external service whose sole purpose is handling Dependency Injection in your project. With DIC you can enjoy all the advantages of Dependency Injection while also not having to manually handle your project’s dependency graph.

Because of it’s efficiency and scalability DIC is used by a great deal of Node.js libraries and projects.

### Different Dependency Injection Container implementation approaches:

There are multiple different approaches to provide DIC with the dependency list at a runtime, here are two of the most widely-used ones.

1. Evaluating the name of the factory arguments at a runtime. With the help of the third party packages, you can extract the name of the arguments for a given function as an array of strings. This is used in predicting names of the dependencies at a runtime.

2. Attaching a special property. You can attach a custom property (`_inject`) to the prototype of your factory function and specify all the dependency names for your factory function in that property. Afterwards, you can customize your DIC to use the `_inject` to get the dependency list at a runtime.

### Implementing Dependency Injection Container

The first approach is the least invasive and most popular so we will use that approach to implement our DIC. We’ll use parse-function npm package which can be used to parse the name of the arguments of any given function:

```javascript
const parseFunction = require('parse-function')

const app = parseFunction({
  ecmaVersion: 2017
})

class DiContainer {
  constructor() {
    this.dependencies = {};
    this.factories = {};
  }


  register = (name, dependency) => {
      this.dependencies[name] = dependency;
  }


  factory = (name, factory) => {
    this.factories[name] = factory;
  }


  get = (name) => {
    if (!this.dependencies[name]) {
      const factory = this.factories[name];
      this.dependencies[name] = factory && this.inject(factory);
      if (!this.dependencies[name]) throw new Error(`Cannot find module ${name}`);
    }

    return this.dependencies[name];
  }

  inject = (factory) => {
    const fnArgs = app.parse(factory).args
      .map(dependency =>; this.get(dependency));
    return factory.apply(null, fnArgs);
  }
}

module.exports = DiContainer;
```

Few things to note here:

- We have properties this.dependencies and this.factories which we use for caching.

- `register` is a simple method for registering new dependencies.

- `factory` is a simple method for registering dependency factories.

- `get` method returns registered dependency if it's available. Otherwise, it instantiates the dependency using its factory and then returns it.

- Last but not least is `inject` method. This method is where the core of our DIC's logic lays. `inject` extracts the name of factory arguments as an array of strings. Afterwards, it matches each argument with the other registered dependencies and invokes the factory function using those dependencies.

> NOTE: For inject method to work you must make sure the registered dependency names match the names of the factory arguments that rely on those dependencies.

Now let’s take a look at the rewritten app.js that shifts the responsibility of handling the dependency graph to our DiContainer

```javascript
// ... app initialization
const DiContainer = require('./utils/DiContainer')

const diContainer = new DiContainer()
diContainer.register('dbName', 'myDb')
diContainer.factory('movieSuggestion', require('./model/ms'))
diContainer.factory('db', require('./utils/db'))
diContainer.factory('bot', require('./model/bot/ms'))
diContainer.factory('movieController', require('./model/controller/ms'))

const controller = diContainer.get('movieController')

// ... server starts listening
```

All we had to do is create a new instance of `DiContainer` and register our dependencies and factories. The order in which we register our dependencies no longer matters. Also, we no longer need to worry about providing the correct arguments to the dependency factories. To get a working instance of `MovieController` all we had to do is call the `get` method and `DiContainer` handled the rest.

Our `DiContainer` implementation uses a lazy loading approach to instantiate the dependencies only when our application needs them.

### Pros of using Dependency Injection Container

- All the advantages of Dependency Injection.
- DIC automatically identifies the dependencies needed by modules at a runtime. This means we no longer need to worry about providing correct parameters for the factories.
- Modules are not even aware of the existence of DIC, which means DIC and modules are loosely coupled.

### Third-party Dependency Injection Containers

While it was useful to write our own version of DIC to better understand the reasoning behind it, it’s much more practical to use third party solutions. NPM registry has a lot of DIC libraries which provide us with many useful features like lazy loading and decorators right out of the box, some of the great libraries are:

1. [awilix](https://github.com/jeffijoe/awilix)
2. [typedi](https://github.com/typestack/typedi)
3. [InversifyJS](https://github.com/inversify/InversifyJS)
4. [bottlejs](https://github.com/young-steveo/bottlejs)

And that’s it for this post! Dependency Injection Container is a more advanced pattern for module wiring that is widely used not only in Node.js but in the world of software development in general.
