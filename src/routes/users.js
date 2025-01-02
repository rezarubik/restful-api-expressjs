const express = require("express");
const UserController = require("../controller/users.js");
const AuthMiddleware = require("../middleware/auth.js");
const router = express.Router();

// note: Create - POST
router.post(
  "/",
  AuthMiddleware.authenticateToken,
  UserController.createNewUser
);

// note: Read - GET
router.get("/", AuthMiddleware.authenticateToken, UserController.getAllUsers);

// note: Update - PATCH
router.patch(
  "/:idUser",
  AuthMiddleware.authenticateToken,
  UserController.updateUser
);

// note: Delete - DELETE
router.delete(
  "/:idUser",
  AuthMiddleware.authenticateToken,
  UserController.deleteUser
);

// note: Search / filter
router.post("/search", UserController.searchUser);

module.exports = router;
