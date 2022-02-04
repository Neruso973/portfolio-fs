const { projects, techno } = require("../services/Db");
const db = require("../services/Db");

/**
 * Retourne tous les projets
 */
const findAllProjects = async () => {
  const project = await db.project.findMany();
  return project;
};

/**
 * creer une nouvelles techno
 */
const addTechno = async (techno_name) => {
  await db.techno.create({ data: techno_name });
};

/**
 * afficher la listes des tecnhos
 */
const findTechno = async () => {
  const technos = await db.techno.findMany();
  return technos;
};

/**
 * creer un projet
 */
const createProject = async (
  name,
  screen,
  link,
  github,
  description,
  technos
) => {
  try {
    const project = await db.project.create({
      data: {
        name,
        screen,
        link,
        github,
        description,
        technos,
      },
    });
    return project;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  findAllProjects,
  addTechno,
  findTechno,
  createProject,
};
