const express = require("express");
const app = express();
const fetch = require("node-fetch");
const port = 3000;

app.get("/Search", async (req, res) => {
  const api_url = "https://api.deezer.com/search?q=artist:pushaT";
  const apiResponse = await fetch(api_url);
  const jsonResponse = await apiResponse.json();
  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//https://api.deezer.com/search?q=eminem
//https://api.deezer.com/search?q=artist:"aloe blacc"

//https://api.deezer.com/artist/27/top
//192.168.0.120
