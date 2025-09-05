const query = require("../models/queries");

async function homepage(req, res) {
  const { blogs } = await query.getAllPosts();
  console.log(blogs);

  res.render("index", { title: "Homepage", blogs: blogs });
}

module.exports = {
  homepage,
};
