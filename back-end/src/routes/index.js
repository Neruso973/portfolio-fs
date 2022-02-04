const projectRouter = require("./Project");
const userRouter = require("./User");

const setupRoutes = (app) => {
  app.get("/api", (req, res) => {
    res.send("Welcome to WCS Express + REACT starter project");
  });

  //project routes
  app.use("/api/projects", projectRouter);

  // Users routes
  app.use("/api/user", userRouter);
};

module.exports = setupRoutes;
