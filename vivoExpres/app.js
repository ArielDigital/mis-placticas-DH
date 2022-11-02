const express = require("express");
const path = require('path')

const app = express();

app.listen(3000, () =>
console.log("Levantando un servidor en puerto 3000 con Express"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
  });