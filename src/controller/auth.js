const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UsersModel = require("../models/users");
const responseHelper = require("../utils/responseHelper");

const register = async (req, res) => {
  const { body } = req;
  const hashedPassword = await bcrypt.hash(body.password, 10);
  try {
    await UsersModel.createNewUser(body, hashedPassword);
    res.status(201).json({
      message: "Success create new user",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};
const login = async (req, res, next) => {
  const { body } = req;
  console.log("body", body);
  console.log("email", body.email);
  try {
    const [user] = await UsersModel.checkUser(body);
    // console.log("password", body.password);
    console.log("user", user);
    // console.log("length user", user.length);
    // console.log("user[0]", user[0]);
    if (user.length == 0) {
      return responseHelper.response(res, true, "User not found", null, 404);
      // return res.status(404).json({
      //   message: "User not found",
      // });
    }
    const matchPassword = await bcrypt.compare(body.password, user[0].password);
    // console.log("user.password", user[0].password);
    if (!matchPassword)
      return responseHelper.response(
        res,
        false,
        "Invalid credentials / invalid password",
        null,
        401
      );
    // return res.status(401).json({
    //   message: "Invalid credentials / invalid password",
    // });
    const authUser = {
      id: user[0].id,
      email: user[0].email,
      name: user[0].name,
    };
    const token = jwt.sign(
      {
        auth: authUser,
        id: user[0].id,
        email: user[0].email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    const data = {
      user: user[0],
      token,
    };
    // console.log("data", data);
    return responseHelper.response(res, true, "Success login", data, 200);
    // res.status(200).json({
    //   message: "Success login",
    //   token,
    // });
  } catch (error) {
    console.log("error", error);
    return responseHelper.response(res, false, "Server error", error, 500);
    // res.status(500).json({
    //   message: "Server error",
    //   serverMessage: error,
    // });
  }
};
module.exports = { register, login };
