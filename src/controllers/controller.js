const query = require("../models/queries");

async function allPostsGET(req, res) {
  const blogs = await query.getAllPosts();
  console.log(blogs);
  res.render("posts", { title: "All Posts", blogs: blogs });
}

async function latestPost(req, res) {
  const latestBlog = await query.getLatestPost();
  console.log(latestBlog);
}

module.exports = {
  allPostsGET,
  latestPost,
};
