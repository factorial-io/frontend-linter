const cssHighlighter = document.createElement("link");
cssHighlighter.href =
  "https://factorial-io.github.io/css-highlighter/index.css";
cssHighlighter.rel = "stylesheet";

const headlineStructureLinter = document.createElement("script");
headlineStructureLinter.src =
  "https://mgrsskls.github.io/headline-structure-snippet/index.js";

document.head.appendChild(cssHighlighter);
document.head.appendChild(headlineStructureLinter);
