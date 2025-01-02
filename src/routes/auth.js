const express = require("express");
const AuthController = require("../controller/auth.js");
const ValidationMiddleware = require("../middleware/validationMiddleware");
const { body } = require("express-validator");
const router = express.Router();

// todo: Rules for validation
const registerValidationRules = [
  body("email")
    .notEmpty()
    .withMessage("Please fiil the email")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
  body("password")
    .notEmpty()
    .withMessage("Please fiil the password")
    .isString()
    .withMessage("Password must be a string")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

router.post(
  "/register",
  ValidationMiddleware(registerValidationRules),
  AuthController.register
);
router.post("/login", AuthController.login);

module.exports = router;
