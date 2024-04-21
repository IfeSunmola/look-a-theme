---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: '{{ time.Now.Format "2006-01-02" }}' # YYYY-MM-DD
lastmod: '{{ time.Now.Format "2006-01-02" }}'
draft: true
params:
  author: "Ife Sunmola"
  displayToc: true
  seo:
    description: "" # Add a description for SEO
    noindex: false # Set to true to prevent search engines from indexing this page
  openGraph:
    description: "Open graph description here"
summary: ""
tags: [ . ]
---

