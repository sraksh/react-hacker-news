import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import Routes from "./../src/routes";

function getContent(path, store) {
  const routeContent = (
    <Provider store={store}>
      <StaticRouter location={path} context={{}}>
        {renderRoutes(Routes)}
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
    <!DOCTYPE html>
      <html lang="en">
        <head>
        <meta charset="utf-8">
        <link rel="icon" href="https://news.ycombinator.com/favicon.ico" />
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
          <p style="text-align:center; font-size:12px">
            Tribute to
            <a href="https://twitter.com/itsSSR" target="_blank">@itsSSR</a>
            <span style="color: #e25555;" >&#9829;</span>
        <p>
        </body>
      </html>`;
}

export { generatedHTML };
