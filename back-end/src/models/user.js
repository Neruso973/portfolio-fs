const db = require("../services/Db");
const { schema, clearSchema } = require("./../services/schema");
const bcrypt = require("bcrypt");

/**
 * ajouter un utilisateur
 */

const createUser = async (username, password) => {
  const { error } = schema.validate(
    { username, password },
    { abortEarly: false }
  );
  if (error) {
    throw error.details;
  }
  await db.admin.create({
    data: {
      username,
      password: await bcrypt.hash(password, 12),
    },
  });
};

/**
 * Retourne l'admin
 */
const findOneByUsername = async (username, clearPassword) => {
  const { error } = clearSchema.validate(
    { username, clearPassword },
    { abortEarly: false }
  );

  if (error) {
    console.log(error);
    throw error.details;
  }

  const user = await db.admin.findUnique({
    where: { username: username },
  });
  if (
    user === null ||
    (await bcrypt.compare(clearPassword, user.password)) === false
  ) {
    console.log("null");
    return (user = "error 400");
  }
  console.log(user);
  return user;
};

module.exports = {
  findOneByUsername,
  createUser,
};
