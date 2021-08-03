module.exports = class API {
    // fetch all posts
    static async fetchAllPosts(req, res) {
        res.send("Hello from API");
    }

    // fetch posts by ID
    static async fetchPostById(req, res) {
        res.send("Fetch post by ID");
    }

    // create a post
    static async createPost(req, res) {
        res.send("create a post");
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