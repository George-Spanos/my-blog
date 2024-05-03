---
title: Studying Functional Programming
description: Thoughts on my second try to learn more about functional programming - what's and why's
publishDate: 3 May 2024
tags: ["functional programming", "fp", "haskell"]
---

## Why?

Because I'm addicted to learning new things. Whether this is a framework, a language or a paradigm, I just enjoy digesting stuff mentally. Sometimes I do fall into spirals over this, but I've learned to accept that some things take time to digest. Regarding learning, I have a very specific process:

1. Intake a bunch of information
2. disassemble it into digesting pieces
3. Assemble the pieces into something that solves a problem of yours.

I've found out that this method helps me evolve and creates an amalgam of knowledge that is, at the end of the day, my toolset.

As I've grown older and sometimes interested in less trivial stuff than before, I've come to appreciate the time that it takes for me to learn something. That did not come for granted. There are many times when I still want to get stuff done, rather than "reading docs", or "watching videos". I just want the X thing done with the Y tool. As programmers, we've gotten used to digesting and discarding big chunks of knowledge daily at the expense of diving deeper into specific things, reducing our capacity to understand deeper and deeper things as years pass.

This is why, personally, regarding studying goals, I frame them in a year. For each year I try to get good at **3 things maximum**. This year for me is about:
1. UX UI Design
2. Functional Programming

## My History with Functional programming

This is the 2nd time I have tried to study and understand FP (Functional Programming). My first attempt was 2 years ago when I stumbled upon [marblejs](https://docs.marblejs.com/), _a functional reactive Node.js framework for building server-side applications_, as it labels on the website. At that time, I was working with [playpokerodds.com](playpokerodds.com) and decided to play with this tool. Marble brought me closer to [fp-ts](https://gcanti.github.io/fp-ts/) a library to help developers write purely functional programs with Typescript, which I had never heard of before.

I had a really hard time understanding what was happening with fp-ts and marble. Of course, the reason was that I had no idea about FP. And that's where I started diving in.


## Functional programming - 1st Attempt

I studied for about 2-3 months about FP theory in general, before recalling that I had a course in [NTUA](https://ntua.gr/en/) called Group Theory in which I was introduced to all those ideas but I had of course forgotten. I went ahead and picked up some old books and scrapped the theory again. I ended up creating the web-api for [playpokerodds.com](playpokerodds.com) with marblejs, fp-ts (and io-ts for data validation).

Truth is that, at the end of the day, I did not feel much of a benefit from having a reactive web-api that works with a request-response model, is completely functional and uses Rxjs. It was flashy, but I didn't feel any benefits. Maybe this was because the problem space was rather small. In the end, I ditched fp-ts and marble for this project and wrote a simple express-with-typescript backend very very fast.

So to wrap this section up, I don't consider myself completely irrelevant to the concepts. I feel that after those 2-3 months I became about 20-30% accustomed to some basic FP ideas.

## Why try again?

It is a fact that people who adopt the FP mentality do not shift back. There are a couple of people that I can recall right now, not presented in order of importance:

1. Very recently, Uncle Bob in an [interview](https://www.youtube.com/watch?v=UBXXw2JSloo) with [ThePrimeagen](https://twitter.com/ThePrimeagen) revealed his language of choice is [Clojure](https://clojure.org/), for the last ~15 years.
2. There's been a movement in the Web Front End world for quite some time now that encourages FP. Maybe the greatest example is React, where
`UI = f (state)`.
3. [TJ DeVries](https://twitter.com/teej_dv) is another person who has been playing with FP and OCaml in the last 1-2 years and has generally great things to say about this toolset.

I certainly forget many others. This is a list of the top of my head. Another recent influence was a talk by Greece JS, a JS meetup in Athens, which mentioned [Effect](https://effect.website/).

The biggest influence though came from speaking with [Chrisostomos Bakouras](https://www.linkedin.com/in/chbakouras/), the Director of Backend Engineering at Schoox. I met Chrisostomos at a conference and, at some point he said, "Programming languages aside, it's important to learn to design systems like that", claiming that FP has helped him immensely in his software architectural skills. This stuck with me.

So after all those pokes, I decided to dive in again to FP, this time dedicating more time and taking it slow.

## Current process

I decided to pick up Haskell through [The Haskell Book](https://haskellbook.com/). It's a big one so this is going to take some time.
My goal is to spend enough time with the book and then create something useful with it. I don't know if I'm going to stick with Haskell or maybe use another ML-like language, but I know for sure I'm gonna create something with this toolset, that is probably going to be a web app, end-to-end.

I'm already at about 20% of this book and feel that I'm still just tipping my toes. I haven't felt this excited about learning something in a long time. The fact that it's a slow burn, learning and adjusting your mind to fp, is very very intriguing to me right now.

I might keep a journal on how this goes and I'm probably going to open source everything that I do.

Cheers

George Spanos,

Moby IT
