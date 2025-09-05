const session = require("./session");
const user = require("./user");
const posts = require("./posts");
const comments = require("./comments");
const controller = require("../controllers/controller");

const Router = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Homepage" });
});

module.exports = {
  session,
  user,
  posts,
  comments,
  router,
};
