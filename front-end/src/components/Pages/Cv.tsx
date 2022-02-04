import cv from "../../assets/CV nelson ntepp.pdf";

function Cv() {
  return (
    <div className="h-full mt-[9%] bg-[#FFF]" id="projects">
      <h3 className="text-2xl ml-4">MON CURICULUM</h3>
      <div className="bg-[#041554] w-16 h-1 mb-6 ml-40"></div>
      <div className="flex flex-wrap">
        <div className="w-[40%] m-12">
          <h4>ÉTUDIANT</h4>
          <h4>Wild Code School Bordeaux</h4>
          <p className="bg-[#041554] text-[#707070] w-[36%]">
            {" "}
            Septembre 2021 - Fevrier 2022
          </p>
          <ul>
            <li>
              Conception, et développement, mise en page de site web dynamique
            </li>
            <li>
              Apprentissage des languages de programation Javascript /
              Typescript / nodeJS et MySQL
            </li>
            <li>Apprentissage des framework et librairies React et Express</li>
            <li>Apprentissage et utilisation des methodes agiles: Scrum</li>
            <li>
              Mise en place de plusieurs projets dont un projet client,
              conception des wireframes, maquettes et integrations
            </li>
          </ul>
        </div>
        <div className="w-[40%] m-12">
          <h4>OBJECTIFS</h4>
          <h4>Apprendre de nouvelles choses</h4>
          <p className="bg-[#1B2271] text-[#707070] w-[36%]">
            {" "}
            Septembre 2021 - Fevrier 2022
          </p>
          <ul>
            <li>
            Apprendre d'autres langages de programmation
            </li>
            <li>
            M'initier aux applications mobiles
            </li>
            <li>M'initier à la cybersecurité</li>
          </ul>
        </div>
        <div className="w-[40%] m-12">
          <h4>ÉTUDIANT</h4>
          <h4>Wild Code School Bordeaux</h4>
          <p className="bg-[#1B2271] text-[#707070] w-[36%]">
            {" "}
            Septembre 2021 - Fevrier 2022
          </p>
          <ul>
            <li>
              Conception, et développement, mise en page de site web dynamique
            </li>
            <li>
              Apprentissage des languages de programation Javascript /
              Typescript / nodeJS et MySQL
            </li>
            <li>Apprentissage des framework et librairies React et Express</li>
            <li>Apprentissage et utilisation des methodes agiles: Scrum</li>
            <li>
              Mise en place de plusieurs projets dont un projet client,
              conception des wireframes, maquettes et integrations
            </li>
          </ul>
        </div>
        <div className="w-[40%] m-12">
          <h4>OBJECTIFS</h4>
          <h4>DEVENIR MEILLEUR</h4>
          <p className="bg-[#1B2271] text-[#707070] w-[36%]">
            {" "}
            Septembre 2021 - Fevrier 2022
          </p>
          <ul>
            <li>
              Conception, et développement, mise en page de site web dynamique
            </li>
            <li>
              Apprentissage des languages de programation Javascript /
              Typescript / nodeJS et MySQL
            </li>
            <li>Apprentissage des framework et librairies React et Express</li>
            <li>Apprentissage et utilisation des methodes agiles: Scrum</li>
            <li>
              Mise en place de plusieurs projets dont un projet client,
              conception des wireframes, maquettes et integrations
            </li>
          </ul>
        </div>
      </div>
      <a href={cv} download="CV\ nelson\ ntepp.pdf">
        <button> Telecharger le cv</button>
      </a>
    </div>
  );
}

export default Cv;
