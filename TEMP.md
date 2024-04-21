https://cloudcannon.com/blog/the-ultimate-guide-to-hugo-sections/

1. A folder like `content/items` will automatically create a URL for /items
    1. Use `_index.md` for further customizations
    2. Can be nested to subfolders as long as each has its own `_index.md`
2. By default `content/items` will be a "list item" page. i.e. it's content
   will be a list of items to show

--- 

# _index.md files

By default, hugo maps the folder structure to its corresponding html file in the /layouts
folder. E.g. markdown files in `content/blog` will use layout files in `layouts/blog`

For the cases where a list/single type isn't needed, it can be manually mapped to a
specific html file. E.g. the `_index.md` in `/content/contAct` directory has the following
in its front matter:

```markdown
---
type: "standalone"
layout: "contact"
---
```

It tells hugo to look in the `standalone` directory, and use the `contact-form` html file.

**Unpredicatable/lots of mental gymnastics because of hugo's fall through/look up order
behaviour**



--- 

## Taxonomies

```     
Actor                    <- Taxonomy
    Bruce Willis         <- Term
        The Sixth Sense  <- Value
        Unbreakable      <- Value
        Moonrise Kingdom <- Value
    Samuel L. Jackson    <- Term
        Unbreakable      <- Value
        The Avengers     <- Value
        xXx              <- Value
--------------------------------------------------------        
Tag               <- Taxonomy
    Java          <- Term
        Java 1    <- Value
        Java 2    <- Value
    SQL           <- Term
        SQL 1     <- Value
        SQL 2     <- Value 
```

---

## Archetypes

1. Use the default archetype when creating a new directory like /content/blog/ or
   /content/projects/
    1. `hugo new content series/_index.md`
2. Create new tag with the tags archetype:
    1. `hugo new content tags/sql/_index.md`