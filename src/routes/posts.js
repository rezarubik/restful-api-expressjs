const express = require("express");
const AuthMiddleware = require("../middleware/auth.js");
const router = express.Router();
const PostController = require("../controller/posts.js");

// note: Get All Posts
router.get("/", AuthMiddleware.authenticateToken, PostController.getAllPosts);

// note: Create New Post
router.post("/", AuthMiddleware.authenticateToken, PostController.createPost);

// note: Update Patch
router.patch(
  "/:postId",
  AuthMiddleware.authenticateToken,
  PostController.updatePost
);

module.exports = router;
