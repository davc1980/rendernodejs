const express = require("express");
const path = require("path");

const app = express();

app.use("/views", express.static("views"));
app.use("/css", express.static("node_modules/bootstrap/dist/css"));
app.use("/js", express.static("node_modules/bootstrap/dist/js"));
app.use("/js", express.static("node_modules/jquery/dist"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.listen(3000);
