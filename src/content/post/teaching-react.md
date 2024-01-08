---
title: Teaching React and Express - One-year review
description: Personal retrospect on teaching React and Express to people with no programming background.
publishDate: 1 January 2024
tags: ["bootcamp", "react", "express", "web-dev"]
draft: true
---

## Foreword

I've been teaching for 12 years even though teaching was never my primary job. It was my primary income as a student and it was the only "job" I managed to do as a student without hating myself. Others included working at cafes, phone sales, tech support, you name it.

After jumping into programming I started teaching again naturally. I studied math so programming was not new to me but it was something I had to teach myself to get to a professional level. I remember helping quite a bunch of people over the years - people needing help with job assessments, help to build up a stronger feel for a specific tool that I happened to be accustomed to, or even help to get a grasp of some math behind programming on a deeper level.

So math and programming. This is what I've been teaching.

## The setting

After doing this for quite some time I decided to give it some structure. I thought that since people seek my advice often, maybe I could structure this knowledge and provide a boot camp for people who want to get into software from non-related fields of study.

My first set of students were 3 friends who wanted to leave their jobs for something better. After all tech jobs pay better than the average job out there. I was very glad when my friends could not attend the boot camp after 6 months in because **they got a full-time job**!

## Bootcamp Curriculum

Before reflecting on teaching React and Express, I want to give a brief overview of the course curriculum so that you know what foundation my students had up to that point of the course:

1. **Web Basics** - Clients, Servers, Network
2. **Basics of Computer Science** - CPU, Memory, Programming Languages
3. **Modern Web Technologies and Patterns**. - Frameworks and Tooling, Security, Cryptography, System Abstraction
4. **Basic programming with JavaScript** - Language Runtimes, VMs, Compling vs Scripting
5. **Front End** - Browser and playing with the DOM API
6. **Front End Frameworks** - React
7. **Git** - Souce-control whats and whys
8. **Backend** - Server, Database, SQL, Monitoring, Testing, ExpressJS
9. **Databases with PostgreSQL**
10. **Production** - Packaging, Deploying, Monitoring, Profiling, Tracing

This is not an exhaustive list and I'm not giving enough intel on each bullet but you get the gist. In no way do my students see React as a first interaction with code. My students typically understand much deeper concepts before reaching React, at least to a certain extent.

## Teaching DOM API

The DOM API is simultaneously the best and worst thing about the Browser probably. It's good due to the beautiful things we've managed to build up on it. It's bad because we needed so many tools on top of the native ones in the first place.

Assuming they are familiar with what an API is, people typically respond nicely when taught about the DOM API. It's straight-forward, the API has meaningful function names and the behavior is pretty predictable if you know how the browser works. They also seem to have fun messing with HTML via JavaScript.

## Teaching React

Now jumping from the DOM API to React is usually violent. People, in my experience, don't seem to respond well. _React feels like magic while the DOM does not._ Trying to explain hooks is easy when you've spoken about closures.

> But when I use `useState` it seems like the component starts having some memory about things. Some "state". How does a component remember the last value? How does a component know which value is which when re running?

These are questions that have answers, yes. But no one feels good when hearing the answers. People seem baffled by the complexity. It does not come naturally to them.

I've already considered if React _is_ the correct next step after the DOM API and it may as well not be. Maybe spending more time on sophisticated rendering mechanisms makes more sense but I think this might be a bit too much. Considering also that the current market might even consider my learning path quite more complex than it should be.

What I'm trying to come down to is that even while I believe that React as a library and paradigm **certainly** has benefits to offer, I dislike the fact that it's tough to convey. And I don't believe there's no work around that.

## Teaching Express and Databases

Now jumping to the next part of the equations. After explaining what Nodejs is, what is persistent storage and a file system, we typically move on to the back-end and databases. And while the backend is the field in which I'm less experienced, when relating to the front end, people seem to feel that the back end is _so.much.easier_ to understand.
Stuff like middleware, connections, authentication, and sessions feel much easier to explain because people grasp them faster. _They are a lot but they don't seem as magical as React_. So, at the end of the day, I usually end up enjoying teaching the back-end more than the front-end, even though I like working more in the front-end.

## Conclusion

The above data has been bringing questions to my mind constantly. _Is the front-end ecosystem too complex right now? Have we overdone it maybe? Do we always need a SPA? Did we forget that there's a difference maybe between a website and a web app?_

To be honest your typical web app out there I think Front-End is more complex than the Back-End. Both in terms of tooling and requirements. Back-End complexity typically relates to data complexity. Or business problem complexity. On the other hand, Front-End complexity can be exclusively user-driven rather than data-driven. Please take this statement with a grain of salt as it comes from my own biased experience, but this is what I've seen in my 9 years being around.

I believe that there's a time and place for every tool. I fear that we've built amazing hammers and we're now searching in search of nails rather than the opposite. I believe a strong engineer knows many tools and specializes in a few. But when requested, he can pick up any tool in a reasonable timeframe.
