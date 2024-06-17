---
title: Yet Another Neovim Setup
date: 06.16.2024
tags: ["dev"]
draft: true
---

So far I am just following the primeagen tutorial for everything and seeing where that
takes me. the tutorial video is fairly out of date so there were a few other sources I had to pull from

I'm also using the the lunarvim setup

# Plugins

- [x] Telescope
- [x] Colorscheme (tokyonight)
- [x] tokyonight.nvim 0.02ms  start
- [x] Lspconfig
- [x] nvim-lspconfig 0.62ms 󰢱 lspconfig.server_configurations.omnisharp  mason-lspconfig.nvim 
    - [x] mason.nvim 2.38ms  mason-lspconfig.nvim
    - [x] cmp-buffer 1.94ms  nvim-cmp
    - [x] cmp-nvim-lsp 0.63ms  nvim-cmp
    - [x] cmp-path 0.67ms  nvim-cmp
    - [x] LuaSnip 33.33ms  InsertEnter
    - [x] mason-lspconfig.nvim 12.67ms  User FileOpened
    - [x] nvim-cmp 13.92ms  nvim-autopairs
- [x] codeium.vim 1.06ms  BufEnter
- [x] lazy.nvim 7.93ms  init.lua
- [x] lualine.nvim 10.49ms  VimEnter
- [x] nvim-treesitter 7.79ms 󰢱 nvim-treesitter  vim-illuminate
- [x] which-key.nvim 10.5ms  VeryLazy

- [ ] alpha-nvim 1.21ms  VimEnter
- [ ] bigfile.nvim 1.26ms  User FileOpened
- [ ] bufferline.nvim 4.54ms  User FileOpened
- [ ] cmp_luasnip 9.16ms  nvim-cmp
- [ ] Comment.nvim 1.07ms  User FileOpened
- [ ] friendly-snippets 0.28ms  LuaSnip
- [ ] gitsigns.nvim 3.98ms  User FileOpened
- [ ] indent-blankline.nvim 1.71ms  User FileOpened

- [ ] nlsp-settings.nvim 0.42ms  nvim-lspconfig
- [ ] none-ls.nvim 0.02ms 󰢱 null-ls  /Users/vineeth/.local/share/lunarvim/lvim/lua/lvim/lsp/null-ls/init.lua
- [ ] nvim-autopairs 18.02ms  InsertEnter

- [ ] nvim-navic 0.46ms  User FileOpened
- [ ] nvim-ts-context-commentstring 0.24ms 󰢱 ts_context_commentstring  nvim-treesitter
- [ ] nvim-web-devicons 0.27ms 󰢱 nvim-web-devicons  /Users/vineeth/.local/share/lunarvim/lvim/lua/lvim/core/breadcrumbs.lua
- [ ] project.nvim 3.43ms  VimEnter
- [ ] symbols-outline.nvim 2.9ms  start
- [ ] vim-illuminate 9.24ms  User FileOpened

codeium seems to be broken right now according to this comment in their repo
