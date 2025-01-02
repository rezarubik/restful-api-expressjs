const response = (
  res,
  status,
  message = "Request was successful",
  data = null,
  statusCode = 200
) => {
  return res.status(statusCode).json({
    status,
    message,
    data,
  });
};

module.exports = { response };
