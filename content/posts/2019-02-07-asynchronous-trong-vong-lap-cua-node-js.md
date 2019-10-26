---
author: hoangth
comments: true
date: 2019-02-07 09:03:26+00:00
cover: 'https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg'
layout: post
link: https://jetbeaver.com/asynchronous-trong-vong-lap-cua-node-js/
slug: asynchronous-trong-vong-lap-cua-node-js
title: Asynchronous trong vòng lặp của Node.js
template: post
categories:
  - Popular
tags:
  - async
  - node.js
---

Đây chắc hẳn là một vấn đề khá đau đầu đối với khá nhiều developer mới làm quen với Node.js.

Cũng đúng thôi, vì có lẽ đến tận gần đây mình cũng vẫn thấy khá mơ hồ khi phải làm với vấn đề này, đó là lí do mình phải viết bài này (để cho nó nhớ ^.^)

### Synchronous Loop

Với những ai đến với Javascript từ các ngôn ngữ khác như PHP hay Java thì sẽ viết for loop kiểu này:

```javascript
for (var i = 0; i < array.length; i++) {
  var item = array[i]
  // do something with item
}
```

Cách này rất ổn nhưng nhìn khá xấu, nên là với Javascript, mọi người thường hay viết thế này:

```javascript
array.forEach(item => {
  // do something with item
})
```

Cách viết này rất gọn gàng, và hoạt động cũng rất mượt với synchronous code (function bên trong là synchronous), nhưng với asynchronous code thì sao?

### Asynchronous Loop

Lúc này vấn đề mới bắt đầu nảy sinh, gây ra rất nhiều sự mơ hồ cho các dev.

Xem đoạn code này nhé:

```javascript
const example = async () => {
  const nums = [1, 2, 3]
  nums.forEach(async num => {
    const result = await returnNum(num)
    console.log(result)
  })
  console.log('after forEach')
}

const returnNum = x => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x)
    }, 500)
  })
}

example().then(() => {
  console.log('done')
})
```

Kết quả:

```javascript
after forEach
done
1
2
3
```

Nhưng cái bạn muốn là như thế này đúng không?

```javascript
1
2
3
after foreach
done
```

Vì sao lại thế nhỉ?

Thử viết lại dùng vòng for bình thường xem sao:

```javascript
const example = async () => {
  const nums = [1, 2, 3]
  for (let i = 0; i < nums.length; i++) {
    const result = await returnNum(nums[i])
    console.log(result)
  }
  console.log('after forEach')
}

const returnNum = x => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x)
    }, 500)
  })
}

example().then(() => {
  console.log('done')
})
```

Kết quả:

```javascript
1
2
3
after foreach
done
```

Đúng như mong đợi! Vậy là do một lí do nào đó mà hàm .forEach chạy không đúng như mình muốn, trong khi vòng for bình thường lại đúng?

<b>Chính xác thì là vì .forEach không làm gì với cái kết quả trả về trong hàm cả, nó cứ thế chạy tiếp vòng lặp tiếp theo mà không đợi hàm return.</b>

Trong khi vòng for bình thường thì sẽ đợi hàm trả về kết quả trước khi thực hiện tiếp vòng lặp tiếp theo.

Ngoài ra trong version mới hơn của Javascript, chúng ta có thêm syntax for...of, chức năng của nó tương tự như hàm for bình thường, tức là cũng sẽ đợi kết quả trả về trước khi thực hiện vòng lặp tiếp theo.

Nhưng cách viết dùng for...of sẽ dễ đọc hơn nhiều so với vòng for bình thường, như thế này:

```javascript
const example = async () => {
  const nums = [1, 2, 3]
  for (const num of nums) {
    const result = await returnNum(num)
    console.log(result)
  }
  console.log('after forEach')
}

const returnNum = x => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x)
    }, 500)
  })
}

example().then(() => {
  console.log('done')
})
```

Vậy là giờ các bạn sẽ không nhầm lẫn và không sợ sử dụng asynchronous code trong vòng for nữa rồi nhé.

Hẹn gặp lại các bạn trong các bài viết sau!
