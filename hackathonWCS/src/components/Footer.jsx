import React from "react";
import logoWcs from "../assets/wcs.png";

function Footer() {
  return (
    <div className="flex flex-col justify-end w-full bg-ocean-theme bg-cover bg-top bg-no-repeat">
      <section className="flex flex-wrap justify-center text-center text-gray-600 font-bold py-4 font-HelvetiHand">
        <h2 className="w-full text-3xl text-c-ocean mb-28">Team Dev :</h2>
        <p className="w-1/2">Benoit</p>
        <p className="w-1/2">Thomas</p>
        <p className="w-1/2">Dimitri</p>
        <p className="w-1/2">Elodie</p>
        <p className="w-1/2">Romain</p>
      </section>
      <hr className="py-2 w-4/5 mx-auto" />
      <section className="w-full py-2 flex flex-wrap justify-between">
        <img className="w-20 my-2 ml-8" src={logoWcs} alt="logo wcs" />
        <p className="text-sm mr-8 text-white font-medium">
          Copyright © 2022 CheckOo
        </p>
      </section>
    </div>
  );
}

export default Footer;
