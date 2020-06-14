import express from "express";
import { generatedHTML } from "./renderer";
import serverCreateStore from "../src/store";
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const { path } = req;
  res.send(generatedHTML(path, serverCreateStore));
});

app.listen(4000, () => {
  console.log("Listening to Port 4000");
});
