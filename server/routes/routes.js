const express = require("express");
// const { model } = require("mongoose");
const router = express.Router();
const API = require("../controllers/api");

router.get("/", API.fetchAllPosts);
router.get("/:id", API.fetchPostById);
router.post("/", API.createPost);
router.patch("/:id", API.updatePost);
router.delete("/:id", API.deletePost);

module.exports = router;