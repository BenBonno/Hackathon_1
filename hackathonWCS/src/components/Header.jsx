import React from "react";
import logoSite from "../assets/paper-plane-logo.png";

function Header() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full h-[15vh] bg-c-ocean border-b-4 border-c-oasis gap-12">
      <div className="">
        <img className="w-12" src={logoSite} alt="website logo" />
      </div>
      <h1 className="text-white font-bold">Nom du Site</h1>
      <button
        type="button"
        className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-c-oasis rounded-full border-2 "
      >
        My List
      </button>
    </div>
  );
}

export default Header;
