const { v4: uuidv4 } = require("uuid");
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function getAllPosts() {
  const allPosts = await prisma.post.findMany();
  const blogArray = Object.keys(allPosts).map(function (k) {
    return allPosts[k];
  });
  blogArray.reverse();
  return blogArray;
}

async function createNewPost(req, res) {
  const id = uuidv4();
  const post = {
    id,
    title: req.body.title,
    content: req.body.text,
    authorId: 1, //req.context.me.id,
    published: req.published,
  };

  await prisma.post.create({ data: post });
}

module.exports = { getAllPosts, createNewPost };
