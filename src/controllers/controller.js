const query = require("../models/queries");

async function allPostsGET(req, res) {
  const blogs = await query.getAllPosts();
  console.log(blogs);
  res.render("posts", { title: "All Posts", blogs: blogs });
}

async function homepage(req, res) {
  const latestBlog = await query.getAllPosts();
  console.log("routes/index " + latestBlog[0]);
  res.render("index", { title: "Homepage", latestBlog: latestBlog[0] });
}

module.exports = {
  allPostsGET,
  homepage,
};
