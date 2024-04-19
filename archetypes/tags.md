---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: '{{ .Date | time.Format .Site.Params.dateFormat  }}'
draft: true
params: # Use like: `.Params.author`
  seo:
    description: ""
    noindex: false
  # Doesn't matter for SEO, so ... be creative
  openGraph:
    title: ""
    description: ""
---

