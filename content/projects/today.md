---
title: Today.nvim — Daily Notes with Neovim
description: A plugin for managing daily notes with Neovim
date: 2024.07.03
---

> This project can be found on [GitHub](https://github.com/VVoruganti/today.nvim)

The project was inspired by my work in [[ journaling | journaling with neovim]]
where I use neovim as my go writing environment. Not just for work and for
coding, but also daily notes I can use a scratchpad for thoughts or whatever I
need.

I've found this to be an incredibly helpful tool for managing my concentration
and grounding me when my ADHD brain starts spinning and jumping between tasks. 

In that post I described how I made a small bash function to make and/or open a
note in neovim for a given day. I noticed a large part of my workflow afterwards
would involve switching between my existing neovim session and going to today's
note either to cross reference or use as a temporary paste bin. It was
cumbersome to have to leave neovim and run `today` to get to my new note. 

So I made a plugin that let me replicate the same functionality as my bash
command, but also let me access my notes from any existing neovim session.

Installation and usage details are included in the `README.md` of the
repository. I will go over a bit more in detail about how the project works. 

## How It Works

The plugin registered a new command in Neovim called `Today` that will use a
configured local directory on the user's system to create a new note for the day
if it doesn't already exist and create a new buffer for that note in neovim. 

There are two configurations that can be set when using the plugin.

- `local_root` which set the directory where all the notes and templates are
defined
- `template` the name of the template file to use for each new note. 

The template should be a markdown file as the behavior creates a new note with
the name of the date and a `.md` extension.

If no configuration is provided by the user then the `ensure_default_setup`
function will be run and use the `~/.today` path for storing and making all
notes. This function will populate the directory if it doesn't exist and copy
the included default template `jrnl.md` to that directory.

It will then make a directory for each year and month and create the note files
within those directories.

## How It Was Built

I wrote this plugin with a large amount of help from Anthropic's Claude Sonnet
3.5 model.

All of the functionality of the plugin is defined in the `lua/today/init.lua`
file. 

There are 4 main symbols to look at. 

1. The `config` table the contains the default configuration
2. The `ensure_default_setup()` function that will ensure that the default
   directory setup if no user configuration is provided
3. The `today()` function that contains the core logic of the plugin and is a
   translation of the bash function
4. The `M.setup()` is the setup function for the plugin that processes the user
   config and registers the neovim command `Today` to run `today()`


