---
title: Repo To Prompt — Prepare a Git Repo for an LLM
description: Utility to prepare a Git Repo for an LLM's context
date: 2024.07.03
---

> This project can be found on [GitHub](https://github.com/VVoruganti/repo-to-prompt)

Since the craze of LLMs started I have kept seeing different projects and posts
for "talking to XYZ". Whether it be talking to a database, a PDF, or a codebase.
That last one of talking to a codebase always interested me, and now with context
windows for models being so large the contents of a moderate sized codebase
could probably be stuffed into one. 

This was really appealing to me as I often have to work with new repos or
analyze open source code and try to figure out what is happening or what they
are doing to get something done. Then I realized that I'm not actually sure how
people are talking to their codebases. I've seen a couple of tutorials that talk
about doing a RAG query where they embed the files in a codebase and then let a
model query it to add to the prompt. However, I want to simply add everything to
context. 

So I wrote a little script that will format the contents of a git repo into text
that I can copy and paste into an LLM chat window. 

At the time of developing this script Anthropics Claude Sonnet 3.5 was the best
model I found and had a context window 200k tokens. In the [prompting docs](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags)
they also recommended using xml tags to structure prompts. So I figured I can
use the xml tags to communicate the directory structure of a repo. 

The approach is really simple of taking every file in a locally cloned repo and
appending its contents to a string. Each file's contents would be in between xml
tags that communicated the file path e.g.

```markdown
<README.md>
Lorem Ipsum Dolor
</README.md>

<lua/plugin/init.lua>
function init()
end
</lua/plugin/init.lua>
```

Directories would be shown by creating parent xml tags.

After the final prompt is constructed I also use a third-party library
[tokencost](https://github.com/AgentOps-AI/tokencost) to quickly check the
number of tokens produced and the cost of the prompt.

The script also has a set of hardcoded directories and files that it ignores
when making the prompt such as a `LICENSE` file. These are viewable in the
`main.py` script in the [repo](https://github.com/VVoruganti/repo-to-prompt)

## Further Development

This was a really quick and dirty script I got working for analyzing a few repos
one day. There's plenty of room for improvement

* Supporting relative file paths
* Supporting remote repositorys and not requiring a local clone
* Respect `.gitignore` lists for ignored paths


