import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";
import Routes from "../client/Routes";

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
    <html>
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
