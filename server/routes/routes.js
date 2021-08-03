const express = require("express");
// const { model } = require("mongoose");
const router = express.Router();
const API = require("../controllers/api");
const multer = require("multer");

// multer middleware
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.filename + "_" + Date.now() + "_" + file.originalname);
    }    
});

let uploads = multer({
    storage: storage
}).single("image");

router.get("/", API.fetchAllPosts);
router.get("/:id", API.fetchPostById);
router.post("/", uploads, API.createPost);
router.patch("/:id", API.updatePost);
router.delete("/:id", API.deletePost);

module.exports = router;