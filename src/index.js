import "babel-polyfill";
import express from "express";
import expressStaticGzip from "express-static-gzip";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import createStore from "./helpers/createStore";
import renderer from "./helpers/renderer";

const app = express();

app.use(express.static("public"));

app.use(
  "/build/bundle",
  expressStaticGzip("build/bundle", {
    enableBrotli: true,
    orderPreference: ["br", "gz"],
    setHeaders: function (res, path) {
      res.setHeader("Cache-Control", "public, max-age=31536000");
    },
  })
);

app.use(
  "/build/bundle",
  expressStaticGzip("build/bundle", {
    enableBrotli: true,
    orderPreference: ["br", "gz"],
    setHeaders: function (res, path) {
      res.setHeader("Cache-Control", "public, max-age=31536000");
    },
  })
);

app.get("*", (req, res) => {
  const store = createStore();
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store, req.originalUrl) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening to port 3000");
});
