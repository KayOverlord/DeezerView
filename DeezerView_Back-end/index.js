const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//https://api.deezer.com/search?q=eminem
//https://api.deezer.com/search?q=artist:"aloe blacc"

//https://api.deezer.com/artist/27/top
