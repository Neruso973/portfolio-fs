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
      <div className="border border-black w-[40%] min-h-[20%] p-4 mb-12 ml-12">
      </div>
      <div className="border border-black w-[40%] min-h-[20%] p-4 mb-12 ml-12">
        <h2>centres d'interets</h2>
        <ul>
          <li>Voyages</li>
          <li>Jeux Vidéos</li>
          <li>Brasseur amateur</li>
          <li>Cuisine</li>
          <li>Culture geek</li>
          <li>High-tech</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
