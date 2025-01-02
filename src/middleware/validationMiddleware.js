const { validationResult } = require("express-validator");

const validationMiddleware = (rules) => {
  return [
    ...rules,
    (req, res, next) => {
      const errors = validationResult(req);
      console.log("errors", errors);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];
};

// const ValidationMiddleware = {
//   validate: (rules) => {
//     return [
//       ...rules,
//       (req, res, next) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//           return res.status(400).json({ errors: errors.array() });
//         }
//         next();
//       },
//     ];
//   },
// };

module.exports = validationMiddleware;
