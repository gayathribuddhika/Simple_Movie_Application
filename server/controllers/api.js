module.exports = class API {
    // fetch all posts
    static async fetchAllPosts(req, res) {
        res.send("Hello from API");
    }
}