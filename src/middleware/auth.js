const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Access token is missing or invalid",
    });
  }
  try {
    // todo: Try new
    // jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    //   if (err) {
    //     return res.status(403).json({
    //       status: "error",
    //       message: "Token is invalid or expired",
    //     });
    //   }

    //   // Attach the user data from the token payload to the request object
    //   req.user = user;
    //   next();
    // });
    // todo: Before
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log("verified", verified);
    req.user = verified;
    next();
  } catch (error) {
    res.status(403).json({
      message: "Forbidden / Invalid token",
    });
  }
};

module.exports = { authenticateToken };
