const express = require("express");
const app = express();
const React = require("react");

const renderToString = require("react-dom/server").renderToString;
const AppComponent = require("./../src/App").default;

app.get("/", (req, res) => {
  const content = renderToString(<AppComponent />);
  res.send(content);
});

app.listen(4000, () => {
  console.log("Listening to Port 4000");
});
