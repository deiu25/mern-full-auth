const express = require("express");
const router = express.Router();
const {
  protect,
  adminOnly,
  authorOnly,
} = require("../middleware/authMiddleware");
const {
  registerUser, loginUser, logoutUser, getUser, updateUser, deleteUser, getUsers, loginStatus, upgradeUser
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/getUser", protect, getUser);
router.patch("/updateUser", protect, updateUser);
router.delete("/:id", protect, adminOnly, deleteUser);
router.get("/getUsers", protect, authorOnly, getUsers);
router.get("/loginStatus", loginStatus);
router.post("/upgradeUser", protect, adminOnly, upgradeUser);

module.exports = router;