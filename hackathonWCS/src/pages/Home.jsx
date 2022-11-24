import React from "react";
import Search from "../components/Search";

function Home() {
  return (
    <div className="bg-c-creamy h-fit">
      <section className="flex justify-center items-center flex-col h-screen bg-home-theme bg-top gap-y-5">
        <h2 className="text-3xl font-bold text-btn-ocean-1">CheckOo</h2>
        <p className="w-2/3 my-4 text-gray-600 font-medium text-center">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression.
        </p>
        <div className="w-2/3">
          <Search />
        </div>
      </section>
    </div>
  );
}

export default Home;
