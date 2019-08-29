import express from "express";
import index from "./controllers";

const app: express.Application = express();

app.get("/", index);

app.listen(8080, "0.0.0.0", () => {
  console.log("Server started");
});
