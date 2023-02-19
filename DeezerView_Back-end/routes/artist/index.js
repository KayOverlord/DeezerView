const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const api_url = `https://api.deezer.com/artist/${id}`;
  const apiResponse = await fetch(api_url);
  const jsonResponse = await apiResponse.json();
  res.json(jsonResponse);
});

router.get("/:id/top", async (req, res) => {
  const id = req.params.id;
  const api_url = `https://api.deezer.com/artist/${id}/top?limit=5`;
  const apiResponse = await fetch(api_url);
  const jsonResponse = await apiResponse.json();
  res.json(jsonResponse);
});

router.get("/:id/albums", async (req, res) => {
  const id = req.params.id;
  const api_url = `https://api.deezer.com/artist/${id}/albums`;
  const apiResponse = await fetch(api_url);
  const jsonResponse = await apiResponse.json();
  res.json(jsonResponse);
});

module.exports = router;
