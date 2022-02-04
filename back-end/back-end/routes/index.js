const setupRoutes = (app) => {
  // Home Page
  app.get("/", (req, res) => {
    res.send("Welcome to WCS Express + REACT starter project");
  });
};

module.exports = setupRoutes;