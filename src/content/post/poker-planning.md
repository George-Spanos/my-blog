---
title: Developing a Poker Planning app
description: Challenges while developing a Scrum Poker Planning with multiple tech stacks.
publishDate: 21 January 2024
tags: ["golang", "solidjs", "web dev", "poker planning"]
draft: true
---

## Problem Space

While I was working as a front-end architect at a company in the cybersecurity space, we started working with story points and therefore we came up with a need for a poker planning app.

> For anyone not familiar, Planning Poker, also called “Scrum Poker,” is a consensus-based Agile planning and estimating technique used to assess product backlogs, guessing how much time and effort is needed to complete each of the backlog’s initiatives. You can read more about it [here](https://www.simplilearn.com/what-is-planning-poker-article#what_is_planning_poker).

We searched for apps online but most of them did not seem UX-friendly enough for our standards, and the ones who did, were behind a paywall. The problem seems quite trivial, so I decided to solve it myself and [open-source](https://github.com/moby-it/planning-poker) it.

## The Tech Stack

For new projects that have a certain scope, I almost always grab this chance to mess with new technologies. I've been writing Go for at least 18 months at this point and thought that this could be a good project to play with some concurrency and WebSockets programming.

Regarding the UI layer, I was **considerably more conflicted**. I was through a phase in which I felt that most front-end tooling was too complex for most of the tasks that I usually require. I still feel that, on a relatively lighter scale. For the sake of comparison, I decided to re-implement the UI with multiple technologies. Tools that I used included:

- React
- **SolidJS**
- Nuxt
- VanillaJS
- HTMX

With most of them, I did not go all the way to the end. I reached a point in which I felt that I did not have to gain much anymore and then either moved to the next one or took a break. You can find more about my implementations [here](https://github.com/moby-it/planning-poker/branches).

**The current production implementation is done with Golang as a stateful, WebSocket-based backend and the UI is done with SolidJS. There's no database in this project.**

## Project Challenges

The problem is generally straightforward. A user has a username and can create a Room, in which people can join and vote. Votes come in the form of numbers. There is a synchronization issue within each Room, as each voter needs to vote before the revealing is available. This means that there are different Room States and User Vote states.

What I discovered to be the most challenging part of this problem is the consistency of connections. WebSockets tend to close in quite sensitive ways in Modern Browsers. To name a few, one of them being that a user is alt-tabbed, or even when there is no mouse movement for about 20 seconds or more. These issues are primarily browser restrictions for security and resource-saving, that the app has to foresee to be stable. We need to implement appropriate ping-pong messages for keeping the connection alive, while always trying to reconnect when the socket closes, to cover all inconsistencies between how different browsers handle WebSockets. There's also the behavior of Poker Round Readiness after a user disconnects and does/doesn't reconnect.

## Server-Side remarks

This was another one of those wonderful times when picking Go led me to learn more about the underlying platform rather than simply exploring this specific problem. This, to me, always feels amazing. I used the [gorilla/websocket](https://github.com/gorilla/websocket) library and just by reading the code and the official [WebSocket specification](https://datatracker.ietf.org/doc/html/rfc6455), I learned so much about what a WebSocket connection actually is. I've written 3-4 chat clients and servers and yet I learned more about WebSockets through this project.

- I learned that the nature of a TCP connection is not to close by default, even though this is how we've learned that HTTP works.
- TCP connections terminate explicitly. In the case of HTTP, this explicitness comes from the HTTProtocol rather than the nature of the connection.
- The WebSocket connection is essentially an HTTP connection that gets "upgraded" through a specific header. This indicates to the server that this connection should stay open and receive incoming messages with a specific format, which is described in the WebSocket Protocol.
- The connection is done over TCP ports 443 or 80 and its goal is to enable a two-way communication between server and client.

While I knew most of this, I lacked some specifics that made my understanding of WebSockets quite vague. The implementation of Web Sockets in Go can be found [here](https://github.com/moby-it/planning-poker/tree/main/api).

## Client-Side remarks

### SolidJS

SolidJS ended up beating every tool in terms of simplicity. The next one for me would be VanillaJS, but there's a considerable margin present, simply because of the ease of development. There's still just too much boilerplate and imperative programming you have to go through, when you're trying to do almost anything with VanillaJS. On the contrary, SolidJS gave me access to the declarative concepts of React, while still staying as close to the platform as possible.

> Thank you, [Ryan](https://twitter.com/RyanCarniato) and the [SolidJS contributors](https://github.com/solidjs/solid/graphs/contributors) for the amazing work.

Having worked with React, I implemented this with Solid with my mind mostly being shut off. I typed some code that felt intuitive and **stuff just worked**. It was amazing.

_Of course, this problem is solvable with every one of the above-mentioned tools. I'm commenting on what was easier to implement and test, and ultimately, reason about._

### HTMX

I did not go all the way with HTMX. I managed to receive and send messages through WebSockets, but something about exchanging WebSocket messages in HTML format just felt wrong. I did not separate the Business Logic API from the HTMX API which would help, but still, the data with HTML and WebSockets felt wrong. At the end of the day, HTMX is a tool I will come back to at some point.

### React

I don't have much to say about React. The implementation was relatively straightforward, with the classic nuances of `useEffect`, Memos and Callbacks a React app typically has. Component wise it was very similar to Solid. State-wise, signals inside contexts were much easier to structure and reason about than `useState`.

## Conclusion

Even though in the end I got tired of re-implementing the same app again, and again, and again, just to mess up with different tools, it's something I would advise anyone to try at some point. When you know the business problem inside-out, you get a particularly clear lens on what each tool is good and not good at, so that you can find what suits your tastes better.

George Spanos,

[Moby IT](https://moby-it.com/)
