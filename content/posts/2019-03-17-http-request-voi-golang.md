---
author: Hoang Trinh
date: 2019-03-17 03:54:03+00:00
slug: http-request-voi-golang
title: HTTP Request với Golang
template: post
thumbnail: '../thumbnails/http.png'
categories:
  - Golang
tags:
  - golang
---

Hôm nay mình sẽ hướng dẫn các bạn gọi HTTP Request bằng Golang.

Có 2 cách cơ bản, khi bạn chỉ gọi request bình thường, hoặc khi bạn cần thêm header, cookie.

### GET Request

```go
package main

import (
    "net/http"
    "ioutil"
)

func main() {
    // Make a get request
    rs, err := http.Get("https://google.com")
    // Process response
    if err != nil {
        panic(err) // More idiomatic way would be to print the error and die unless it's a serious error
    }
    defer rs.Body.Close()
    bodyBytes, err := ioutil.ReadAll(rs.Body)
    if err != nil {
        panic(err)
    }
    bodyString := string(bodyBytes)
}
```

### POST Request

```go
import (
    "bytes"
)

func main() {
    body := []byte("key1=val1&key2=val2")
    rs, err := http.Post("http://someurl.com", "body/type", bytes.NewBuffer(body))
    // Code để xử lí response

    // Post form thì làm như thế này:
    rs, err := http.PostForm("http://example.com/form",
                            url.Values{"key": {"Value"}, "id": {"123"}})
    // Code để xử lí response
}
```

Nếu bạn cần thêm headers, cookies chẳng hạn, thì dùng cách này:

```go
// ...
client := &http.Client{}
req, err := http.NewRequest("GET", "http://example.com", nil)
req.Header.Add("If-None-Match", `some value`)
resp, err := client.Do(req)
// Code để xử lí response
```

Hẹn gặp lại các bạn trong các bài viết sau!
