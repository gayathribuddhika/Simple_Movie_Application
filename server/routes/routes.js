const express = require("express");
// const { model } = require("mongoose");
const router = express.Router();
const API = require("../controllers/api");



router.get("/", API.fetchAllPosts);

module.exports = router;