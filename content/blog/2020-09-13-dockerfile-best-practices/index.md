---
author: Hoang Trinh
date: 2020-09-13 17:10:00+00:00
layout: post
slug: dockerfile-best-practices
title: Dockerfile Best Practices
cover: './preview.jpg'
template: post
categories:
- Docker
- Cloud Native
tags:
- docker
- cloud-native
---

I have been using Docker directly or indirectly for years now. During that time I shot myself in the foot multiple times by not following suggestions and good practices. I have collected tips and practices and separated them into multiple categories. I am calling these categories Dockerfile, images, and containers.

The first part talks about Dockerfile - I have included 6 tips and practices you should try and adopt. This is not meant to be an exhaustive list at all.

## 1. Use multi-stage builds

With multi-stage builds, you can use one base image as your “builder” image. This would be the image that has all the build tools and everything else needed to compile and build your code. However, once your code is built, there is no need to have all those tools in your Docker image, your built binary is all you need.

The multi-stage build helps you reduce the Docker image size. A smaller 5 MB image, for example, can be pushed, pulled, and moved around much quicker than a 600 MB image.

The multi-stage build also goes well with another practice that says to only have the minimum required in your images. Only having your binary, without any extra tools, helps minimus the surface area for attacks. Imagine if an attacker gets access to a running container - you’d be doing them a favor by including all those tools inside the image.

Here’s an example using a multi-stage build Dockerfile from one of my old projects:

```dockerfile
FROM golang:1.9.2 as builder

RUN mkdir -p /go/src/github.com/piavgh/semver
WORKDIR /go/src/github.com/piavgh/semver

RUN go get -u github.com/golang/dep/cmd/dep
COPY . .

RUN dep ensure -v
RUN make build

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/

RUN mkdir -p public
COPY --from=builder /go/src/github.com/piavgh/semver/semver .

ENTRYPOINT [ "./semver" ]
```

If you build the image using the multi-stage build, the resulting image will be **11.1 MB**. Taking the same Dockerfile and removing the second stage, the resulting image is **802 MB**:

```shell
smallimage latest 13f94a1d6e1a 6 seconds ago 11.1MB
bigimage latest 36ea00b30ea4 25 seconds ago 802MB
```

## 2. Use .dockerignore file

I talked about Docker build context in a previous article, but a quick recap here. To build an image, Docker needs to have access to your source and other files that you plan to include inside the image. The way use send these files to docker is through **build context**. Usually, the build context will be the same folder your Dockerfile is in.

With `.dockerignore` you can tell Docker which files **not** to include in the process of building the image. This could be the node_modules folder, any temporary files, or any files containing secrets. Just like with `.gitignore`, you can specify the patterns of files/folders to be excluded from the build.

Here’s an example of a `.dockerignore` file:

```shell
# Ignore node_modules folder
node_modules

# Ignore all *.env files
*.env
```

## 3. Add metadata to your images using LABEL

Use the LABEL instruction in the Dockerfile to add Git commits, maintainer names, company name, and other information that could be useful to the user. For example:

```shell
FROM myimage:0.1.0
LABEL version=“0.1.0”
LABEL maintainer="hoang.trinhj@gmail.com"
LABEL company="hello llc"
...
```

You can check the labels using the `docker inspect` command:

```shell
"Labels": {
  "company": "hello llc",
  "maintainer": "hoang.trinhj@gmail.com",
  "version": "0.1.0"
}
...
```

If you’re using a continuous integration system (which you should!), you can also dynamically add labels when you’re building your images:

```shell
$ docker build -—label “version=0.1.0” —-label “maintainer=hoang.trinhj@gmail.com” -t myimage:0.1.0 .
```

## 4. Use COPY instead of ADD

I am guilty of this one. I used **ADD** for a while as it was shorter to type (I guess). Both commands let you copy files from a source location into a Docker image. However, **COPY** only lets you copy from your host machine, while **ADD** also supports copying from a URL or extracting a source `.tar` file directly into the image.

## 5. Treat Dockerfile as code

If you’re not using source code control (SCC) you definitely should. Stop reading this article and put all your code into source code control, such as [Github](https://github.com/). No excuses for not using it. Once you’re using source code control, put your Dockerfile there as well and treat them as code. You’ll get all the benefits of SCC - version history, collaborating with others on the same code, backup, etc.

## 6. Declare ENV when you need them (or at the end)

Using ENV, you can declare environment variables (e.g. `ENV folder=/hello`) and use them in other instructions in the Dockerfile (e.g. `WORKDIR ${folder}`).

If you declare the environment variables at the top, Docker will have to re-build the full images each time you change the variable as the cache will get invalidated ([check the article about Docker layers](https://medium.com/@jessgreb01/digging-into-docker-layers-c22f948ed612) and how that works). The good practice here is to declare the variables when you needed them (if they are needed at build time) or at the end of the Dockerfile if they are needed at runtime only.
