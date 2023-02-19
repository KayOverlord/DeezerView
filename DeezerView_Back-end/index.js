require("dotenv").config();
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const port = process.env.PORT || 8000;

app.get("/search/:name", async (req, res) => {
  const name = req.params.name;
  const api_url = `https://api.deezer.com/search?q=artist:${name}`;
  const apiResponse = await fetch(api_url);
  const jsonResponse = await apiResponse.json();
  res.json(jsonResponse);
});

app.get("/artist/:id", async (req, res) => {
  const id = req.params.id;
  const api_url = `https://api.deezer.com/artist/${id}`;
  const apiResponse = await fetch(api_url);
  const jsonResponse = await apiResponse.json();
  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//https://api.deezer.com/search?q=eminem
//https://api.deezer.com/search?q=artist:"aloe blacc"

//https://api.deezer.com/artist/27/top
//192.168.0.120
