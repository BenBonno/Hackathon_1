import React from "react";
import logoSite from "../assets/paper-plane-logo.png";

function Header() {
  return (
    <div className="flex flex-wrap items-center justify-around w-full h-fit bg-c-ocean border-b-4 border-c-oasis">
      <div className="m-1">
        <img className="w-12" src={logoSite} alt="website logo" />
      </div>
      <h1 className="m-1 text-white font-bold font-HelvetiHand">CheckOo</h1>
      <button
        type="button"
        className="font-HelvetiHand m-1 py-1.5 px-5 text-sm font-medium text-white focus:outline-none bg-c-oasis rounded-full border-2 hover:bg-btn-oasis-1"
      >
        My List
      </button>
    </div>
  );
}

export default Header;
