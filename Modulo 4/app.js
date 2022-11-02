const express = require("express");

const app = express();

const path = require("path");

app.use(express.static("public"));

app.listen(3001, () => console.log("Servidor corriendo en el 3001"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/home.html"));
});

app.get("/home2", (req, res) => {
  res.sendFile(path.resolve("./views/home2.html"));
});
