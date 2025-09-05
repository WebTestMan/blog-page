const query = require("../models/queries");

async function homepage(req, res) {
  const blogs = await query.getAllPosts();
  const blogArray = Object.keys(blogs).map(function (k) {
    return blogs[k];
  });
  blogArray.reverse();
  res.render("index", { title: "Homepage", blogs: blogArray });
}

module.exports = {
  homepage,
};
