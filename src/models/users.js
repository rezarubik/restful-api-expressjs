const dbPool = require("../config/database");
const getAllUsers = () => {
  const sqlQuery = "select id, name, email, address from users";
  return dbPool.execute(sqlQuery);
};

const createNewUser = (body, password) => {
  const sqlQuery = `insert into users (name, email, password, address) values ('${body.name}', '${body.email}', '${password}', '${body.address}')`;
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

const getUserByEmail = (userEmail) => {
  const sqlQuery = `select id, email, name, address from users where email = '${userEmail}'`;
  console.log("execute", dbPool.execute(sqlQuery));
  return dbPool.execute(sqlQuery);
};

const checkUser = (body) => {
  const sqlQuery = `select * from users where email = '${body.email}'`;
  console.log("execute", dbPool.execute(sqlQuery));
  return dbPool.execute(sqlQuery);
};
const findUserById = (body) => {
  const sqlQuery = `select * from users where id = '${body.id}'`;
  console.log("execute", dbPool.execute(sqlQuery));
  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  checkUser,
  findUserById,
  getUserByEmail,
};
