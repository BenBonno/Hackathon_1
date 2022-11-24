import React from "react";
import logoWcs from "../assets/wcs.png";

function Footer() {
  return (
    <div className="w-full h-fit bg-ocean-theme bg-cover bg-center bg-no-repeat">
      <div>
        <img src={logoWcs} alt="logo wcs" />
        <p>2022</p>
      </div>
      <div className="bg-red-500">
        <p>Benoit</p>
        <p>Thomas</p>
        <p>Dimitri</p>
        <p>Romain</p>
        <p>Elodie</p>
      </div>
    </div>
  );
}

export default Footer;
