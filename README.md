# Gumdrop

[![NPM version 2.0.1](https://img.shields.io/badge/npm-2.0.1-blue.svg)](https://npmjs.com/package/gumdrop)
[![JavaScript Standard Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![MIT license](https://img.shields.io/badge/license-MIT-green.svg)

> Script to display Markdown documents as static HTML pages

## About

**Gumdrop** is designed to be an easy to use, standalone script that can generate websites and documentations written in [Markdown](https://daringfireball.net/projects/markdown/syntax). It is bundled with all its dependencies (including the Markdown parser) and does not require any configuration or initialization.

## :sparkles: New in Version 2

- Syntax highlighting support
- Smaller bundle size
- Improved load times
- Less network traffic
- Dependencies served from CDN
- Improved caching
- Cleaner code

## Features

- Displays Markdown documents as a static website
- Automatic parsing of Markdown
- Extra markdown features
- Syntax highlighting with *[highlight.js](https://highlightjs.org/)*
- Navigation by [fetch requests](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- Local caching for faster load times
- Error pages
- JSON collections and loops to display repeating data
- Only needs a static file server, no server side code
- No build step, it's just files you serve
- Zero configuration

### Markdown Extensions

**Gumdrop** uses [markdown-it](https://github.com/markdown-it/markdown-it) to parse Markdown documents. The parser is configured to support the following features as an addition to CommonMark:

- Tables
- Definition lists
- Containers (custom CSS classes on `div`s)
- HTML code

### Syntax highlighting

Fenced code blocks are automatically processed by *highlight.js*. Languages supported are the default languages in the *highlight.js* bundle. For syntax highlighting you have to include a *highlight.js* style in your `index.html`.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlightjs@9.10.0/styles/default.css">
```

## Usage

To create a static website with Markdown all you need to to is to create a HTML template (`index.html`) on your file server and add **Gumdrop** as an external script file.

```html
<main></main>
<script src="path/to/gumdrop.js">
```

Markdown files in the `pages` folder can be loaded. **Gumdrop** watches the hash fragment of the URL and loads the corresponding Markdown file from the `pages` folder. The parsed Markdown files get rendered in the `<main>` HTML node. The default file that gets loaded if no file is specified is `pages/index.md`. To create a link to another file in the `pages` folder simply create a fragment link with its name.

```md
[Link to about.md](#about)
```

To use collections create JSON files in the `data` folder. Each of your data files should be an array of objects. You can iterate through your data in the HTML template in `index.html` or in any of your Markdown documents. Use the `data-each` attribute by setting the name of the data file as the value. Inside the template you can reference the properties of each object in your array with double curly braces.

```json
// data/pages.json

[
  { "title": "Main Page", "url": "#index" },
  { "title": "About", "url": "#about" }
]
```

```html
// index.html

<ul>
  <li data-each="pages">
    <a href="{{url}}">{{title}}</a>
  </li>
</ul>
```

Static resources (e.g. images) can be loaded from any folder that is served by your file server, paths are relative to `index.html`.

### Using with GitHub Pages

You can use **Gumdrop** with [GitHub Pages](https://pages.github.com) as it can serve as a static file server. To prevent GitHub Pages from trying to transform your site with Jekyll add an empty `.nojekyll` file to the root of your site.

## Prerequisites

In order to work, **Gumdrop** requires a static HTTP(S) file server as the Fetch API does not work with the `file:` protocol. **Gumdrop** requires a browser that supports the Fetch API thus Internet Explorer is not supported.

## Contributing

All ideas, recommendations, bug reports, pull requests are welcome. :smile: