const router = require("express").Router();
const UserModel = require("../models/user");

/**
 * Register
 */
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    await UserModel.createUser(username, password);
    res.status(201).send("created");
  } catch (e) {
    console.log(e);
    if (e.meta) {
      res.status(400).send(e.meta.message);
    } else if (e.sqlMessage) {
      res.status(400).send([{ message: e.sqlMessage }]);
    } else {
      res.status(500).send("Unexpected error");
    }
  }
});

/**
 * Login
 */
router.post("/login", async (req, res) => {
  const { username, clearPassword } = req.body;

  try {
    const user = await UserModel.findOneByUsername(username, clearPassword);

    if (user === "error 400") {
      return res.status(401).send("unauthorized");
    }
    const { password, ...userObject } = user;
    if (user) {
      req.session.user = userObject;
      return res.status(200).send(userObject);
    }
    res.status(403).send("Forbidden");
  } catch (e) {
    res.status(500).send("unexpected error");
  }
});

module.exports = router;
