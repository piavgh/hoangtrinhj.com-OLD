---
author: Hoang Trinh
date: 2020-07-25 11:58:00+00:00
layout: post
slug: webrtc-server-explained
title: WebRTC Server Explained
cover: './preview.jpg'
template: post
categories:
- WebRTC
tags:
- webrtc
---

When you heard WebRTC Server – what does it really mean? There are 3 different types of WebRTC servers that you need to know about: signaling, NAT traversal and media server.

- [1. Signaling server](#1-signaling-server)
- [2. NAT traversal server](#2-nat-traversal-server)
- [3. Media server](#3-media-server)
- [FAQ](#faq)
- [Conclusion](#conclusion)

> **Note**: Actually, there are the 4th type of server that always appears in any WebRTC project. It's the application server. WebRTC application servers are like any other web application servers out there, it hosts the HTML, CSS and JS files, a few (or many) images and you can’t really have a service without it. But it is not **directly related** only to WebRTC so I will not clasify it as one.

Let's dive in!

## 1. Signaling server

WebRTC signaling servers are in charge of connecting users to one another.

Signaling servers for WebRTC are sometimes embedded or collocated/co-hosted with the application servers, but more often than not they are built and managed separately from the application itself.

While WebRTC handles the media, it leaves the signaling to "someone else" to take care of. WebRTC will generate SDP – these are fragments of messages that the application needs to pass between the users. Passing these messages is the main concern of a signaling server.

A WebRTC signaling server passes signaling messages between the users to establish a session
There are 4 main signaling protocols that are used today with WebRTC, each lending itself to different signaling servers that will be used in the application:

1. [**SIP**](https://en.wikipedia.org/wiki/Session_Initiation_Protocol) – The dominant telecom VoIP protocol out there. When used with WebRTC, it is done as SIP over WebSocket. CPaaS and telecom vendors end up using it with WebRTC, mostly because they already had it in use in their infrastructure
2. [**XMPP**](https://en.wikipedia.org/wiki/XMPP) – A presence and messaging protocol. Some of the CPaaS vendors picked this one for their signaling protocol. Jitsi (an open source WebRTC project) also use this protocol.
3. [**MQTT**](https://en.wikipedia.org/wiki/MQTT) – Messaging protocol used mainly for IOT (Internet of Things). First time I’ve seen it used with WebRTC was Facebook Messenger, which makes it a very popular/common/widespread signaling server for WebRTC
4. Custom – the most common approach of all, where people just implement or pick an alternative that just works for them

SIP, XMPP and MQTT all have existing servers that can be deployed with WebRTC.

The Custom option takes many shapes and sizes. Node.js is quite a common server alternative used for WebRTC signaling (just make sure not to pick an outdated alternative – that’s quite a common mistake in WebRTC).

Recently, you can even use a realtime BaaS (Backend as a Service) such as [Firebase](https://webrtc.org/getting-started/firebase-rtc-codelab) or [Pusher](https://pusher.com/tutorials/webrtc-video-call-app-nodejs) to do this job

## 2. NAT traversal server

NAT traversal is important to get more sessions connected properly in WebRTC.

To work well, WebRTC requires NAT traversal servers. These WebRTC servers are in charge of making sure you can send media stream from one browser to another.

There are two types of NAT servers needed: STUN and TURN. TURN servers always implement STUN as well, so in all likelihood you’re looking at a single server here.

[**STUN**](https://en.wikipedia.org/wiki/STUN) is used to answer the question _"what is my public IP address?"_ and then share the answer with the other user in the session, so he can try and use that address to send media directly.

[**TURN**](https://en.wikipedia.org/wiki/Traversal_Using_Relays_around_NAT) is used to _relay the media through it_ (so it costs more in bandwidth costs), and is used when you can't really reach the other user directly.

A few quick thoughts here:

- You need both STUN and TURN to make WebRTC work. You can skip STUN if the other end is a media server. You will need TURN in WebRTC even if your other end of the session is a media server on a public IP address.
- Don’t use free STUN servers in your production environment. And don’t never ever use “free” TURN servers.
- If you deploy your own servers, you will need to place the TURN servers as close as possible to your users, which means handling TURN geolocation.
- TURN servers don’t have access to the media. Ever. They don’t pose a privacy issue if they are configured properly, and they can’t be used by you or anyone else to record the conversations.
- Prefer using paid managed TURN servers instead of hosting your own if you can.
- Make sure you configure NAT traversal sensibly. Here’s a free 3-part video course on effectively connecting WebRTC sessions.

## 3. Media server

WebRTC media servers makes it possible to support more complex scenarios.

WebRTC media servers are servers that act as WebRTC clients but run on the server side. They are termination points for the media where we’d like to take action. Popular tasks done on WebRTC media servers include:

- Group calling
- Recording
- Broadcast and live streaming
- Gateway to other networks/protocols
- Server-side machine learning
- Cloud rendering (gaming or 3D, **Google Stadia** is the most famous one in this field)

The adventurous and strong hearted will go and develop their own WebRTC media server. Most would pick a commercial service or an open source one. For the latter, check out these tips for choosing WebRTC open source media server framework.

In many cases, the thing developers are looking for is support for group calling, something that almost always requires a media server. In that case, you need to decide if you’d go with the classing (and now somewhat old) MCU mixing model or with the more accepted and modern SFU routing model. You will also need to think a lot about the sizing of your WebRTC media server.

For recording WebRTC sessions, you can either do that on the client side or the server side. In both cases you’ll be needing a server, but what that server is and how it works will be very different in each case.

If it is broadcasting you’re after, then you need to think about the broadcast size of your WebRTC session.

## FAQ

❓Can I run WebRTC without any server?

✅ **No**. This is one of the most common misconception in WebRTC world. You will need somehow to know who to communicate with and in many cases, you will need to somehow negotiate IP addresses and even route data through a server to connect your session properly.

❓ Will WebRTC servers spy on me and my data?

✅ That depends on the service you are using, as different implementations will put their focus on different features.

In general, signaling and NAT traversal servers in WebRTC don’t have access to the actual data. Media servers often have (and need) access to the actual data.

❓ Can I host WebRTC servers on AWS?

✅ **Yes**. You can host your WebRTC servers on AWS. Many popular WebRTC services are hosted today on AWS, Google Cloud, Microsoft Azure and Digital Ocean servers. I am sure other hosting providers and data center vendors work as well.

❓ Can I run WebRTC on my website?

✅ WebRTC can be added to any website. In such a case, your website server will serve as the application server (the 4th type I noted above) and you will need to add into the mix the other WebRTC servers: signaling server, NAT traversal server and sometimes media server.

## Conclusion

No matter how or what it is you are developing with WebRTC, you should know what WebRTC servers are and what they are used for, so that you can build a solution that fits your need.

See you in future posts!
