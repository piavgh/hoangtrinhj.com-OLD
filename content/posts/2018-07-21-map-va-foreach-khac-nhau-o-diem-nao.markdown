---
author: hoangth
comments: true
date: 2018-07-21 11:42:41+00:00
cover: 'https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg'
layout: post
link: https://hoangtrinhj.com/map-va-foreach-khac-nhau-o-diem-nao/
slug: map-va-foreach-khac-nhau-o-diem-nao
title: Map và forEach khác nhau ở điểm nào?
template: post
categories:
  - Javascript
---

![what jackia chan](https://lecoder.io/wp-content/uploads/2018/07/what.png)

Nhiều bạn mới code javascript có thể là sẽ có biểu cảm như trên ^^ Nhưng nếu bạn đã làm việc với javascript tầm 3-6 tháng trở lên thì có thể là bạn đã gặp 2 phương thức na ná nhau:

    Array.prototype.map()




    Array.prototype.forEach()

Thế nó khác nhau ở đâu nhỉ?

### Định nghĩa của map và forEach

Đầu tiên chúng ta hãy cùng xem định nghĩa của 2 phương thức này trên MDN:

forEach() — executes a provided function once for each array element.
map() — creates a new array with the results of calling a provided function on every element in the calling array.

Có vẻ là vẫn chưa rõ ràng đúng không?

Well... điểm khác biệt lớn nhất là forEach() không trả về giá trị nào cả. Nó chỉ đơn giản là thực hiện hàm callback lên từng phẩn tử ở trong mảng. Một khác biệt nhỏ nữa so với phương thức map() là những hàm callback này có thể thay đổi trực tiếp mảng ban đầu.

Thực ra thì phương thức map cũng sẽ thực hiện hàm callback lên từng phần tử ở trong mảng. Cái khác biệt là map() sẽ trả về giá trị, chính xác hơn thì map() sẽ tạo ra một mảng mới có cùng số phần tử với mảng cũ và trả về mảng mới này.

Dễ hiểu hơn tí nào chưa bạn?

Nếu vẫn chưa hình dung được (giống mình hồi xưa) thì cùng mình xem ví dụ này nhé

### Code Examples

Ví dụ mình có mảng này

    let arr = [1, 2, 3, 4, 5];

Và mình muốn nhân đôi giá trị của mỗi phần tử trong mảng. Giờ phải làm sao đây? Mình hoàn toàn có thể dùng vòng lặp for (khá cổ), nhưng trong bài này mình đang so sánh map và forEach nên mình sẽ sử dụng 2 phương thức này.

#### forEach:

Lưu ý là đừng return gì từ phương thức forEach() này, vì có return thì nó cũng chỉ trả về "undefined" thôi à.

    arr.forEach((num, index) => {
      return arr[index] = num * 2;
    });

##### Kết quả:

    // arr = [2, 4, 6, 8, 10]

#### Map:

    let doubled = arr.map(num => {
        return num * 2;
    });

##### Kết quả:

    // doubled = [2, 4, 6, 8, 10]

Giờ mình sẽ so sánh tốc độ của 2 thằng này

### So sánh tốc độ

[https://jsperf.com/](http://jsperf.com/) là một trang web khá tốt để so sánh tốc độ của các phương thức Javascript khác nhau.

Đây là kết quả test khi mình so sánh giữa forEach() và map():

![speed compare between forEach vs map](https://lecoder.io/wp-content/uploads/2018/07/speed-compare.png)

Bạn có thể thấy map() nhanh hơn nhiều đúng không? 71% lận. Bạn test thử đi, có thể là trên trình duyệt của bạn sẽ có kết quả khác với của mình.

### Functional Programming

Nếu bạn nào thích theo hướng functional programming thì mình nghĩ map() sẽ là một lựa chọn tốt hơn bởi vì forEach sẽ thay đổi trực tiếp lên mảng, trong khi đó thì map() sẽ tạo ra một mảng mới hoàn toàn và giữ nguyên mảng ban đầu của chúng ta.

### Vậy dùng cái nào tốt hơn?
