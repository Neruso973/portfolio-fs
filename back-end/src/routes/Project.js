const router = require("express").Router();
const ProjectModel = require("../models/project");

/**
 * Returns the whole projects list
 */
router.get("/", async (req, res) => {
  res.send(await ProjectModel.findAllProjects());
});

/**
 * Ajouter une nouvelle techno
 */
router.post("/technos", async (req, res) => {
  res.send(await ProjectModel.addTechno(req.body));
});

/**
 * Recupere toutes les techno
 */
router.get("/technos", async (req, res) => {
  res.send(await ProjectModel.findTechno());
});

/**
 * Ajouter une nouvelle techno
 */
router.post("/", async (req, res) => {
  const { name, screen, link, github, description, technos } = req.body;
  res.send(
    await ProjectModel.createProject(
      name,
      screen,
      link,
      github,
      description,
      technos
    )
  );
});

module.exports = router;
