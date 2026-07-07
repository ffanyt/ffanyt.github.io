# ffanyt.github.io

Personal academic homepage of [Yutao Fan](https://ffanyt.github.io), built with Jekyll and hosted on GitHub Pages.

Based on the [academic-homepage](https://github.com/luost26/academic-homepage) template by [@luost26](https://github.com/luost26).

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Updating content

- **Profile / bio / education / awards**: `_data/profile.yml`
- **Publications**: one Markdown file per paper under `_publications/<year>/`
- **News**: one Markdown file per item under `_news/`
- **Author display names (bold, links)**: `_data/authors.yml`
- **Homepage sections on/off**: `_data/display.yml`
