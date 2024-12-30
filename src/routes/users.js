const express = require("express");
const UserController = require("../controller/users.js");
const router = express.Router();

// note: Create - POST
router.post("/", UserController.createNewUser);

// note: Read - GET
router.get("/", UserController.getAllUsers);

// note: Update - PATCH
router.patch("/:idUser", UserController.updateUser);

// note: Delete - DELETE
router.delete("/:idUser", UserController.deleteUser);

module.exports = router;
