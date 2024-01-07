---
title: Trying out Vue/Nuxt - Impressions on my first meta-framework
description: Impressions and thoughts after trying Nuxt and Vue after 8 years of Angular development.
publishDate: 4 January 2024
tags: ["angular", "vue", "nuxt", "learning"]
---

## Working with Angular

I come from a background of extensive development of Enterprise Applications with Angular. I've worked with Rx quite
a lot and have been a fan of [Event Modeling](https://eventmodeling.org/) for quite some time. This is why I love the Browser as a platform to develop.

I also do not have any experience in meta-frameworks. To this day, I do not exactly understand where to draw the line between a full-stack framework and a meta-framework.

## Exploring Alternatives

I feel Angular is too complex for its good. I think designing Front Ends reactively is extremely helpful, but it's a choice you have to consciously make and not abide by because your tool says so.

I like the simplicity and straightforwardness of other frameworks like React and Solid.

I strongly believe that the Angular team _is_ moving the framework to a certainly better spot but I'm simply too fed up personally. I feel it's time to explore something new and while I love exploring server-side technologies as well - Go Gophers - I just cannot feel content unless I'm trying to paint pixels on a screen.

## But why not React?

I've been using and teaching about React for more than three years I still don't feel React is straightforward.

I've been seeing huge question marks above people's heads whenever I try to explain to them what happens and how React works and it's always quite frustrating. One of my most influential criteria on whether I'm going to spend time on a tool is how easily I can reason about it with people who are not familiar with it.

I've been a teacher for about 10 years and I learned to trust my ability to tell the difference when I either:

1. Don't explain something well because I lack familiarity with it and whether
2. Something is hard to explain because it's complex.

I feel that both Angular and React are too complex for their good and I'd much rather prefer to work with more intuitive tooling that's closer to the web platform.

_"People refer to Vue as simpler so I might as well give it a try"_, I thought. After all, people who write Vue very rarely whine about it.

## How to learn anything new

Grabbing this chance, I'm going to briefly go over my pattern for learning anything new for the last couple of years is the following:

1. Kickstart your journey with videos. Spend 2-3 days consuming popular content, googling and chat-GPTing on the tool. See how you feel about it.
2. Find some kind of "fundamentals" course. "Fundamentals" courses are an idea that I first stumbled upon on [Pluralsight](https://pluralsight.com). When putting the word "fundamentals" in the title, they usually mean:
   _"Here's a concise end-to-end description of the tool in about 6-8 hours on average._
3. And lastly the most important one - **go through the whole of the documentation**. Good tools might have good documentation. **Great tools always have great documentation**. It's part of what makes the great.

I can't stress how much the last point has helped me. I've ended up saving tens if not hundreds of hours simply because I took the time to read everything the authors had to say about their tool, before jumping into creating any kind of app. Yes, you always need to create something with a new tool to grasp it but please, **PLEASE**, go through their documentation at least once. Go through all of it.

## Study Results

I ended up reading enough that I got the [Vue Developer Certificate](https://certificates.dev/vuejs/certificates/9af879d0-da7f-4b72-a9da-6965d497b1c3) just by reading the Docs and creating 2 sample apps in 3 days. After that, I pushed through to the [Mastering Nuxt](https://masteringnuxt.com/) course. I'm quite proud of myself and feel I've learned useful stuff as well.

## What is a meta-framework after all?

To be frank, I'm still not 100% sure. I'm not sure what goes to a dedicated backend service and what could live at the backend layer of a meta-framework. My understanding is that a meta-framework is here to help the browser render stuff more efficiently. Rendering appropriate data in efficient ways is still very much the primary responsibility of a meta-framework.

For example:

Let's assume that a page requires a user list before rendering content. In a Single-Page Application environment, you would typically implement guards and custom loaders just so you fetch the data via client-side JavaScript.
In a meta-framework environment, you fetch your user list and then populate the HTML. Simple, traditional web behavior.

## Thoughts and feelings about Vue Nuxt

Even though I'm fairly new to this toolset, I have to say I already feel rejuvenated. I feel that I'm not that far from Native DOM while having the ease of use of the component-based frameworks without the complexity of the tooling.

As a developer, I like my pickaxes and shovels. I very much enjoy working with more primitive tools, building up my productivity toolkit for each project and then increasing my development velocity. ES6 has come a long way but it's still quite cumbersome to create complex component-based UIs vanilla. I try for at least one project per year, and it's still not a pleasant experience for me.

So at the end of the day, I have to give credit where credit is due. **You can do amazing stuff with Nuxt** (as well as Next I'm going to guess) **in extremely efficient ways** when compared to a traditional CRUD backend with a SPA project.

The developer experience is simply amazing to the point in which I believe people will deliver more meaningful software with those tools. And I'm not saying this lightly.

While I don't agree with all that [Theo](https://twitter.com/t3dotgg?lang=en) says, I think there's merit to his thesis when he speaks about modern tools, platforms and developer productivity.

George Spanos
