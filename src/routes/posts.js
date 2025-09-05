const Router = require("express");
const { v4: uuidv4 } = require("uuid");

const router = Router();

router.get("/", (req, res) => {
  return res.send(Object.values(req.context.models.messages));
});

router.get("/new", (req, res) => {
  res.render("createPost", { title: "Create Post" });
});

router.get("/:postId", (req, res) => {
  return res.send(req.context.models.post[req.params.postId]);
});

router.post("/new", (req, res) => {
  const id = uuidv4();
  const post = {
    id,
    title: req.body.title,
    content: req.body.text,
    authorId: req.context.me.id,
    published: req.published,
  };

  req.context.models.post[id] = post;

  return res.send(post);
});

router.delete("/:messageId", (req, res) => {
  const { [req.params.postId]: post, ...otherPosts } = req.context.models.post;

  req.context.models.post = otherPosts;

  return res.send(post);
});

module.exports = router;
