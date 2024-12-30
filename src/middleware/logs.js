const logRequest = (req, res, next) => {
  console.log("Log request ke path: ", req.path);
  // note: Untuk diarahkan ke route berikutnya
  next();
};

module.exports = logRequest;
