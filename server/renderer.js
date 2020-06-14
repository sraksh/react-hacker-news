import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./../src/routes";

function getContent(path, store) {
  const routeContent = (
    <Provider store={store}>
      <StaticRouter location={path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  const content = renderToString(routeContent);
  return content;
}

function generatedHTML(path, store) {
  const title = "React Hacker News";
  const description =
    "A hacker news clone using React with Server Side Rendering";
  const content = getContent(path, store);
  return `
    <html>
      <head>
      <meta charset="utf-8">
      <meta content="IE=edge" http-equiv="X-UA-Compatible">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <title>${title}</title>
      <meta name="description" content="${description}">
      </head>
      <body>
        <div id="root">
            ${content}
            <script src="c-bundle.js"></script>
        </div>   
      </body>
    </html>`;
}

export { generatedHTML };
