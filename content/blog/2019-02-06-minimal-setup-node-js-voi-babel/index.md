---
author: Hoang Trinh
date: 2019-02-06 10:13:39+00:00
slug: minimal-setup-node-js-voi-babel
title: Minimal Setup Node.js với Babel
template: post
thumbnail: '../thumbnails/node.png'
cover: './preview.jpg'
categories:
  - Node.js
tags:
  - node.js
  - babel
---

### Setup một project Node.js mới

```shell
mkdir my-project-name
cd my-project-name
npm init -y
```

Sau đó bạn tạo thư mục `src` và tạo file index.js trong đó:

```shell
mkdir src
cd src
touch index.js
```

Trong file index.js này, bạn có thể viết code tùy ý:

```shell
console.log('Setup một Node.js project mới.')
```

Tiếp theo, trong file package.json, bạn có thể viết thêm đoạn này để có thể sử dụng NPM script (cho đỡ phải gõ code nhiều trong terminal):

```json
{
  ...
  "main": "index.js",
  "scripts": {
    "start": "node src/index.js", // Ở đây
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  ...
}
```

---

### Node.js với Babel

```shell
npm install @babel/core @babel/node --save-dev
```

Sửa file package.json như thế này:

```json
{
  ...
  "main": "index.js",
  "scripts": {
    "start": "nodemon --exec babel-node src/index.js", // Bạn có thể thấy thay đổi ở đây
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  ...
}
```

**Thêm presets:**

```shell
npm install @babel/preset-env --save-dev
touch .babelrc
```

```json
{
  "presets": ["@babel/preset-env"]
}
```

OK, vậy là từ giờ bạn có thể viết code theo chuẩn ES6 (ES2015) thoải mái rồi đó!

Hẹn gặp lại các bạn trong các bài viết sau nhé :D
