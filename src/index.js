require("dotenv").config();
const express = require("express");
const app = express();
const usersRoutes = require("./routes/users.js");
const middlewareLogRequest = require("./middleware/logs.js");
const { upload } = require("./middleware/multer.js");

const port = process.env.PORT || 5000;
// note: Pattern routing di express.js
// app.method(path, handler)
// note: use bisa make semua method, biasanya buat middleware
// app.use("/", (req, res, next) => {
//   res.send("Hello world!");
// });
/* -------------------------- // start: Middleware -------------------------- */
// note: Middleware, middleware bisa lebih dari satu
app.use(middlewareLogRequest);
// note: middleware untuk mengizinkan request body berupa json
app.use(express.json());
// note: Membuat static file
app.use("/assets", express.static("public/images"));
/* -------------------------- // end: Middleware -------------------------- */

app.use("/users", usersRoutes);
app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "Upload success",
  });
});
// note: Error handling
app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});
// app.get("/", (req, res) => {
//   res.send("Hello get method");
//   res.json({
//     nama: "Reza",
//     email: "reza@gmail.com",
//   });
// });

// app.post("/", (req, res) => {
//   res.send("Hello post method");
// });

app.listen(port, () => {
  console.log(`Server berhasil di running di port ${port}`);
});
