const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth.controller.js");
const userController = require("../../controllers/userController.js");

router.post("/sign-up", authController.signup);
router.post("/login", authController.signin);
router.get("logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});
module.exports = router;
