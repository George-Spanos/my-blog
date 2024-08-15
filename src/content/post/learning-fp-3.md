---
title: Onto Functional Programming - part 3
description: Review of the Haskell book and next steps trying to learn functional programming
publishDate: 17 June 2024
tags: ["functional programming", "Haskell"]
---


## Status update

At the start of May, I embarked on learning Haskell, my first functional programming language. In case you want to read the journey from the start, you can browse through the [homepage](https://gspanos.tech/) of this blog. I managed to finish the [Haskell book](https://haskellbook.com/) and also continued to consume content related to Functional Programming, such as YouTube videos that feature Simon Payton Jones talks, Developer Voices, a podcast hosted by [Kris Jenkins](https://x.com/krisajenkins) and [Software Unscripted](https://x.com/sw_unscripted), a podcast hosted by [Richard Feldman](https://x.com/rtfeldman). The podcasts are not exclusive to functional programming, but people with experience with fp tend to take part in them quite often.

## The Haskell book review

The book is about 1200 pages long. It's by far the longest book I've ever read. It took me about 45 days to complete it. Up until the monad transformer (Chapter 26), I was able to keep up with all the excersices. After that, there were a bunch of chapters that were pretty tough for me, the first one being monad transformers. I feel that I reached a point where some ideas like transformers, strictness and
error handling are things which I will get used to after developing some stuff with Haskell.

Most of the book was amazing, definitely until Parser Combinators. From that chapter and on, about 900 pages in, I felt that the book lacks the consistent and clear explanations of the previous chapter. Maybe this is the result of subjects getting inherently more complex as the book progresses, but there were a couple of areas where you consistently faced syntax and code that was not yet explained at all. As a reader, I got accustomed to trying to understand everything, or at least most of it, when reading something, but at some point this became tougher and tougher in the book, whereas I would expect that, as you build more tools, you digest things easier, not harder.

In order to understand parser combinators, I ended up creating my own [JSON parser](https://github.com/George-Spanos/haskell/tree/main/jsonp) which indeed helped a lot, but there are still some areas and basic typesclasses which I do not grasp clearly, like Foldable, Traversable and some more. Honestly, I'm still struggling with combining Functors with Applicatives but I expect that this is only going to get easier with practice.

My next goal is to implement something end-to-end with Haskell. I'll probably sprinkle some [Rescript](https://rescript-lang.org/) into the frontend (let's see how easy that will go). I try to port [Boochat](https://github.com/moby-it/boochat-server), a chat and meeting web application that I wrote a while ago, based on Domain Driven Design and Event Sourcing. This app is going to have RESTful endpoints, websocket updates and a message broker in-between so that it abides by the Event Sourcing principles.

I remember having tons of excitement when creating this project, both because I got to play with an event-driven architecture and also because I got to implement the amazing designs of [Katerina Spatharou](https://www.linkedin.com/in/katspatharou/) in this toy project of ours. If you want to check them out, you can find the Figma files [here](https://www.figma.com/design/2Jl3UG4KZk7r4fXkAQh8ys/Boochat-Lib-1.0?t=uvsLtuJHm37CkaI0-1).

Till next time,

George Spanos,

Moby IT
