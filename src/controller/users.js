const bcrypt = require("bcrypt");
const UsersModel = require("../models/users");
const responseHelper = require("../utils/responseHelper");
const getAllUsers = async (req, res) => {
  // try {
  const [data] = await UsersModel.getAllUsers();
  responseHelper.response(res, true, "GET All Users", data, 200);
  // res.json({
  //   message: "GET All Users",
  //   data: data,
  // });
  // } catch (error) {
  //   res.status(500).json({
  //     message: "Server error",
  //     serverMessage: error,
  //   });
  // }
};
const getProfile = async (req, res) => {
  // todo: Get user auth from user login
  const userEmail = req.user.auth.email;
  const [user] = await UsersModel.getUserByEmail(userEmail);
  if (user.length == 0) {
    res.status(404).json({
      message: "User not found",
    });
  }
  res.status(201).json({
    message: "Success get user",
    data: user[0],
  });
};
const searchUser = async (req, res) => {
  try {
    const { body } = req;
    console.log("body", body);
    const [getUser] = await UsersModel.checkUser(body);
    if (getUser.length == 0) {
      res.status(404).json({
        message: "User not found",
      });
    }
    res.status(201).json({
      message: "Success get user",
      data: getUser[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};
const createNewUser = async (req, res) => {
  const { body } = req;
  const hashedPassword = await bcrypt.hash(body.password, 10);
  if (!body.email || !body.name || !body.address) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: body,
    });
  }
  try {
    await UsersModel.createNewUser(body, hashedPassword);
    res.status(201).json({
      message: "CREATE New User Success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error where create new user",
      serverMessage: error,
    });
  }
};
const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUser(body, idUser);
    res.json({
      message: "Update user success",
      data: {
        id: idUser,
        ...body, //note: Memunculkan semua
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};
const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await UsersModel.deleteUser(idUser);
    res.json({
      message: "Delete user success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};
module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  searchUser,
  getProfile,
};
