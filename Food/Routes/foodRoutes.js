const express = require("express");

const Router = express.Router();

Router.get("/foods", (req, res) => {
  res.json({ msg: "get foods" });
});

module.exports = Router;
