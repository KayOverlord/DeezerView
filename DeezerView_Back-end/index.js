require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 8000;
const searchRoute = require("./routes/search");
const artistRoute = require("./routes/artist");

app.use("/search", searchRoute);
app.use("/artist", artistRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
