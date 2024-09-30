const express = require("express");
const userRoutes = require("./users.routes");
const router = express.Router();

router.use(function (req, res, next) {
  res.setHeader("Api-Version", "v1");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  next();
});

router.route("/health-check").get(function (req, res) {
  return res.status(200).json({ healthy: true, version: "v1" });
});

router.use("/user", userRoutes);
module.exports = router;
