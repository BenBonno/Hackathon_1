import React from 'react';
import logoWcs from '../assets/wcs.png';

function Footer() {
  return (
    <div fullName="w-full h-[15vh]">
      <div>
        <img src={logoWcs} alt="logo wcs" />
         <p>2022</p>
        </div>
      <div>
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