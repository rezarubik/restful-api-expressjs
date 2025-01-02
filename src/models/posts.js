const dbPool = require("../config/database");
const getAllPosts = () => {
  const sqlQuery = `SELECT
                        posts.*
                        , users.name author
                    FROM
                        posts
                    JOIN
                        users on users.id = posts.user_id
                    ORDER BY
                        posts.created_at desc
                    `;
  return dbPool.execute(sqlQuery);
};

const createPost = (body, userId) => {
  const sqlQuery = `insert into posts(title, content, user_id)
                        values('${body.title}', '${body.content}', ${userId})`;
  return dbPool.execute(sqlQuery);
};

const updatePost = (body, postId) => {
  //   const dateNow = Date.now();
  const sqlQuery = `update 
                        posts
                    set
                        title = '${body.title}',
                        content = '${body.content}'
                    where
                        id = ${postId}`;
  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
};
