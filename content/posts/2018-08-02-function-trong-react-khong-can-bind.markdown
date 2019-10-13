---
author: hoangth
comments: true
date: 2018-08-02 07:36:58+00:00
cover: 'https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg'
layout: post
link: https://jetbeaver.com/function-trong-react-khong-can-bind/
slug: function-trong-react-khong-can-bind
title: Function trong React không cần bind
template: post
categories:
  - React.js
---

Chào các bạn, hôm nay mình sẽ nói về một chủ đề mình tưởng chừng như khá là đơn giản, ai làm React cũng biết rồi nhưng hóa ra là không phải.

Đấy là việc viết function trong React. Mình có tham gia một số group về React thì thấy các bạn vẫn đang than thở về việc code React khi viết function cứ phải bind(this) ở trong constructor.

Ví dụ:

    class Toggle extends React.Component {
      constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

      render() {
        return (
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
      }
    }

    ReactDOM.render(
      <Toggle />,
      document.getElementById('root')
    );

Đây là ví dụ từ chính official website của React https://reactjs.org/docs/handling-events.html

Nhưng thực ra bạn hoàn toàn không cần phải làm như vậy, có một syntax mới (vẫn đang được thử nghiệm và chưa được đưa hẳn vào trong Javascript, như kiểu ES2015, ES2017, ...).

Nó được gọi là "**public class fields syntax**", đơn giản thế này thôi:

    class Toggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};
        }

        handleClick = () => {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }

        render() {
            return (
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            );
        }
    }

    ReactDOM.render(
        <Toggle />,
        document.getElementById('root')
    );

Các bạn thấy đấy, mình viết lại ví dụ phải dùng bind bằng cách này, nhanh hơn đúng không nào?

Bài này ngắn vậy thôi, hẹn gặp lại các bạn ở những bài sau.

Ah mà nhân tiện thì like page Facebook của mình nhé, có cái nút ở ngay phía trên bên phải kìa.
Cảm ơn các bạn.
