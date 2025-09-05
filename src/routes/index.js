const session = require("./session");
const user = require("./user");
const posts = require("./posts");
const comments = require("./comments");
const query = require("../models/queries");

const homepage = async function getCategories(req, res) {
  const blogs = await query.getAllPosts();

  res.render("index", { title: "Homepage", blogs: blogs });
};

module.exports = {
  session,
  user,
  posts,
  comments,
  homepage,
};
