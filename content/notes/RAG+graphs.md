---
title: "RAG + Graphs"
date: 05.21.2024
tags: ["seed", "dev", "AI", "agents"]
---

Got interested in knowledge graphs and expanding my understanding of the RAG
landscape more as I was thinking about the design of [Honcho](https://honcho.dev). 

This is a scratch pad of notes and questions I collect as I read more about it. 

## Background

I'm coming from the context of building RAG applications that use vector
embeddings to do semantic search across a set of documents. Familiarity with
generating queries to the vector db and injecting the responses in the prompts
for more context aware answers. 

---

From here, I've kept hearing interest in using Graphs and GraphDBs instead of
vector DBs with projects linked
[langraph](https://python.langchain.com/v0.1/docs/langgraph/) or
[mindgraph](https://github.com/yoheinakajima/mindgraph). I've also seen the
article
[GraphRAG](https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/)
referenced several times and, also keep seeing the [Neo4j](https://neo4j.com/)
database pop up in my day-to-day life. So I decided to read more into Graphs to
see what the hype was about.

## GraphRAG

Using existing text data the language model is deciding what the entities and
relationships are and generate Neo4j cypher code. 

That is used for generating the graphs. Now how does that work with knowledge
graphs?

Are graphs more efficient represents or encodings of information? If so are they
a better language for language models to encode data and feed context and in
that sense more helpful for them to use. 

It kind of makes sense a conversation about having the nodes but also
embeddeding the cosine similarity of everything within the graph. 

Would be interesting to translate that all to a graph database. Can build a
layer on top of collections. 

Also fundamentally if I had access to a vector embedding space to alist of
random facts, it would be harder to get information out of it than a structured
graph with more metadata and information and intermediate reasoning about the
structure of the data. Essentially a knowledge graph made by the agent would
include more thoughts and reasoning about the user. 

Other interesting readings I found on this rabbit hole were. 

* [LangChain Q&A RAG Tutorial](https://python.langchain.com/v0.1/docs/use_cases/question_answering/quickstart/)
* [LangChain Code Understanding](https://python.langchain.com/v0.1/docs/use_cases/code_understanding/)
* [LangChain Constructing Knowledge Graphs](https://python.langchain.com/v0.1/docs/use_cases/graph/constructing/)

Remaining Questions
* How does the embedding dimensions map to the size of a document and in general
  what is the max size of a document? 
    * In other terms how do I know how much information is too much for one
    document
* How hard is it to create graph representations of users. 
* For code understanding how would you encode an Abstract Syntax Tree as a graph
  available to the language model?
* Is the langchain method of just chunking each individual section enough?
    * Probably not because you can't get relationships captured well with just a
      vector embedding.
    * Also worth noting the LangChain method uses [Tree-sitter](https://python.langchain.com/v0.1/docs/integrations/document_loaders/source_code/)
* How can you do a hybrid approach of combining vector embeddings with graphs
  and also encoding the relationships of cosine similarity into the graph. 
    * Is there something similar to Matryoshka Embeddings in Graphs. 
* I wonder if I can use Postgres with GraphDBs and stick to the use postgres for
  everything mindset. See these two relevant posts
    * [Postgres: The Graph Database You Didn't Know You Had](https://www.dylanpaulus.com/posts/postgres-is-a-graph-database)
    * [Recursive Queries - Iterative Awesome](https://mankykitty.github.io/posts/2016-05-06-recursive-queries.html)

