---
title: Thoughts on RxJS and declarative code
description: George Spanos opinions on why not choose rxjs for structuring your front end interactivity.
publishDate: 25 February 2025
tags: ["rxjs", "angular"]
---

What triggered this train of thought was a recent [Joshua Morony video](https://www.youtube.com/watch?v=KcFWOMbGJ4M), a programmer and content creator who works, primarily, with reactive programming. Instead of just chatting about it with colleagues, I decided to write a blog post about my thoughts on the subject.

I've been in the RxJS camp for years. I've built projects and structured solutions with it, using Angular and mostly NgRx. I've felt that it was the tool to solve most, if not all, front end problems, orchestrating and synchronizing actions on data. I've worked with people that are familiar with the concepts, and people that are not.

In the last 2-3 years, I've been growing distant from declarative programming and its core principles. In this article, I'll explain why that is, and why I believe it's mostly a bad idea to spend time organizing your projects and code control flow this way.

## As a young programmer

You see something that "seems clean" and it "feels tidy" and all the molecules in your body scream "THAT'S A BETTER APPROACH". When you feel that, please take a step back and re-evaluate. 

When something clicks and feels natural, it's usually a good indicator of its quality. However, when something is **really** hard to explain and reason about, it's also a big indicator of the same thing. Remember that answers like "it's a better practice" or "this code is cleaner" are never reasons to pick anything over something else. Proof is where you should decide on.

Specifically in Angular, we've all felt that RxJS solutions "are better", when we actually understand them. But, I feel RxJS issues arise when you try to explain it to someone else. And this is where our first indicator of "something-going-wrong" should be. In my opinion, it's unreasonable for people who have studied computer science to struggle so much understanding the concepts and ideas of a library. That's usually a tell about the tool, not the people.

## Why is RxJS difficult to explain?

People who have studied computer science are mostly familiar with imperative programming. This is normal, as machines do work in imperative ways. We learn to think like these kinds of machines when we first learn programming in school. And while you might feel that imperative programming might feel bloated, or that it shows "too much details" that "you don't care" about when trying to solve a programming problem, this _code has to be written_ for the system to work, whether that code is part of a compiler or is application-level code is another story. 

I'm not advocating for E2E systems with no declarative APIs by any means, I merely want to point out how systems work.

And I believe no one can argue against understanding how _computers_ work on a deep level, and its value, when studying to become a _computer_ scientist.

Now, considering the above, it's obvious why computer science graduates and professionals are familiar with imperative styles more than declarative styles.

## Control flow

The problem with declarative programming is not the concept of being declarative. This cannot go wrong, as a concept. However, when declarative programming destroys the sequential control flow of a program, that's where all goes wrong.

You can think of code execution as a tree. You walk down a certain branch, then you might branch onto something else, then you might jump on a function call to read that branch, then return with something, and ultimately, you finish the branch with certainty that you read all you can read here.

The quality of a software system to be trackable by people who haven't spent an unreasonable amount of time understanding it, is what has made legendary projects legendary. It's the core principle of all projects that are under development for 10-20-30 years. 

RxJS introduces another tree as a whole, the reactivity tree. Somehow, you've tied a block of code to something that _might_ execute under certain conditions, that might be folders away, potentially. Functions are the fundamental structure of _breaking_ control flow but we do not typically consider them as such, since it's very easy to track where the execution resumes. 

In my experience, this makes large reactively-structured projects incredibly difficult to work with.

Signals have the same problem.
JavaScript's global scope and event listeners have the same problem.

Finally, as far as I understand, this is one of the reasons the React team does not want to implement something like signals in the framework. While they might be more performant, people can reason about the output of a react component by simply reading through the component code at **any given point**. This is not true for any other framework, as far as I know.

Keeping control flow straightforward is, for me, the single most important thing that a programmer has to have in mind when writing code. RxJS seems to scale the complexity of this very very much. I feel the same about interface based programming in Java, where you run code that is compiled from a dozen classes that implement an interface that resides somewhere in the codebase, completely outside of the current context you are working on.

I feel that, when working on projects that people use, taking an imperative approach to programming, that is more readable by anyone, and where you don't "need to know" any pattern or framework to understand it, is invaluable.