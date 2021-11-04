# Frontend linter

Script that adds different kinds of frontend linters to a website.

Currently the following linters are added

- https://github.com/factorial-io/css-highlighter
- https://github.com/mgrsskls/headline-structure-snippet

## Usage

### Including it permanently

Add the following right before the closing `</body>` tag:

```javascript
<script
  src="https://factorial-io.github.io/frontend-linter/index.js"
  defer
></script>
```

### Including it on demand

Minify the code from [index.js](https://factorial-io.github.io/frontend-linter/index.js) (e.g. on https://minify-js.com/) and create a bookmark in your browser with the following url: `javascript:...` (replace `...` with the minified code)
