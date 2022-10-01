var express = require("express");
var router = express.Router();

const phonesRoutes = require("./phones.routes");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/phones", phonesRoutes);

module.exports = router;
