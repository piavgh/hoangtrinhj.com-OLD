---
author: hoangth
comments: true
date: 2018-08-10 08:31:20+00:00
cover: 'https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg'
layout: post
link: https://jetbeaver.com/controlled-form-input-vs-uncontrolled-form-input/
slug: controlled-form-input-vs-uncontrolled-form-input
title: Controlled form input vs Uncontrolled form input
template: post
categories:
  - React.js
tags:
  - react.js
---

![controlled-vs-uncontrolled-cover](https://lecoder.io/wp-content/uploads/2018/08/controlled-vs-uncontrolled-cover.png)

Có thể bạn đã thấy nhiều bài viết nói rằng **"bạn không nên sử dụng \*\***setState"** , và nhiều tài liệu khẳng định**" \***\*ref là thứ không nên dùng"** ...

Những điều này thật sự rất mâu thuẫn.

Thật khó để hiểu được làm thế nào để “làm đúng” và thậm chí là tìm ra những tiêu chí để lựa chọn.

Vậy rốt cuộc là bạn phải làm như thế nào để tạo được form trong React?

Form là trung tâm của nhiều ứng dụng web trên mạng. Tuy nhiên, hình thức xử lý trong React có vẻ là có chút ... khó hiểu nhỉ?

Tuy nhiên, bạn không cần phải lo lắng nữa. Bây giờ, mình sẽ chỉ ra cho bạn thấy sự khác biệt giữa những cách tiếp cận khác nhau cũng như những trường hợp bạn nên sử dụng chúng.

## Uncontrolled

**Uncontrolled input** giống những dạng HTML form input truyền thống:

    class Form extends Component {
      render() {
        return (
          <div>
            <input type="text" />
          </div>
        );
      }
    }

Chúng nhớ tất cả những gì bạn mà đã gõ.

Sau đó bạn có thể nhận được giá trị của chúng bằng cách sử dụng [Ref](https://reactjs.org/docs/refs-and-the-dom.html) . Ví dụ: trong hàm xử lí nút onClick:

    class Form extends Component {
      handleSubmitClick = () => {
        const name = this._name.value;
        // do something with `name`
      }

      render() {
        return (
          <div>
            <input type="text" ref={input => this._name = input} />
            <button onClick={this.handleSubmitClick}>Sign up</button>
          </div>
        );
      }
    }

Nói cách khác, **bạn phải 'lấy' các giá trị từ các trường mỗi khi bạn cần đến chúng**.

Điều này xảy ra khi các form được submit.

Đây là cách đơn giản nhất để viết form input. Chắc chắn có những lúc bạn có thể sử dụng đến nó: là những form đơn giản khi làm việc thực tế và khi bạn mới học React.

Tuy nhiên, nó không phải là một cách hay cho lắm, vì vậy, hãy xem tiếp các thông tin về controlled input ở dưới đây.

## Controlled

Controlled input chấp nhận những giá trị hiện thời của prop, cũng như callback để thay đổi những giá trị đó.

Bạn có thể gọi đây là một cách “**chuẩn React**” hơn  (nhưng không có nghĩa là bạn nên **luôn luôn** sử dụng nó).

    <input value={someValue} onChange={handleChange} />

Như vậy là khá ổn rồi đấy…

Tuy nhiên giá trị của input này sẽ phải nằm ở đâu đó trong  state.

Thông thường, các component mà render cái input này (chính là form component đó) sẽ lưu cái giá trị đó trong state của nó:

    class Form extends Component {
      constructor() {
        super();
        this.state = {
          name: '',
        };
      }

      handleNameChange = (event) => {
        this.setState({ name: event.target.value });
      };

      render() {
        return (
          <div>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
        );
      }
    }

(Tất nhiên, nó cũng có thể nằm trong state của component khác hay thậm chí là trong state store riêng biệt [như Redux](https://goshakkk.name/should-i-put-form-state-into-redux/))

### Cùng xem cách hoạt động nhé

Mỗi lần bạn nhập kí tự mới, hàm handleNameChange sẽ được gọi. Nó sẽ lấy giá trị mới từ input và nhập vào state.

![controlled-flow](https://lecoder.io/wp-content/uploads/2018/08/controlled-flow-1024x186.png)

- Nó bắt đầu bằng một chuỗi rỗng => ''.

* Khi bạn nhập a,  hàm handleNameChange sẽ nhận được  a và gọi setState. Input sau đó sẽ render lại và hiển thị giá trị của a.

- Khi bạn nhập b. hàm handleNameChange sẽ nhận giá trị ab và đặt giá trị đó cho trạng thái. Input sẽ được render lại một lần nữa, lần này là với value="ab".

**Kiểu flow như thế này sẽ push giá trị được thay \*\***đổi vào form component\*\* , do đó Form component luôn có giá trị hiện thời của input  mà không cần phải gọi đến input một cách rõ ràng.

Điều này có nghĩa là dữ liệu (state) và giao diện người dùng (UI) (input) của bạn luôn được đồng bộ (in sync). State sẽ cung cấp giá trị cho input và input sẽ yêu cầu Form thay đổi giá trị hiện thời.

Điều này cũng có nghĩa là form component có thể phản hồi với các thay đổi của input ngay lập tức; ví dụ:

- Client side validation.

* Disable Submit button, trừ khi tất cả các input field có dữ liệu hợp lệ

- Ép input có một định dạng cụ thể, như số thẻ tín dụng

Nhưng nếu như bạn không cần làm những việc ở trên, hãy suy nghĩ và dùng uncontrolled để mọi thứ trở nên dễ dàng hơn.

### Làm sao để biết một element là "controlled"

Tất nhiên là ngoài input ra cũng có những form element khác nữa, ví dụ như checkbox, radio button, select và textarea.

Một form element sẽ trở thành “controlled” nếu bạn set giá trị của nó thông qua prop.

Tuy nhiên, mỗi form element sẽ có một giá trị khác nhau để thiết lập giá trị đó, dưới đây là một bảng tóm tắt nhỏ:

![controlled input table](https://lecoder.io/wp-content/uploads/2018/08/controlled-input-table.png)

## Kết luận

Cả uncontrolled form và controlled form đều có những lúc cần sử dụng đến.

**Hãy xem xét tr\*\***ường hợp cụ thể của bạn và lựa chọn cách tiếp cận phù hợp nhất\*\*.

Nếu form của bạn cực kỳ đơn giản về phản hồi giao diện người dùng (UI feedback), sẽ rất ổn nếu bạn dùng uncontrolled cùng với ref. Bạn không cần thiết phải nghe theo những gì các bài viết khác nói là "không nên dùng".

![controlled vs uncontrolled compare](https://lecoder.io/wp-content/uploads/2018/08/controlled-vs-uncontrolled-compare.png)

Thực ra thì cái này cũng không phải luôn đúng trong mọi trường hợp, bạn luôn có thể chuyển từ uncontrolled input sang controlled input khi cần thiết. Chuyển từ uncontrolled input đến controll input thực sự không khó lắm đâu.

_Tham khảo: [https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)_
