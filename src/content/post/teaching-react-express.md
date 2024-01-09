---
title: Teaching React and Express - One-year review
description: Personal retrospect on teaching React and Express to people with no programming background.
publishDate: 14 January 2024
tags: ["bootcamp", "react", "express", "web-dev"]
draft: true
---

## Foreword

Even though teaching was never my primary job, I've been teaching for 12 years. It was my primary income as a student and it was the only job I managed to do as a student without hating myself. Others included working at cafes, phone sales, tech support, you name it.
In 2015, I decided that I was going to pursue programming as a career. After a couple of years, teaching came back naturally. I studied math, so programming was not new to me, but it was something I had to teach myself to get to a professional level.

So, essentially, I was the first person to teach programming. The learning path was there. It was personalized, but it was there.

Over the following years, many people reached out, asking how I managed to break into the market. I remember helping quite a bunch of people - some needing help with job assessments, others to build up a stronger feel for a specific tool, and some even struggling to grasp some of the math behind programming. I remember one who ended up meeting me in Greece and bought me a present because I helped him get a job, which still makes me proud and grateful.

_So math and programming. This is what I've been teaching._

## The Web Development Bootcamp

After doing this for quite some time I decided to give it some structure. I thought that since people seek my advice often, maybe I could structure this knowledge and provide a boot camp for people who want to get into software from unrelated fields of study.

That was not me trying to monetize this. I don't think it's at that state yet.

But since I was doing it, I thought I might as well do it and give my best.

The goal is to help people:

1. Identify whether they would like a job in tech or not and,
2. If yes, help them break into the market by building a solid foundation around web programming

My first set of students were 3 friends who wanted to leave their jobs for something better. After all, tech jobs still pay better than the average job out there. I was very glad when 2/3 could not complete the boot camp after 6 months in because **they got a full-time job in software**!

## Bootcamp Curriculum

Before reflecting on teaching React and Express, I want to give a brief overview of the course curriculum so that you're aware of the foundation my students had up to that point of the course:

1. **Web Basics** - Clients, Servers, Network
2. **Basics of Computer Science** - CPU, Memory, Programming Languages
3. **Modern Web Technologies and Patterns**. - Frameworks and Tooling, Security, System Abstraction and APIs
4. **Basic programming with JavaScript** - Language Runtimes, VMs, Compilers, Scripting and JIT
5. **Front End** - Browser and playing with the DOM API
6. **Front End Frameworks** - React
7. **Git** - Souce-control - the whats and whys
8. **Backend** - Server, Database, SQL, Monitoring, Testing, ExpressJS
9. **Databases with PostgreSQL**
10. **Production** - Packaging, Deploying, Monitoring, Profiling, Tracing

This is not an exhaustive list as I'm not giving enough intel on each bullet, but you get the gist of it. _In no way do my students see React as a first interaction with code._ My students typically understand much deeper concepts before reaching React, at least to a reasonable extent.

## Spending time with the DOM API

I believe this is something all front-end developers should do at some point. The DOM API is, probably and simultaneously, the best and worst thing about the Browser. It's good, due to the beautiful things we've managed to build upon it. It's bad because we needed so many tools on top of the native ones in the first place.

Assuming they are familiar with what an API is, **people typically respond nicely when taught about the DOM API**. It's a straightforward process. The API has meaningful function names and the behavior is pretty predictable if you know how the browser works. They also seem to have fun messing with HTML via JavaScript.

## Teaching React

Now jumping from the DOM API to React is usually pretty rough. Even though we try to replicate how modern front-end frameworks handle re-rendering or stateful data, people don't seem to respond well to this kind of shift. _React feels like magic to them, while the DOM does not._ Trying to explain hooks is easy when you've spoken about closures, but

> When I use `useState` it seems like the component starts having some its own `memory` about some variables. There is local "state" here. How does a component remember the last value? How does a component know which value is which when re running? Is the state mapped per DOM node?

> Student A

These are reasonable questions that I also had back then. The best answer is to dive into the actual implementation of `useState` in that case. **It's important to understand that code is code and there's no magic at the end of the day. It's just a bunch of code.**

> If only we lived in a world where I could `Go To Definition` and read the actual implementation of `useState`
>
> Intro for another article

However, students typically don't feel good when hearing/finding the answers to those kinds of questions. People seem **baffled** by the complexity. It does not come naturally to them.

I've already considered if React _is_ the correct next step after the DOM API and it may as well not be. Maybe spending more time on more stateful rendering mechanisms makes more sense, but I think this might be a bit too much so I've decided to leave this choice aside for now. But maybe it's something worth revisiting.

What I'm trying to come down to is that, even while I believe that React as a library and paradigm **certainly** has benefits to offer, I dislike the fact that it's tough to convey. This certainly reveals a lot about the state of modern web development. After walking through mud for somewhat 10 years, most of us have forgotten how it was to walk on concrete. Trying to teach the "standards" to new people is always a good reality check.

I'm sure we can do better here.

## Teaching Express and Databases

Now jumping to the next part of the equation - _the backend_.

After explaining what Nodejs is, what is persistent storage and a file system, we typically move on to the backend and databases. And while the backend is the field in which I'm less experienced, when relating to the frontend, people seem to feel that the backend is _so.much.easier_ to understand.

Stuff like middleware, connections, authentication, sessions, etc. feels much easier to explain and understand. They are a lot, but they don't seem as **magical** as React.

_React feels like Willy Wonka's Chocolate Factory while backend tooling feels like a bunch of simple legos that fit certain spaces._ Someone can argue that even some of Reacts native _legos_ are factories of their own.

So, at the end of the day, I usually end up enjoying teaching the backend more than the frontend, even though I like working more in the front end. This has the funny side effect in which, while I love frontend, my students typically prefer working on the backend.

## Conclusion

The above data has been bringing questions to my mind constantly.

> Is the frontend ecosystem too complex right now? Have we overdone it maybe? Do we always need a SPA? Did we forget that there's a difference maybe between a website and a web app? How could we improve the learning experience?

I've come to believe that in your typical web app out there, the frontend is more complex than the backend. Both in terms of tooling and requirements. Backend complexity typically relates to **data complexity and/or business problem complexity**. On the other hand, frontend complexity is mostly user-driven rather than data-driven. I've discovered that user interaction issues tend to be more complex and less intuitive than data processing. Data is more deterministic. User behavior is not.

_Please take the above statement with a grain of salt as it comes from my own biased experience, but this is what I've seen in my 9 years being around._

In regards to tooling, there's a time and place for almost every tool. Tread carefully though; **when you have an amazing hammer, many things tend to look like nails**.

A well-rounded engineer has familiarity with many tools and specialization in a few. When requested, they should have the clarity to pick whatever suits the job in the most efficient of ways. And as mechanical engineers typically say,

> you're as good as the tools you use

Would be glad to read more about your thoughts and experiences

George Spanos
