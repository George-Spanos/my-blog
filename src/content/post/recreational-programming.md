---
title: Recreational Programming: C, Assembly, and a Raspberry Pi Zero
description: Sharing my experience spending time learning programming on bare metal, with the help of AI
publishDate: 13 April 2026
tags: ["c", "programming", "bare metal", "ai"]
---

# Status Quo

For the last 2 years, I've found myself feeling that programming is not as fun as it once was. This started to come to me even before the AI bloom.
With all this tooling around code generation, I've really missed the days in which we sat down, went deep into a problem and actually structured solutions
in forms of algorithms.

I figured I'll try to replicate that, and to borrow from [tsoding](https://www.youtube.com/tsoding), who is a great source of inspiration, I'll use the term *recreational programming* for this activity I've been doing for the last couple of weeks.

# The project

I've always wanted to get better at C. I have really basic knowledge of it. I've played with Go and Rust and have been familiar with the idea of pointers, but certainly not to a great extent.

I recall a quote from Linus Torvalds saying that C is so simple that he can picture the assembly instructions of almost all C commands as soon as he sees them. Assembly is also something I've never fiddled with.

So this is why I decided to grab a [Raspberry Pi Zero](https://www.raspberrypi.com/products/raspberry-pi-zero/) and write some bare metal code on it. Not a CLI tool. Not a game in SDL. Bare metal — no OS, no standard library, nothing between my code and the hardware. I wanted to see what happens when you strip away every layer of abstraction that I've been standing on for the past decade.

I just downloaded the basic linker and boot files from the Raspberry repository and started to roll.

[repo](https://github.com/George-Spanos/teachOS)

# Scope

I downloaded all PDFs required for the relevant chips and CPU of the RPi Zero. I immediately realized that each part of this device has about 1000 pages of docs. The ARM1176JZF-S technical reference alone is massive. The BCM2835 peripherals manual is another beast. This is something that would take months for me to read — enter AI.

After I set up a project in Claude with the relevant files, I was trying to transform it into a mentor with really specific instructions:

- Tone: Didactic — precise, no unnecessary information, builds knowledge incrementally.
- Start from absolute zero — do not anticipate existing knowledge.
- Introduce one concept at a time, take feedback, then proceed to the next one.
- Avoid unexplained abbreviations.
- Connect theory to practice, immediately after introducing new concepts.
- Explain the value behind a concept, immediately after explaining it.
- Assembly first, then C — build understanding in assembly before showing the C equivalent.
- For C and ASM (assembly) code: guide, don't write. Let me write the code; help me navigate problems.

That last point is important. I didn't want a code generator. I wanted a teacher that would explain what a register does and then let me figure out how to write to it.

# AI as a mentor

Claude's project feature lets you upload documents and set a system prompt that persists across conversations. So I uploaded the BCM2835 peripherals manual, the ARM CPU reference, and set the guidelines I mentioned above. Over time, the system accumulated memory from our conversations — it remembered what we'd covered, what I struggled with, what patterns we established.

When it worked, it was remarkable. I would ask "how do interrupts work on ARM?" and instead of dumping a wall of text, it would start with the vector table, show me the assembly, wait for my questions, then move to the C wrapper. **One concept at a time.**

It also said *no* to me. Multiple times. That was a great indicator for a system that is limited by nature, following certain instructions.

Correlating this tutoring experience to the ones I tried to have in 2024 and 2025, the difference is night and day. It's once again obvious that modern models hallucinate less, are better at following instructions and plan actions considerably better.

# Roadmap

Here's what I covered, roughly in order:

| Phase | Topic                                                                |
|-------|----------------------------------------------------------------------|
| P0    | Boot (bare-metal boot, linker script)                                |
| P1    | UART TX (Mini UART → PL011 rewrite)                                 |
| P2    | GPIO output (GPFSEL, GPSET, GPCLR)                                  |
| P3    | Framebuffer (mailbox, draw_pixel, draw_rect, draw_char, draw_string) |
| P4    | Interrupts (IRQ vector table, timer IRQ)                             |
| P5    | Heap (kmalloc, kfree)                                                |
| P6    | Scheduler (cooperative → preemptive, 17-register context)            |
| P7    | V3D GPU init (mailbox enable, identity registers)                    |

This took about two weeks of evening sessions. I was using QEMU to emulate the Pi Zero for most of the development, and GDB to inspect registers live. When something worked in QEMU, I'd flash it to the actual hardware to verify.

# Highs and Lows

**The heap allocator was my favorite phase.** Something about implementing `kmalloc` and `kfree` from scratch — actually managing memory blocks, splitting them, merging free blocks — felt really nice. No frameworks, no abstractions, just data structures managing raw memory, and to be honest at a really basic level, still was very rewarding.

**Seeing pixels on the framebuffer for the first time** was a close second. You go from a black screen to a colored rectangle. There's no DOM, no canvas API, no GPU driver. You write a value to a memory address and a pixel lights up. That's it.

**The preemptive scheduler** was the most educational phase. Understanding the difference between cooperative and preemptive scheduling at the register level changes how you think about every program you've ever written. Nowadays we're so used to things happening concurrently/out of order that we take them for granted.

In cooperative scheduling, a task voluntarily yields — so you only save the registers you need. In preemptive scheduling, the CPU interrupts a task mid-execution. It could be in the middle of anything. So you save everything — all 17 registers. Watching this happen live, seeing the register values swap as the scheduler switches between tasks, made the concept feel completely tangible.

**Working with VideoCore IV GPU was tough.** After trying to render some shaders I found online I quickly faced the limitation of the RPi Zero CPU. A shader is essentially a program that is applied on a number of pixels. Since the calculation is the same for all pixels, parallel computation is essential. Even with very cheap hardware like the RPi Zero, calculating a shader was millions of times slower on the CPU than on the VideoCore IV.

I tried to learn how I could use those features **without drivers** and it proved to be really tough. Even for painting a triangle via the GPU, Claude made me copy and paste hundreds of lines of integer arrays that contained instructions for the GPU that were practically unreadable. This GPU has a Linux driver which you can then write GLSL and work just fine, however, on bare metal, this is really tough. Drivers were probably around the tens of thousands of lines (at least that's what Claude said).

At this point I decided I've done enough with this project for now, and it's a good time to document my progress and share my experience.

# Conclusions

- When Claude got accustomed to our workflow and guidelines, working with its memory, it was a solid learning experience. It would've taken me months to go over the PDFs for understanding what I need to do for this small system-on-a-chip project. I would either have to find better resources or try to filter all the information from those documents myself.

- Claude was really good at staying consistent on the guidelines. It actually said *no* to many of my requests due to contradictions with our scope.

- I did have a lot of fun. It's really something to try to understand and fiddle with assembly, C, registers, schedulers, timers. Next time I pick up my phone, the amount of code and abstraction layers behind what we casually use each day is mind-blowing. It's really impossible for someone to understand computers end to end nowadays.

However this is also the reason why we've managed to build so many things — one building on top of the other.

I might continue this project at some point. There's a Snake game sitting in the back of my mind — CPU rendering on the framebuffer, GPIO buttons for input, buzzer for sound effects. No GPU rendering, thus tons of reduced complexity.

But for now, this was enough. It was fun. That was the whole point.

George