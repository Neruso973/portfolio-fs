import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";
import logoRevert from "../../assets/LogoRevert.svg";

function Navbar() {
  const [isHover, setisHover] = useState<Boolean>(false);

  const revert = () => {
    setisHover(true)
  } 

  const base = () => {
    setisHover(false)
  }

  return (
    <div className="flex-col">
       <Link to="/">
      <img src={!isHover? logo : logoRevert} alt="logo de Nelson" className="w-[90%] mt-24 ml-[5%] " onMouseOver={() => revert()} onMouseLeave={() => base()}/>
      </Link>
      <ul className="flex-col text-white text-3xl text-center cursor-pointer">
        <li className="mt-12 hover:text-[#2ea7c6] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/">Accueil</Link>
        </li>
        <li className="mt-12 hover:text-[#2ea7c6] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/about">A Propos</Link>
        </li>
        <li className="mt-12 hover:text-[#2ea7c6] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/skills">Compétences</Link>
        </li>
        <li className="mt-12 hover:text-[#2ea7c6] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/projects">Portfolio</Link>
        </li>
        <li className="mt-12 hover:text-[#2ea7c6] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/cv">Curiculum</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
