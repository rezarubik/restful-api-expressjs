const { response } = require("express");
const PostsModel = require("../models/posts");
const responseHelper = require("../utils/responseHelper");

const getAllPosts = async (req, res) => {
  const [data] = await PostsModel.getAllPosts();
  responseHelper.response(res, true, "GET All Posts", data, 200);
};

const createPost = async (req, res) => {
  const { body } = req;
  const userId = req.user.auth.id;
  try {
    await PostsModel.createPost(body, userId);
    responseHelper.response(res, true, "Success create new Post!", body, 201);
  } catch (error) {
    res.status(500).json({
      message: "Server error where create new user",
      serverMessage: error,
    });
  }
};

const updatePost = async (req, res) => {
  const { postId } = req.params;
  const { body } = req;
  //   try {
  await PostsModel.updatePost(body, postId);
  const data = {
    id: postId,
    ...body,
  };
  responseHelper.response(res, true, "Success update post!", data, 200);
  //   } catch (error) {
  //     res.status(500).json({
  //       message: "Server error",
  //       serverMessage: error,
  //     });
  //   }
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
};
