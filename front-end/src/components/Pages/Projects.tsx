import { useEffect, useState } from "react";

import Portfolio from "../Portfolio";
import { fetchProject } from "../../services/api";

interface Projet {
  name: string;
  screen: string;
  link: string;
  github: string;
  description: string;
  technos: JSX.Element[];
}

function Projects() {
  const [projet, setProjet] = useState<Projet[]>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const getProject = async () => {
    setProjet(await fetchProject());
    setIsLoading(false)
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="h-full mt-[9%] bg-[#FFF]" id="projects">
      <h3 className="text-2xl ml-4">MES PROJETS</h3>
      <div className="bg-[#1B2271] w-16 h-1 mb-6 ml-28"></div>
      <div className="flex flex-wrap">
{!isLoading ? 
       (projet && projet.map((item) => 
          (<div key={item.name}>
            <Portfolio
          key={item.name}
          name={item.name}
          screen={item.screen}
          link={item.link}
          technos={item.technos}
          github={item.github}
          description={item.description}
          />
           </div>)
          )) : (<p>chargement en cours</p>) }
      </div>
    </div>
  );
}

export default Projects;
