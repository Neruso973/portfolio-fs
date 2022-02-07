import { useState } from "react";

import FlippedCard from "../FlippedCard";
import Tools from "../Tools";

function Skills() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleIsFlipped = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-wrap min-h-screen">
      <div className="w-[40%] mx-8">
        <FlippedCard isFlipped={isFlipped} handleIsFlipped={handleIsFlipped} />
      </div>
      <div className="w-[40%] mx-8">
        <Tools />
      </div>
      <div className="border border-black w-[40%] min-h-[20%] p-4 mb-12 ml-12 rounded-md shadow shadow-black">
      </div>
      <div className="border border-black w-[40%] min-h-[20%] p-4 mb-12 ml-12 rounded-md shadow shadow-black">
        <h2 className="text-2xl ml-[10rem] mb-4">centres d'interets</h2>
        <ul>
          <li className="my-2 text-xl">Voyages</li>
          <li className="my-2 text-xl">Jeux Vidéos</li>
          <li className="my-2 text-xl">Brasseur amateur</li>
          <li className="my-2 text-xl">Cuisine</li>
          <li className="my-2 text-xl">Culture geek</li>
          <li className="my-2 text-xl">High-tech</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
