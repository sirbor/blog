---
title: SDK Generators
date: 04.29.2024
tags: ["seed", "dev", "review"]
---

For the past few months I have been working on managing the
[Honcho](https://honcho.dev) project and its associated SDKs. We've been taking
the approach of developing the SDK manually as we are focused on trying to find
the best developer UX and maximize developer delight. 

This has led to a rather arduous effort that has required a large amount of
refactoring as we are making new additions to the project, and the capabilities
of the platform rapidly expand. 

While these efforts have been going on a new player in the SDK generation space
dropped on [hacker news](https://news.ycombinator.com/item?id=40146505).

When I first started *Honcho* I did a cursory look at a number of SDK
generators, but wasn't impressed with the results I saw. However, a lot of that
was speculative and Honcho was not nearly as mature as it is now. 

So spurred by the positive comments in the thread above I've decided to do a
more detailed look into the space and, also try to develop a better understanding
of what approaches are generally favorable in creating API client libraries. 

## Background

For a full understanding of Honcho I recommend the great [Simple Honcho
Primer](https://blog.plasticlabs.ai/blog/A-Simple-Honcho-Primer) post, but I'll
try to summarize the important details here. 

Honcho is a personalization platform for LLM applications. It is infrastructure
that developers can use for storing data related to their applications, deriving
insights about their data and users, and evaluating the performance of their
applications. This functionality is exposed through a REST API interface with
the following resource constructs. 

|\_\_\_\_Apps  
|\_\_\_\_|\_\_\_\_Users  
|\_\_\_\_|\_\_\_\_|\_\_\_\_Sessions  
|\_\_\_\_|\_\_\_\_|\_\_\_\_|\_\_\_\_Messages  
|\_\_\_\_|\_\_\_\_|\_\_\_\_|\_\_\_\_Metamessages  
|\_\_\_\_|\_\_\_\_|\_\_\_\_Collections  
|\_\_\_\_|\_\_\_\_|\_\_\_\_|\_\_\_\_Documents  

So Apps have Users that have Sessions and Collections where Sessions can have
Messages and Metamessages and Collections can have Documents.        

At the time of writing this post Honcho is being manually maintained with a
singular client SDK for the Python ecosystem. The SDK is co-located in the
[repo](https://github.com/plastic-labs/honcho/tree/main/sdk).

The SDK is written in an object oriented style where the top level `Honcho`
object will return lower level objects such as a `User` object and `Session`
objects. These objects contain the CRUD methods necessary to use them. 

There is an Async version of the SDK with an `AsyncHoncho` class that uses
objects such as `AsyncSession` and `AsyncUser`.

## Guiding Questions

Before evaluating the below platforms I wanted to investigate a few questions I
had about how to design SDKs and how they are generally maintained in other
organizations. I've also included some questions I want to think about when
looking at the different platforms

I'm doing this through the lense of a Python developer as Honcho currently only
has a Python client library with plans to quickly expand to other ecosystems.

General SDK Questions

1. Do developers prefer an object-oriented approach or idiomatic approach for
   client SDKs that wrap a REST API?
2. What additional features are generally important in SDK design outside the
   functionality of the API (retry, pagination, etc.)?

Platform Specific Questions

1. How readable and easy to understand is the generated code?
2. How customizable is the end result?
3. How easy was it to use the tool?
4. What approach does the tool take? Object-oriented or idiomatic?
5. How does it handle async vs sync interfaces?

## Research

> First I took a look at sources and posts onlines that talk in general about
> developing SDKs.

[Any design patterns and tips on writing an API client library](https://www.reddit.com/r/Python/comments/vty3sx/any_design_patterns_and_tips_on_writing_an_api/)

Things they are laying out here. 

One person
- Auth is really hard to figure out 
- Retry logic and pagination is really important

Another person
- Keep data objects as just data and use other objects for transformations

^ basically advocating for the idiomatic model

Person 3
- Also arguing for idiomatic approach. Made a good case where if you really only
  care about lower level stuff it's annoying

Firstly, don't go over the top with object oriented modelling. If you've got an API call like:

`GET /locations/12345/customers/65432/orders/87678768`
Don't implement this as:

```python
client.location(12345).customer(65432).order(87678768).get()
```
Just implement:

```python
client.get_order(12345, 65432, 87678768)
```

that last one is better tbh it's just managing that data isn't done within the
object, which is my main problem. 

So arguments for idiomatic approach are 
- harder to go to lower levels from the start

[A Design Pattern for Python API Client Libraries](https://bhomnick.net/design-pattern-python-api-client/)

It mainly covers how to build an idiomatic library but has this one snippet at
the end. 

> Other types of APIs
> This pattern works well for RPC-style APIs, but tends to break down for more
> object-based or RESTful APIs as having a single interface class gets messy
> quickly. In those cases I find it makes more sense to break the interface down
> to resource-level, modeling things more like an ORM. I'll cover that in a later
> post, next time I find the need to build one.

At the time of this research there was no follow-up post.

[Ask HN: Best practices (and examples) for designing client libraries for
APIs?](https://news.ycombinator.com/item?id=23283551)

The first comment actually advocates for an object oriented model but just using
the top level client object for authentication and setup stuff. 

Most of the sentiments kind of make me think using an object oriented model
might make more sense. 

[How to design a good API and why it matters](https://dl.acm.org/doi/abs/10.1145/1176617.1176622)

Nothing really to note from there. It's more about the API itself and not the
SDK.

[Building A Creative & Fun API Client In Ruby: A Builder Pattern Variation](https://medium.com/rubyinside/building-a-creative-fun-api-client-in-ruby-a-builder-pattern-variation-f50613abd4c3)

This is basically a guy who saw an idiomatic approach and said I want an object
oriented approach. 

## Platforms

Below is a list of the different platforms I wanted to review and look at 

- [Stainless]
- [Speakeasy]
- [liblab]
- [OpenAPI-Generator]

### SDK Analysis

So far the stainless sdk generator is really powerful and has been able to make
pretty good python SDKs that are readable, and the logic is solid. I also like
that it takes care of pagination and retry logic along with the http stuff. 

My only real issue is in the idiomatic approach it takes to designing the SDK.
It using a singleton to create global client that requires scope subscription to
run methods on different things. The actual pydantic models don't actually have
any methods in them, they are purely data models. 

I'm wondering if I can make any kind of transformation that will allow for a
more object oriented SDK library with objects that contain their own actions. 

It looks like the other ones are doing similar stuff. I'll try a speakeasy SDK
and see how it works. 

There's a few arguments I'm seeing around for the idiomatic approach over the
object oriented one. Mainly it is more readable to be idiomatic and can preven
extra complications as the app scales. However it's quite verbose and for
getting started can be a lot and there's still the problem of managing the
primitives themselves. 

---

Everyone is talking about stripe style polish and docs and their sdks are all
autogenerated. It also looks like they take the approach of using idiomatic sdks
atleast in python that don't make use of objects. 

## Future Work

I want to see if I can combine an SDK generator platform with something like
[GritQL](https://grit.io) to automatically change the generated results to be in
the format I'd like (idiomatic to object oriented?)
