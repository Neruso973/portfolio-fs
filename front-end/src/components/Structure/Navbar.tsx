import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";
import logoRevert from "../../assets/LogoRevert.svg";

function Navbar() {
  const [isHover, setisHover] = useState<Boolean>(false);

  const revert = () => {
    setisHover(true);
  };

  const base = () => {
    setisHover(false);
  };

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const closeBurger = () => {
    setShowLinks(false);
  };

  return (
    <nav className={`navbar ${showLinks ? "showNav" : "hideNav"}`}>
      <Link to="/">
        <img
          src={!isHover ? logo : logoRevert}
          alt="logo de Nelson"
          className="w-[90%] mt-24 ml-[5%] "
          onMouseOver={() => revert()}
          onMouseLeave={() => base()}
        />
      </Link>
      <div className="navbar-container">
        <div className="navbar-bot">
          <div className="navLinks">
            <div className="flex-col">
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
          </div>
        </div>
        <button type="button" className="navBurger" onClick={handleShowLinks}>
          <span className="burgerBar" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
