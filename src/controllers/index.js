async function renderHomepage(req, res) {
  res.render("index", { title: "Homepage" });
}

module.exports = {
  renderHomepage,
};
