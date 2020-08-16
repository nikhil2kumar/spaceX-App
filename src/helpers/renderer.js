import React from "react";
import { renderToString, renderToNodeStream } from "react-dom/server";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";

export default async (req, store, context) => {
  const render = (reactComponent) => {
    return new Promise((resolve, reject) => {
      const body = [];
      const bodyStream = renderToNodeStream(reactComponent);
      bodyStream.on("data", (chunk) => {
        body.push(chunk.toString());
      });
      bodyStream.on("error", (err) => {
        reject(err);
      });
      bodyStream.on("end", () => {
        resolve(body.join(""));
      });
    });
  };

  const content = await render(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
        <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(
              store.getState()
            ).replace(/</g, "\\u003c")}
        </script>
        <link rel="stylesheet" type="text/css" href="style.css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
    `;
};
