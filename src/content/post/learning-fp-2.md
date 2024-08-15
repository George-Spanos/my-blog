---
title: Onto Functional Programming - part 2
description: Progress on my journey for learning Haskell after 20 days in
publishDate: 19 May 2024
tags: ["functional programming", "Haskell"]
---


## Status update

At the start of May, I embarked upon learning Haskell - my first functional programming language. You can read more about what led me to this decision in [my previous article](https://gspanos.tech/posts/learning-fp/). Now, almost 20 days in and about 800 hundred pages in [the Haskell book](https://haskellbook.com/), I feel **re_ju_ve_na_ted**. I've managed to stick with about reading one chapter per day and I'm still super excited!
It's been years since I solved math exercises on paper which was also a rewarding feeling. Kudos to the book for asking you to do so.

I have to comment that there were points where the book introduced some concepts and symbols without much explanation. I try to do every exercise so finding out things that are there that I cannot practically solve with the so-far knowledge was a bit frustrating. Having the solutions open and not wasting the whole day on each exercise was a good choice overall.

So far I've covered some basic theory around types and the _Semigroup, Monoid, Functor, Applicative and Monad_ (wow) chapters. I feel I've grasped the ideas but I cannot say that I feel familiar enough to create something with them. I can solve the exercises but the mental leap is still too big. That was to be expected though, I'm here for the grind.

What also seems very interesting to me is the ecosystem around Erlang. While dipping my toes into the functional world, it seems like the world of Erlang, BEAM and the Actor model have truly remarkable things to showcase about software architecture and design. Sometimes I struggle to keep my excitement intact so that I can learn about all of these technologies in a meaningful manner so that I do not get overwhelmed.

I want to mention also the **incredible** podcast of [Kris Jenkins](https://twitter.com/krisajenkins) called [Developer Voices](https://www.youtube.com/channel/UC-0fWjosItIOD4ThhS6oyfA). Kris and his guests have been amazing companions when I don't work or study about Haskell these days. Incredibly insightful talks, very exciting and pretty much foreign subjects to me. I cannot recommend this podcast enough. So episodes I highly recommend are:

1. [Designing Actor Based Software](https://www.youtube.com/watch?v=CBUWcUuG6Ss)
2. [Simon Peyton Jones, no description is needed here](https://www.youtube.com/watch?v=UBgam9XUHs0)
3. [Roc - A functional programming language by Richard Feldman](https://www.youtube.com/watch?v=DzhIprQan68)
4. [Is Gleam your next programming language](https://www.youtube.com/watch?v=RntfkL8lUY4)

## Roadmap

My current roadmap regarding FP is to:

1. Finish the Haskell book
2. Rewrite my chat application, [Boochat](https://github.com/moby-it/boochat-server) - this app used a hybrid approach of event sourcing. I aim to rewrite it with some functional language, probably Haskell, and adjust it into a fully event-sourced model.
3. Recreate the [web UI of Boochat](https://www.figma.com/proto/2Jl3UG4KZk7r4fXkAQh8ys/Boochat-Lib-1.0?t=wNXdM7tgkEzyTzQT-0&scaling=min-zoom&page-id=0%3A1&node-id=455-2490&starting-point-node-id=455%3A2490). I aim to use [Rescript](https://rescript-lang.org/) with my port for it, using [The Elm Architecture](https://guide.elm-lang.org/architecture/)

After I'm done with the above I'm considering to maybe diving into BEAM, probably through [Gleam](https://gleam.run/), which also seems like a very interesting project.

It's been years since I've been so excited about learning new things related to software. I'm close to my 10-year mark in the industry and things have started to become a bit stale. I feel very grateful for having the opportunity to study all of those things at such a low cost. It's nice to appreciate how amazing the internet is, from time to time.

Cheers,

George Spanos,

Moby IT
