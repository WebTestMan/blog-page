const session = require("./session");
const user = require("./user");
const posts = require("./posts");
const comments = require("./comments");
const controller = require("../controllers/controller");

const Router = require("express");

const router = Router();

router.get("/", controller.homepage);

module.exports = {
  session,
  user,
  posts,
  comments,
  router,
};
