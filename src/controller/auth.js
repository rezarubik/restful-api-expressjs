const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UsersModel = require("../models/users");

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
    console.log("password", body.password);
    console.log("user", user[0]);
    console.log("user.password", user[0].password);
    if (!user)
      return res.status(401).json({
        message: "User not found",
      });
    const matchPassword = await bcrypt.compare(body.password, user[0].password);
    if (!matchPassword)
      return res.status(401).json({
        message: "Invalid credentials / invalid password",
      });
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({
      message: "Success login",
      token,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};
module.exports = { register, login };
