const express = require("express");
require("dotenv").config();
const cors = require("cors");
// const models = require("./models");
const routes = require("./routes");
const path = require("node:path");
const assetsPath = path.join(__dirname, "/public");

const app = express();
app.use(express.static(assetsPath));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use((req, res, next) => {
//   req.context = {
//     models,
//     me: models.user[1],
//   };
//   next();
// });

app.use("/users", routes.user);
app.use("/posts", routes.posts);
app.use("/comments", routes.comments);
app.use("/", routes.router);

// Entry point
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
