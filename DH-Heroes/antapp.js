const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(3030, () => {
  console.log("Servidor corriendo en el 3030"); //'Servidor corriendo en el 3030'
});

app.get("/", (req, res) => {
  res.render(path.resolve("./viewa/index.html"));
});

/*app.get ('/', (req, res) => {
  res.sendFile (path.resolve ('./views/index.html'))
})*/
