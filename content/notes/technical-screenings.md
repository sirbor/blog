---
title: Technical Screenings
date: 03-12-2024
tags: ["budding", "culture"]
---

There’s so many problems with leetcodes, but mainly in that they are gameable
and usually not representative of the work you will be doing on the job.

I would love something that is more ability to figure out a codebase and grok it
fast to fix a bug or use it.

Can you with outdated docs, and a messy codebase figure out what is going on and
make it pass some test cases — can this be timeboxed?

[Gossip Glomer’s](https://fly.io/dist-sys/) and [Praetorian Tech
Challenges](https://www.praetorian.com/challenges/) are awesome, but being a
requirement can be a hassle for high value candidate

As a talented candidate and there are two companies of equal pay, and I’m not
mission driven I’ll go for the less effort one.

CTF’s are very interesting in the security space. DevOps interviews of trying to
set up a production system and manage a database. etc. I think there's also some
stuff to learn from puzzles online and the kind of thinking they require.

## Online Examples

Using this section to make a small list of different online challenges,
tutorials, puzzles, etc. That I find to be way more impressive and interesting
than your run of the mill leetcode. Some of these are more like tutorials than
challenges, but have you build interesting things

- [Gossip Glomers](https://fly.io/dist-sys/)
- [Praetorian Tech Challenges](https://www.praetorian.com/challenges/)
- [Coding challenges](https://codingchallenges.fyi/)
- [Code Crafters Challenges](https://app.codecrafters.io/catalog)
- [Crypto Pals Challenges](https://cryptopals.com/)
- [Protohackers](https://protohackers.com/problems)
- [Zahada Online riddles](https://www.mcgov.co.uk/zahada.html)
- [HackMIT Puzzles](https://medium.com/hackmit-stories/hackmirror-the-hackmit-2018-puzzle-guide-4be38d5fc673)
- [More HackMIT Puzzles](https://medium.com/hackmit-stories/the-hackmit-2016-puzzle-3b7f9c97455b)
- [Puzzle Hunts](https://blog.vero.site/post/puzzlehunts)
- [Advent of Code](https://adventofcode.com/)
- [Battle Code](https://battlecode.org/)

---

## Notes on Other's Opinions

### The Hiring Post

> https://sockpuppet.org/blog/2015/03/06/the-hiring-post/

Stand out quotes

- "The savviest teams will outcompete their peers by devising alternative hiring schemes."
- "here is the thing about interviews: they are incredibly hostile experiences for candidates."
- "Your first-call people need to be great at putting people at ease and selling the job."

The process they devised is as such:

1. Intro call to warm up candidates and tell them about the job to get them
   excited. Also ask a few questions to test their ability and knowledge of the
   field. If they don't know the field give them materials to get up to speed.
   - A study guide with links/books/videos for them to use
2. Build work-sample tests.=
   - Don't have a 2 week trial test. Best candiates won't do it.
   - Their examples:
     - "we built an electronic trading system in a single-file Sinatra
       project. We made its interface a custom binary protocol. We built an
       extremely rudimentary web interface that drove the protocol. Then we had
       candidates find flaws in the trading system."
     - he same kind of process works for pure dev jobs. So, you’re a Rails
       shop? Take a Rails application you’ve actually built and deployed. Carve
       out some functional areas from the application: remove the search
       feature, or the customer order updater. Bundle up the app with all its
       assets, so that a single “vagrant up” gives a candidate an app that
       runs. Have them add back the feature you removed.

The key of the work sample should be to generate data. So with that in mind a
good rule is to NOT fast track elite candidates, because you want the data they
would generate from going through the test.

Also we want to be as consistent and standardized as possible. Scripts for the
interview are ok so we can prevent inconsistencies between interviewer.

### A Litmus Test for Job Descriptions

> https://jvns.ca/blog/2016/10/21/a-litmus-test-for-job-descriptions/

"Would everyone on your team today have met those requirements when they joined"

There's a lot there. If yes then maybe, if no then is there something really
important that you've found to be a problem before? Should that be highly
prioritized or should it be a nice to have?

### What my technical interviews have looked like

> https://jvns.ca/blog/2014/01/16/what-my-technical-interviews-have-looked-like/

- Start with behavioral and ask about background, expectations, etc.
- No tricky math questions
- More open ended tell me about xyz questions

### Bug squash: An underrated interview question

> https://blog.jez.io/bugsquash/

"Here’s a repo you’ve never seen before. Here’s how to build and run the tests
in this repo. There’s a bug: what we’re observing is X, but we want to see Y
instead. Find the bug and maybe even write some code to fix it."

Generally, agree with it being more relatable to the work on the job and a
better experience all around.

This is the sort of interview I want to be holding and have been thinking of,
it's a fun coincidence that I stumbled onto this article talking about
practically the same idea.

The problems are definitely ones that I've been ruminating on as well.

- Hard and nuanced to make
- Requires upkeep
- In a remote setting often can't depend on the end user having a laptop or
  system that can run everything

## Appendix

- https://guzey.com/talent/
- https://guzey.com/cursed-talent/
- https://danluu.com/talent/
- https://danluu.com/algorithms-interviews/
- https://danluu.com/programmer-moneyball/
- https://matt.sh/panic-at-the-job-market
- https://danluu.com/hiring-lemons/
