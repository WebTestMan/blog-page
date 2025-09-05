const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function getAllPosts() {
  const allPosts = await prisma.post.findMany();
  return allPosts;
}

module.exports = { getAllPosts };
