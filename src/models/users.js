const dbPool = require("../config/database");
const getAllUsers = () => {
  const sqlQuery = "select * from users";
  return dbPool.execute(sqlQuery);
};

const createNewUser = (body) => {
  const sqlQuery = `insert into users (name, email, address) values ('${body.name}', '${body.email}', '${body.address}')`;
  return dbPool.execute(sqlQuery);
};

const updateUser = (body, idUser) => {
  const sqlQuery = `update users set name = '${body.name}', email = '${body.email}', address = '${body.address}' where id = ${idUser}`;
  return dbPool.execute(sqlQuery);
};

const deleteUser = (idUser) => {
  const sqlQuery = `delete from users where id = ${idUser}`;
  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
