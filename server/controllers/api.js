const Post = require("../models/posts");

module.exports = class API {
    // fetch all posts
    static async fetchAllPosts(req, res) {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);            
        } catch (err) {
            res.status(404).json({msg: err.msg});
        }
    }

    // fetch posts by ID
    static async fetchPostById(req, res) {
        res.send("Fetch post by ID");
    }

    // create a post
    static async createPost(req, res) {
        const post = req.body;
        const imagename = req.file.imagename;
        post.image = imagename;
        try {
            res.status(201).json({msg: "Post created successfully"});  
        } catch (err) {
            res.status(400).json({msg: err.msg});  
        } 
    }

    // update a post
    static async updatePost(req, res) {
        res.send("Update a post");
        
    }

    // delete a post
    static async deletePost(req, res) {
        res.send("Delete a post");
    }

}