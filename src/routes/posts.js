const Router = require("express");
const query = require("../models/queries");

const router = Router();

// router.get("/", (req, res) => {
//   return res.send(Object.values(req.context.models.messages));
// });

router.get("/new", (req, res) => {
  res.render("createPost", { title: "Create Post" });
});

router.get("/:postId", (req, res) => {
  return res.send(req.context.models.post[req.params.postId]);
});

router.post("/new", (req, res) => {
  query.createNewPost(req, res);
  res.redirect("/");
});

router.delete("/:messageId", (req, res) => {
  const { [req.params.postId]: post, ...otherPosts } = req.context.models.post;

  req.context.models.post = otherPosts;

  return res.send(post);
});

module.exports = router;
