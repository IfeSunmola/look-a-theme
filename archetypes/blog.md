---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: '{{ time.Now.Format "2006-01-02T15:04:05" }}' # YYYY-MM-DDTHH:MM:SS
lastmod: '{{ time.Now.Format "2006-01-02T15:04:05" }}'
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