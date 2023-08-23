import express from "express";

import pg from "pg";
const app = express();
app.get("/", (req, res) => {
  res.send("Render Example");
});

app.listen(3000);
