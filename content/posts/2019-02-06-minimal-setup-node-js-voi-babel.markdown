---
author: hoangth
comments: true
date: 2019-02-06 10:13:39+00:00
cover: 'https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg'
layout: post
link: https://jetbeaver.com/minimal-setup-node-js-voi-babel/
slug: minimal-setup-node-js-voi-babel
title: Minimal Setup Node.js với Babel
template: post
category:
  - Node.js
---

### Setup một project Node.js mới

    mkdir my-project-name
    cd my-project-name
    npm init -y

Sau đó bạn tạo thư mục `src` và tạo file index.js trong đó:

    mkdir src
    cd src
    touch index.js

Trong file index.js này, bạn có thể viết code tùy ý:

    console.log('Setup một Node.js project mới.')

Tiếp theo, trong file package.json, bạn có thể viết thêm đoạn này để có thể sử dụng NPM script (cho đỡ phải gõ code nhiều trong terminal):

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

---

### Node.js với Babel

    npm install @babel/core @babel/node --save-dev

Sửa file package.json như thế này:

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

**Thêm presets:**

    npm install @babel/preset-env --save-dev







    touch .babelrc







    {
      "presets": [
        "@babel/preset-env"
      ]
    }

OK, vậy là từ giờ bạn có thể viết code theo chuẩn ES6 (ES2015) thoải mái rồi đó!

Hẹn gặp lại các bạn trong các bài viết sau nhé :D
