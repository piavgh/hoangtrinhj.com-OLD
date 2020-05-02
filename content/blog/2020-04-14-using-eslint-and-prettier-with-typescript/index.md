---
author: Hoang Trinh
date: 2020-04-14 08:43:00+00:00
layout: post
slug: using-eslint-and-prettier-with-typescript
title: Using ESLint and Prettier with TypeScript
thumbnail: '../thumbnails/react.png'
cover: './preview.jpg'
description: "ESLint's large set of linting rules and the increased commitment to use ESLint by the TypeScript team makes ESLint a great tool for linting TypeScript projects."
categories:
  - Typescript
  - Eslint
  - Prettier
  - Javascript
tags:
  - typescript
  - eslint
  - prettier
  - javascript
---

When it comes to linting TypeScript code, there are two major linting options to choose from: <Link to="https://palantir.github.io/tslint/">TSLint</Link> and <Link to="https://eslint.org/">ESLint</Link>. TSLint is a linter than can only be used for TypeScript, while ESLint supports both JavaScript and TypeScript.

In the <Link to="https://github.com/Microsoft/TypeScript/issues/29288#developer-productivity-tools-and-integration">TypeScript 2019 Roadmap</Link>, the TypeScript core team explains that **ESLint has a more performant architecture than TSLint** and that they will **only be focusing on ESLint** when providing editor linting integration for TypeScript. For that reason, I would recommend using ESLint for linting TypeScript projects.

---

## Setting up ESLint to work with TypeScript

First, install all the required dev dependencies:

```bash
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```

<Quote>
  <strong>Note:</strong> If using <code>create-react-app</code> to bootstrap a
  project, <code>eslint</code> is already included as a dependency through{' '}
  <code>react-scripts</code>, and therefore it is not necessary to explicitly
  install it with <code>yarn</code>.
</Quote>

- <Link to="https://www.npmjs.com/package/eslint">
    <code>eslint</code>
  </Link>
  : The core ESLint linting library
- <Link to="https://www.npmjs.com/package/@typescript-eslint/parser">
    <code>@typescript-eslint/parser</code>
  </Link>
  : The parser that will allow ESLint to lint TypeScript code
- <Link to="https://www.npmjs.com/package/@typescript-eslint/eslint-plugin">
    <code>@typescript-eslint/eslint-plugin</code>
  </Link>
  : A plugin that contains a bunch of ESLint rules that are TypeScript specific

Next, add an `.eslintrc.js` configuration file in the root project directory. Here is a sample configuration for a TypeScript project:

<!-- prettier-ignore -->
```javascript
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  }
};
```

<Quote>
  <strong>Note:</strong> I prefer using a JavaScript file for the{' '}
  <code>.eslintrc</code> file (instead of a JSON file) as it supports comments
  that can be used to better describe rules.
</Quote>

If using TypeScript with React, the <Link to="https://www.npmjs.com/package/eslint-plugin-react"><code>eslint-plugin-react</code></Link> dev dependency should be installed and the following configuration can be used:

<!-- prettier-ignore -->
```javascript
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};

```

Ultimately it's up to you to decide what rules you would like to extend from and which ones to use within the `rules` object in your `.eslintrc.js` file.

## Adding Prettier to the mix

What works well along with ESLint is <Link to="https://prettier.io/">prettier</Link>, which does a great job at handling code formatting. Install the required dev dependencies to get prettier working with ESLint:

```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev
```

- <Link to="https://www.npmjs.com/package/prettier">
    <code>prettier</code>
  </Link>
  : The core prettier library
- <Link to="https://www.npmjs.com/package/eslint-config-prettier">
    <code>eslint-config-prettier</code>
  </Link>
  : Disables ESLint rules that might conflict with prettier
- <Link to="https://www.npmjs.com/package/eslint-plugin-prettier">
    <code>eslint-plugin-prettier</code>
  </Link>
  : Runs prettier as an ESLint rule

In order to configure prettier, a `.prettierrc.js` file is required at the root project directory. Here is a sample `.prettierrc.js` file:

<!-- prettier-ignore -->
```javascript
module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 120,
  tabWidth: 4
};
```

Next, the `.eslintrc.js` file needs to be updated:

<!-- prettier-ignore -->
```javascript
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  }
};
```

> **Note:** make sure that `plugin:prettier/recommended` is the last configuration in the `extends` array

The advantage of having prettier setup as an ESLint rule using `eslint-plugin-prettier` is that code can automatically be fixed using ESLint's `--fix` option.

## Automatically Fix Code in VS Code

For a good developer experience, it's useful to setup your editor to automatically run ESLint's automatic fix command (i.e. `eslint --fix`) whenever a file is saved. Since i'm using VS Code, here is the config required in the `settings.json` file in VS Code to get automatic fixing whenever saving a file:

<!-- prettier-ignore -->
```json
{
  // "eslint.autoFixOnSave": true, // has been deprecated, use editor.codeActionsOnSave instead
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
}
```

If you've also set the `editor.formatOnSave` option to `true` in your `settings.json`, you'll need to add the following config to prevent running 2 formatting commands on save for JavaScript and TypeScript files:

<!-- prettier-ignore -->
```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false
  }
}
```

## Run ESLint with the CLI

A useful command to add to the [`package.json` scripts](https://docs.npmjs.com/misc/scripts) is a `lint` command that will run the TypeScript compiler and the ESLint linter across all project files to make sure the code adheres to the compiler settings and formatting/style rules.

<!-- prettier-ignore -->
```json
{
  "scripts": {
    "lint": "tsc --noEmit && eslint '*/**/*.{js,ts,tsx}' --quiet --fix"
  }
}
```

The above script can be run from the command line using `npm run lint` or `yarn lint`. This command will first run the TypeScript compiler and report any TypeScript compiler errors. If there are no TypeScript errors, it will then run ESLint through all the `.js`, `.ts`, and `.tsx` (used with React) files. Any ESLint errors that can be automatically fixed will be fixed with this command, but any other errors will be printed out in the command line.

- [TypeScript CLI Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [ESLint CLI Options](https://eslint.org/docs/user-guide/command-line-interface)

---

That's how you can lint and format a TypeScript project using ESLint and Prettier 😎
