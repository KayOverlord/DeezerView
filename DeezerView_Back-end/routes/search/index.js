const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/:name", async (req, res) => {
  const name = req.params.name;
  const api_url = `https://api.deezer.com/search?q=artist:${name}`;
  const apiResponse = await fetch(api_url);
  const jsonResponse = await apiResponse.json();
  res.json(jsonResponse);
});

module.exports = router;
