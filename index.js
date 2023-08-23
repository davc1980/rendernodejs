import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Render Example");
});
app.listen(3000);
