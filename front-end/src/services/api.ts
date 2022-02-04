import axios from "axios";

// Envoi/récupère les cookie à chaque requête
axios.defaults.withCredentials = true;

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

/**
 * Returns the whole techno list
 */
export const fetchTechnos = async () => {
  return (await axios(`${API_URL}/projects/technos`)).data;
};

/**
 * path add a new project
 */
export const fetchNewProject = async (
  name: string,
  screen: string,
  link: string,
  github: string,
  description: string,
  technos: string[]
) => {
  await axios.post(`${API_URL}/projects/`, {
    name,
    screen,
    link,
    github,
    description,
    technos,
  });
};

/**
 * Returns the whole Projet list
 */
export const fetchProject = async () => {
  return (await axios(`${API_URL}/projects/`)).data;
};

/**
 * path add a new project
 */
export const fetchAdmin = async (username: string, clearPassword: string) => {
  await axios.post(`${API_URL}/user/login`, {
    username,
    clearPassword
  });
};
