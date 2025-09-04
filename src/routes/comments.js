const Router = require("express");
const { v4: uuidv4 } = require("uuid");

const router = Router();

router.get("/", (req, res) => {
  return res.send(Object.values(req.context.models.comments));
});

router.get("/:postId", (req, res) => {
  return res.send(req.context.models.comment[req.params.commentId]);
});

router.post("/", (req, res) => {
  const id = uuidv4();
  const comment = {
    id,
    content: req.body.text,
    authorId: req.context.me.id,
  };

  req.context.models.comment[id] = comment;

  return res.send(comment);
});
