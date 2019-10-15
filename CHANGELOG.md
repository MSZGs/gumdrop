# Changelog

## [4.1.0] - 2019-10-15

- ✨ Markdown files can now be loaded in front matter
- ✨ Enable recursive file loading in YAML data files and front matters
- ✨ Data files can be loaded from any folder not just `data`
- ✨ New HTTP errors for invalid content (500) and invalid file types (300)
- 🛠️ Fixed bug: thematic break in MD caused front matter parsing to fail
- 🛠️ Fixed bug: not having a `main` tag removed all content from body
- 🔺 Prism is loaded only if there is a code block on the site
- 🔺 Dependency update

## [4.0.1] - 2019-09-17

- 🛠️ Fixed bug: front matter separation didn't work with UNIX style LF

## [4.0.0] - 2019-09-12

- ✨ Enable YAML front matters
- ✨ Enable YAML data files
- ✨ Enable multiple data files in one document
- ✨ Automatic title updates based on the first `h1` header
- ✨ Scroll to the top of a page on internal navigation
- ✨ Add `active` class for internal links pointing to the current page
- ✨ Default error message for 404 HTTP errors
- 🔺 Changed Markdown parser to [ExtraMark](https://github.com/vimtaai/extramark)
- 🔺 Changed templating method to use [mustache templates](http://mustache.github.io/) (⚡)
- 🔺 Changed syntax highlighter to [Prism](https://prismjs.com/) for faster load times (⚡)
- 🔺 Changed the way data is loaded from data files (⚡)
